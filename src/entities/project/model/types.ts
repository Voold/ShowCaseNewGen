export type ProjectDirection = 'web' | 'mobile' | 'engineering' | 'ml' | 'fintech' | 'design';

export type ProjectFormat = 'CaseProjectRequest' | 'RealProjectRequest' | 'PaidProjectRequest' | 'StudyProjectRequest';

export interface ProjectDirectionItem {
  key: ProjectDirection;
  label: string;
}

export interface ProjectCardData {
  id: string,
  type: ProjectFormat,
  tags: ProjectDirectionItem[],
  ownerId: number,
  partnerId: {
    value: string,
    verbose: string
  },
  status: string,
  meta: {
    title: string,
    description: string
  },
  checkpoints: string,
  roles: {
      roleId: string,
      placesCount: number,
      minPlacesCount: number,
      places: number,
      meta: {
        name: string,
        description: string
      },
      skills: [
        {
          skillId: string,
          skillName: string,
          requireSkill?: boolean
        }
      ]
  }[],
  prdMeta: PrdMeta,

  extended?: boolean,
  brandColor?: string
}

export interface PrdMeta {
  problem: string,
  context: string,
  audience: string,
  requirements: string[],
  mvp: string[]
}