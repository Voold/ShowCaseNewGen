import { useProjects } from '@/entities/project/api/queries';
import { ProjectCardFactory } from '@/entities/project/ui/ProjectCardFactory/ProjectCardFactory';
import styles from './ProjectsGrid.module.css';

export default function ProjectsGrid() {
  const { data, isLoading, isError } = useProjects();

  if (isLoading) return <div>Загрузка проектов...</div>;
  if (isError) return <div>Ошибка при загрузке проектов</div>;
  if (!data?.projects.length) return <div>Проектов пока нет</div>;

  return (
    <div className={styles.body}>
      {data.projects.map((project, index) => (
        <ProjectCardFactory key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}