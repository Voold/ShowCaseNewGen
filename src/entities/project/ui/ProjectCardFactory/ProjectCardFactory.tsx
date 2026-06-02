import type { ProjectCardData } from '../../model/types';
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectCardExtended from '../ProjectCardExtended/ProjectCardExtended';

export const ProjectCardFactory = ({ project, index }: { project: ProjectCardData, index: number }) => {
  if (project.extended) return <ProjectCardExtended key={index} project={project} />;
  return <ProjectCard key={index} project={project} />;
};