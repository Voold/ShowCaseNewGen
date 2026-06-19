import {create} from "zustand";
import type {Skill, Competence} from "@/features/my-competencies/model/types.ts";
import {MY_COMPETENCIES} from "@/features/my-competencies/model/store/mock.ts";

interface SkillsStoreTypes {
  originalData: Competence[];
  draftData: Competence[];
  currentFullSkills: Skill[]

  editingId: string | null;
  popoverOpenFor: string | null;

  setOriginalData: (draftData: Competence[]) => void;
  startEditing: (competenceId: string) => void;
  cancelEditing: () => void;
  // TODO Сохранить данные
  saveChanges: () => void;

  // TODO Типы поменять
  removeSkill: (competenceId: string, skillId: string) => void;
  addSkill: (skill: Skill) => void;
  removeCompetency: (competenceId: string) => void;
  // addCompetency: (competenceId: string) => void;

  setPopoverOpenFor: (competenceId: string | null) => void

  // TODO API
  getSkillsForCompetence: (competenceId: string) => void;
}


export const useSkillsStore = create<SkillsStoreTypes>((set) => ({
  originalData: MY_COMPETENCIES,
  draftData: MY_COMPETENCIES,

  currentFullSkills: [
    { skillId: '1', skillName: 'React'},
    { skillId: '2', skillName: 'HTML'},
    { skillId: '3', skillName: 'CSS'},
    { skillId: '4', skillName: 'TanStack'},
    { skillId: '5', skillName: 'Query'},
    { skillId: '6', skillName: 'JS'},
    { skillId: '7', skillName: 'TS'},
    { skillId: '8', skillName: 'FSD'},
    { skillId: '9', skillName: 'Redux'}
  ],

  editingId: '',
  popoverOpenFor: null,

  setOriginalData: (draftData) => set({originalData: draftData}),
  startEditing: (competenceId) => {set({editingId: competenceId, popoverOpenFor: null})},
  cancelEditing: () => {set((state) => ({editingId: '', draftData: [...state.originalData], popoverOpenFor: null}))},
  saveChanges: () => {},

  removeSkill: (competenceId, skillId) => set((state) => ({
    draftData: state.draftData.map((comp) =>
        comp.roleTypeId === competenceId ? {...comp, skills: comp.skills.filter(skill => skill.skillId !== skillId)} : comp
    )
  })),

  addSkill: (skill) => set((state) => ({
    draftData: state.draftData.map((comp) => {
      if (comp.roleTypeId == state.editingId) {
        if (comp.skills.some((s) => s.skillId === skill.skillId)) return comp;
        return { ...comp, skills: [...comp.skills, skill]}
      }
      return comp
    })
  })),


  removeCompetency: (competenceId) => set((state) => ({
    draftData: state.draftData.filter((comp) => comp.roleTypeId !== competenceId)
  })),

  setPopoverOpenFor: (competenceId) => set({popoverOpenFor: competenceId}),

  getSkillsForCompetence: (competenceId) => set({
    currentFullSkills: [
      { skillId: '1', skillName: 'React'},
      { skillId: '2', skillName: 'HTML'},
      { skillId: '3', skillName: 'CSS'}
    ]
  }),

}))