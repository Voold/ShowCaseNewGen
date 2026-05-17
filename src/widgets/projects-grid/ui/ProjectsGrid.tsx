import { ProjectCard } from '@/entities/project';
import styles from './ProjectsGrid.module.css';

const MOCK_PROJECTS = Array(48).fill('Проект ИСП РАН: Открытый инструмент моделирования');

export default function ProjectsGrid() {
  return (
    <div className={styles.body}>
      {MOCK_PROJECTS.map((title, index) => (
        <ProjectCard key={index} extended={index === 5 || index === 14}>
          {title}
        </ProjectCard>
      ))}
    </div>
  );
}