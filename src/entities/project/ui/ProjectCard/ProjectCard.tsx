import styles from './ProjectCard.module.css';
import type { ProjectCardData } from '../../model/types';
import { FolderIcon } from '@/shared/ui';
import { CodeIcon } from '@/shared/ui/icons/CodeIcon';
import { StarIcon } from '@/shared/ui/icons/StarIcon';

interface ProjectCardProps {
  project: ProjectCardData;
}

const typeProject = (type: string) => {
  switch (type) {
    case 'case':
      return (<div className={styles.case}>
                <FolderIcon pathClassName={styles.pathFolder}/>
                Кейсовый
              </div>)
    case 'real':
      return (<div className={styles.real}>
                <CodeIcon pathClassName={styles.pathCode}/>
                Реальный
              </div>)     
    case 'paid':
      return (<div className={styles.paid}>
                <StarIcon pathClassName={styles.pathStar}/>
                Оплачиваемый
              </div>)   
    default:
      return 'Пиздец'                       
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { id, title, directions, format, competencies, organization, extended, description } = project;

  const visibleDirections = directions.slice(0, 1);
  const remainCount = directions.length - 1;

  return (
    <div className={`${styles.cardBody} ${extended ? styles.extended : ''}`} data-bg={directions[0]?.label}>

      <div className={`${styles.header} ${styles[directions[0]?.key]}`} data-bg={directions[0]?.label}>
        <div className={styles.directionTag}>{visibleDirections[0]?.label}</div>
        {remainCount > 0 && (
          <div className={styles.tags}>
            <div className={styles.tag}>Ещё +{remainCount}</div>
          </div>
        )}
      </div>

      <div className={styles.body}>
        <div className={styles.meta}>
          {typeProject(format)}
          <div className={styles.id}>№ {id}</div>
        </div>
        <div className={styles.title}>{title}</div>
        {description && <p className={styles.description}>{description}</p>}
        <div className={styles.competenciesLabel}>{competencies.length} компетенций:</div>
        <div className={styles.competenciesWrapper}>
          <div className={styles.competencies}>
            {competencies.map((c, i) => (
              <span key={i} className={styles.competency}>{c}</span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.org}>
          <div className={styles.orgAvatar}>Т</div>
          <div className={styles.orgInfo}>
            <span className={styles.orgName}>{organization}</span>
            <span className={styles.orgSub}>публикационная активность</span>
          </div>
        </div>
      </div>

    </div>
  );
}