import { create } from "zustand";
import type { Skill, Competence } from "@/features/my-competencies/model/types.ts";
import { ALL_COMPETENCIES } from "@/features/my-competencies/model/store/mock.ts";

interface SkillsStoreTypes {
  originalData: Competence[];
  draftData: Competence[];
  currentFullSkills: Skill[];
  hasChanges: boolean;

  editingId: string | null;
  popoverOpenFor: string | null;

  globalSkills: Skill[];
  setGlobalSkills: (skills: Skill[]) => void;

  setInitialData: (data: Competence[]) => void;
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

  getSkillsForCompetence: (competenceId: string) => void;
}

export const useSkillsStore = create<SkillsStoreTypes>((set) => ({
  originalData: [],
  draftData: [],
  hasChanges: false,

  currentFullSkills: [],

  editingId: '',
  popoverOpenFor: null,

  globalSkills: [],
  setGlobalSkills: (skills) => set({ globalSkills: skills }),

  setInitialData: (data) => set({ originalData: data, draftData: data, hasChanges: false }),
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
      const addedSkillIds = new Set(newDraft.find(c => c.roleTypeId === competenceId)?.skills.map(s => s.skillId) ?? []);
      newCurrentFullSkills = state.globalSkills.filter(s => !addedSkillIds.has(s.skillId));
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

  getSkillsForCompetence: (competenceId) => set((state) => {
    const addedSkillIds = new Set(
      state.draftData.find(c => c.roleTypeId === competenceId)?.skills.map(s => s.skillId) ?? []
    );
    return {
      currentFullSkills: state.globalSkills.filter(s => !addedSkillIds.has(s.skillId)),
    };
  }),

}))