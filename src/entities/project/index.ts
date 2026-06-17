export { default as ProjectCard } from './ui/ProjectCard/ProjectCard';
export type { ProjectCardData, ProjectDirection, ProjectFormat } from './model/types';
export { MOCK_PROJECTS } from './model/mockProjects';
export { typeProjectsLabel } from '../../shared/ui/type-project-label/typeProjectsLabel';

export { ProjectCardFactory } from './ui/ProjectCardFactory/ProjectCardFactory';
export * from './model/types';
export { useProjects, useProjectDetails, useCreateProject } from './api/queries';