import {create} from "zustand";
import type {Skill, Competence} from "@/features/my-competencies/model/types.ts";
import {MY_COMPETENCIES} from "@/features/my-competencies/model/store/mock.ts";

interface SkillsStoreTypes {
  originalData: Competence[];
  draftData: Competence[];

  editingId: string | null;
  popoverOpenFor: string | null;

  setOriginalData: (draftData: Competence[]) => void;
  startEditing: (competenceId: string) => void;
  cancelEditing: () => void;
  // TODO Сохранить данные
  saveChanges: () => void;

  // TODO Типы поменять
  removeSkill: (competenceId: string, skillId: string) => void;
  addSkill: (competenceId: string, skill: Skill) => void;
  removeCompetency: (competenceId: string) => void;
  // addCompetency: (competenceId: string) => void;

  setPopoverOpenFor: (competenceId: string | null) => void

  // TODO API
  getSkillsForCompetence: (competenceId: string) => Skill[];
}


export const useSkillsStore = create<SkillsStoreTypes>((set) => ({
  originalData: MY_COMPETENCIES,
  draftData: MY_COMPETENCIES,

  editingId: '',
  popoverOpenFor: null,

  setOriginalData: (draftData) => set({originalData: draftData}),
  startEditing: (competenceId) => {set({editingId: competenceId, draftData: []})},
  cancelEditing: () => {set({editingId: '', draftData: [], popoverOpenFor: null})},
  saveChanges: () => {},

  removeSkill: (competenceId, skillId) => set((state) => ({
    draftData: state.draftData.map((comp) =>
        comp.roleTypeId !== competenceId ? {...comp, skills: comp.skills.filter(skill => skill.skillId !== skillId)} : comp
    )
  })),

  addSkill: (competenceId, skill) => set((state) => ({
    draftData: state.draftData.map((comp) => {
      if (comp.roleTypeId == competenceId) {
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

  getSkillsForCompetence: (competenceId) => [],

}))