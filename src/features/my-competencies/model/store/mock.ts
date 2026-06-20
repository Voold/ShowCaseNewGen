import type {Competence, Skill} from "@/features/my-competencies/model/types.ts";

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

// Mock: all available skills per competence (roleTypeId -> Skill[])
export const SKILLS_BY_COMPETENCE: Record<string, Skill[]> = {
  Frontend: [
    { skillId: '1', skillName: 'React' },
    { skillId: '2', skillName: 'HTML' },
    { skillId: '3', skillName: 'CSS' },
    { skillId: '4', skillName: 'TanStack' },
    { skillId: '5', skillName: 'Query' },
    { skillId: '6', skillName: 'JS' },
    { skillId: '7', skillName: 'TS' },
    { skillId: '8', skillName: 'Redux' },
    { skillId: '12', skillName: 'Vue' },
    { skillId: '13', skillName: 'Angular' },
  ],
  Backend: [
    { skillId: '9', skillName: 'Java' },
    { skillId: '10', skillName: 'Kotlin' },
    { skillId: '11', skillName: 'Scala' },
    { skillId: '14', skillName: 'Python' },
    { skillId: '15', skillName: 'Go' },
    { skillId: '16', skillName: 'SQL' },
    { skillId: '17', skillName: 'Docker' },
  ],
};