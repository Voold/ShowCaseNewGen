export type ProjectDirection = 'web' | 'mobile' | 'engineering' | 'ml' | 'fintech' | 'design';
export type ProjectFormat = 'Case' | 'Real' | 'Study' | 'Paid';
export type CreateProjectRequestType = 
  | 'Case' 
  | 'Real' 
  | 'Study';

export interface ProjectDirectionItem {
  key: ProjectDirection;
  label: string;
}

export interface PrdMeta {
  problem: string;
  context: string;
  audience: string;
  requirements: string[];
  mvp: string[];
}

export interface ProjectCardData {
  id: string;
  type: ProjectFormat;
  tags: ProjectDirectionItem[];
  ownerId: number;
  partnerId: {
    value: string;
    verbose: string;
  };
  status: string;
  meta: {
    title: string;
    description: string;
  };
  checkpoints: string;
  roles: {
    roleId: string;
    placesCount: number;
    minPlacesCount: number;
    places: number;
    meta: {
      name: string;
      description: string;
    };
    skills: {
      skillId: string;
      skillName: string;
      requireSkill?: boolean;
    }[];
  }[];
  prdMeta: PrdMeta;
  extended?: boolean;
  brandColor?: string;
}

export interface BackendCheckpointItem {
  title: string;
  deadline: string;
}

export interface BackendCheckpoints {
  id: string;
  name: string;
  checkpoints: BackendCheckpointItem[];
}

export interface BackendRole {
  roleId: string;
  roleType: {
    id: string;
    name: string;
  };
  placesCount: number;
  minPlacesCount: number;
  places: number[];
  skills: {
    skillId: string;
    skillName: string;
  }[];
  meta: {
    description: string;
  };
}

export interface BackendTag {
  tagId: string;
  tagName: string;
}

export interface BackendPrdAudience {
  title: string;
  minAge: number;
  maxAge: number;
  description: string;
}

export interface BackendPrdMeta {
  prerequisites: string;
  audience: BackendPrdAudience[];
  projectGoal: string;
  functional: string[];
  problemStatement: string;
}

export interface ProjectDto {
  id: string;
  ownerId: number;
  partnerId: {
    value: string;
    verbose: string;
  };
  status: 'Active' | 'Completed' | string;
  meta: {
    title: string;
    description: string;
  };
  checkpoints: BackendCheckpoints;
  roles: BackendRole[];
  tags: BackendTag[];
  prdMeta: BackendPrdMeta;
  type?: ProjectFormat;
}

export interface ProjectsResponseDto {
  hits: ProjectDto[];
  total: number;
  offset: number;
  limit: number;
}

export interface GetProjectsQueryParams {
  q?: string;
  status?: string[];
  tagId?: string[];
  roleTypeId?: string[];
  userId?: number[];
  managerId?: number[];
  sort?: 'relevance' | 'created_asc' | 'created_desc';
  offset?: number;
  limit?: number;
}

export interface CreateProjectRolePayload {
  roleTypeId: string;
  placesCount: number;
  minPlacesCount: number;
  meta: {
    name: string;
    description: string;
  };
  skills: any[];
}

export interface BaseCreateProjectDto {
  ownerId: number;
  partnerId: string;
  checkpoints: string;
  meta: {
    title: string;
    description: string;
  };
  roles: CreateProjectRolePayload[];
  tagIds: string[];
}

export interface CreateStudyProjectDto extends BaseCreateProjectDto {
  type: 'Study';
  prdMeta: {
    prerequisites: string;
    projectGoal: string;
    keyFunctionality: string[];
  };
}

export interface CreateCaseProjectDto extends BaseCreateProjectDto {
  type: 'Case';
  prdMeta: Record<string, any>;
}

export interface CreateRealProjectDto extends BaseCreateProjectDto {
  type: 'Real';
  prdMeta: Record<string, any>;
}

export type CreateProjectDto = CreateCaseProjectDto | CreateRealProjectDto | CreateStudyProjectDto;