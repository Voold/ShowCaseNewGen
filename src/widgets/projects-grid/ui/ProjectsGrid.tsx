import { MOCK_PROJECTS } from '@/entities/project/model/mockProjects';
import { ProjectCardFactory } from '@/entities/project/ui/ProjectCardFactory/ProjectCardFactory'
import styles from './ProjectsGrid.module.css';

export default function ProjectsGrid() {
  return (
    <div className={styles.body}>
      {MOCK_PROJECTS.map((project, index) => (
        ProjectCardFactory({project, index})
      ))}
    </div>
  );
}