import { create } from "zustand";
import type { Skill, Competence } from "@/features/my-competencies/model/types.ts";
import { MY_COMPETENCIES, SKILLS_BY_COMPETENCE, ALL_COMPETENCIES } from "@/features/my-competencies/model/store/mock.ts";

interface SkillsStoreTypes {
  originalData: Competence[];
  draftData: Competence[];
  currentFullSkills: Skill[];
  hasChanges: boolean;

  editingId: string | null;
  popoverOpenFor: string | null;

  setOriginalData: (draftData: Competence[]) => void;
  startEditing: (competenceId: string) => void;
  cancelEditing: () => void;
  // TODO Сохранить данные
  saveChanges: () => void;
  resetHasChanges: () => void;

  // TODO Типы поменять
  removeSkill: (competenceId: string, skillId: string) => void;
  addSkill: (skill: Skill) => void;
  removeCompetency: (competenceId: string) => void;
  addCompetency: (competenceId: string) => void;

  setPopoverOpenFor: (competenceId: string | null) => void

  // TODO API
  getSkillsForCompetence: (competenceId: string) => void;
}


export const useSkillsStore = create<SkillsStoreTypes>((set) => ({
  originalData: MY_COMPETENCIES,
  draftData: MY_COMPETENCIES,
  hasChanges: false,

  currentFullSkills: [],

  editingId: '',
  popoverOpenFor: null,

  setOriginalData: (data) => set({ originalData: data }),
  startEditing: (competenceId) => { set({ editingId: competenceId, popoverOpenFor: null }) },
  cancelEditing: () => { set((state) => ({ editingId: '', draftData: [...state.originalData], hasChanges: false, popoverOpenFor: null })) },
  saveChanges: () => set((state) => ({ originalData: state.draftData, hasChanges: false, editingId: '', popoverOpenFor: null })),
  resetHasChanges: () => set({ hasChanges: false }),

  removeSkill: (competenceId, skillId) => set((state) => {
    const newDraft = state.draftData.map((comp) =>
      comp.roleTypeId === competenceId ? { ...comp, skills: comp.skills.filter(skill => skill.skillId !== skillId) } : comp
    );
    let newCurrentFullSkills = state.currentFullSkills;
    if (state.popoverOpenFor === competenceId) {
      const allForCompetence = SKILLS_BY_COMPETENCE[competenceId] ?? [];
      const removedSkill = allForCompetence.find(s => s.skillId === skillId);
      if (removedSkill) {
        const merged = [...state.currentFullSkills, removedSkill];
        newCurrentFullSkills = allForCompetence.filter(s => merged.some(m => m.skillId === s.skillId));
      }
    }
    return { draftData: newDraft, currentFullSkills: newCurrentFullSkills, hasChanges: JSON.stringify(newDraft) !== JSON.stringify(state.originalData) };
  }),

  addSkill: (skill) => set((state) => {
    const newDraft = state.draftData.map((comp) => {
      if (comp.roleTypeId == state.editingId) {
        if (comp.skills.some((s) => s.skillId === skill.skillId)) return comp;
        return { ...comp, skills: [...comp.skills, skill] }
      }
      return comp
    });
    const newCurrentFullSkills = state.currentFullSkills.filter(s => s.skillId !== skill.skillId);
    return { draftData: newDraft, currentFullSkills: newCurrentFullSkills, hasChanges: JSON.stringify(newDraft) !== JSON.stringify(state.originalData) };
  }),


  removeCompetency: (competenceId) => set((state) => ({
    draftData: state.draftData.filter((comp) => comp.roleTypeId !== competenceId),
    originalData: state.originalData.filter((comp) => comp.roleTypeId !== competenceId),
    editingId: ''
  })),

  addCompetency: (competenceId) => set((state) => {
    const competence = ALL_COMPETENCIES.find(c => c.roleTypeId === competenceId);
    const roleTypeName = competence?.roleTypeName ?? competenceId;
    const newCompetence = {
      roleTypeId: competenceId,
      roleTypeName,
      skills: []
    };
    return {
      draftData: [
        ...state.draftData,
        newCompetence
      ],
      originalData: [
        ...state.originalData,
        newCompetence
      ]
    };
  }),

  setPopoverOpenFor: (competenceId) => set({ popoverOpenFor: competenceId }),

  // TODO API
  getSkillsForCompetence: (competenceId) => set((state) => {
    const allForCompetence = SKILLS_BY_COMPETENCE[competenceId] ?? [];
    const addedSkillIds = new Set(
      state.draftData.find(c => c.roleTypeId === competenceId)?.skills.map(s => s.skillId) ?? []
    );
    return {
      currentFullSkills: allForCompetence.filter(s => !addedSkillIds.has(s.skillId)),
    };
  }),

}))