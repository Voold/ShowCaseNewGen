export type Skill = {
  id: string;
  name: string
};

export type Competence = {
  id: string;
  title?: string;
  skills: Skill[]
};

const MY_COMPETENCIES: Competence = [
  {
    id: 'Frontend',
    title: 'Frontend',
    skills: [
      { id: '1', name: 'React'},
      { id: '2', name: 'HTML'},
      { id: '3', name: 'CSS'}
    ]
  },
  {
    id: 'Backend',
    title: 'Backend',
    skills: [
      { id: '1', name: 'Java'},
      { id: '2', name: 'Kotlin'},
      { id: '3', name: 'Scala'}
    ]
  },
]

const ALL_SKILLS: Competence = {
  id: 'Frontend',
  skills: [
    { id: '1', name: 'React'},
    { id: '2', name: 'HTML'},
    { id: '3', name: 'CSS'},
    { id: '4', name: 'TanStack'},
    { id: '5', name: 'Query'},
    { id: '6', name: 'JS'},
    { id: '7', name: 'TS'},
    { id: '8', name: 'Redux'}
  ]
}