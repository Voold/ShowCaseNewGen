import type { ProjectCardData } from '../../model/types';
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectCardExtended from '../ProjectCardExtended/ProjectCardExtended';

export const ProjectCardFactory = ({ project }: { project: ProjectCardData }) => {
  if (project.EXTENDED) return <ProjectCardExtended project={project} />;
  return <ProjectCard project={project} />;
};