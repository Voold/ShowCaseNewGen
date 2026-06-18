import type {Competence} from "@/features/my-competencies/model/types.ts";

export const MY_COMPETENCIES: Competence[] = [
  {
    roleTypeId: 'Frontend',
    roleTypeName: 'Frontend',
    skills: [
      { skillId: '1', skillName: 'React'},
      { skillId: '2', skillName: 'HTML'},
      { skillId: '3', skillName: 'CSS'}
    ]
  },
  {
    roleTypeId: 'Backend',
    roleTypeName: 'Backend',
    skills: [
      { skillId: '9', skillName: 'Java'},
      { skillId: '10', skillName: 'Kotlin'},
      { skillId: '11', skillName: 'Scala'}
    ]
  },
]

export const ALL_SKILLS: Competence = {
  roleTypeId: '12133',
  roleTypeName: 'Frontend',
  skills: [
    { skillId: '1', skillName: 'React'},
    { skillId: '2', skillName: 'HTML'},
    { skillId: '3', skillName: 'CSS'},
    { skillId: '4', skillName: 'TanStack'},
    { skillId: '5', skillName: 'Query'},
    { skillId: '6', skillName: 'JS'},
    { skillId: '7', skillName: 'TS'},
    { skillId: '8', skillName: 'Redux'}
  ]
}