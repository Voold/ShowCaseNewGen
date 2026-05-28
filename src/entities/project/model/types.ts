export type ProjectDirection = 'web' | 'mobile' | 'engineering' | 'ml' | 'fintech' | 'design';

export type ProjectFormat = 'CaseProjectRequest' | 'RealProjectRequest' | 'PaidProjectRequest';

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
  status: 'Active',
  meta: {
    title: string,
    description: string
  },
  checkpoint: {
    value: string
  },
  roles: {
      roleId: string,
      placesCount: number,
      minPlacesCount: number,
      places: number[],
      meta: {
        name: string,
        description: string
      }
  }[],
  prdMeta: {
    problem: string,
    context: string,
    audience: string,
    requirements: string[],
    mvp: string[]
  }

  EXTENDED: boolean,
  brandColor?: string
}
