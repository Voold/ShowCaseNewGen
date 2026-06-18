export type Skill = {
  skillId: string;
  skillName: string
};

export type Competence = {
  roleTypeId: string;
  roleTypeName?: string;
  skills: Skill[]
};