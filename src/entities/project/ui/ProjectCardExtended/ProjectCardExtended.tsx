import styles from './ProjectCardExtended.module.css';
import type { ProjectCardData } from '../../model/types';
import { FolderIcon } from '@/shared/ui';
import { CodeIcon } from '@/shared/ui/icons/CodeIcon';
import { StarIcon } from '@/shared/ui/icons/StarIcon';

import Pattern from '@/assets/svg/Pattern.svg'

interface Props {
  project: ProjectCardData;
}

const typeProject = (type: string) => {
  switch (type) {
    case 'case':
      return <div className={styles.case}><FolderIcon pathClassName={styles.pathFolder}/>Кейсовый</div>;
    case 'real':
      return <div className={styles.real}><CodeIcon pathClassName={styles.pathCode}/>Реальный</div>;
    case 'paid':
      return <div className={styles.paid}><StarIcon pathClassName={styles.pathStar}/>Оплачиваемый</div>;
    default:
      return null;
  }
};

export default function ProjectCardExtended({ project }: Props) {
  const { id, title, directions, format, competencies, organization, description, accentColor } = project;

  const visibleDirections = directions.slice(0, 3);
  const remainCount = directions.length - 3;

  return (
    <div className={`${styles.cardBody}`} style={accentColor ? { '--accent': accentColor } as React.CSSProperties : undefined}>
      <div className={styles.accentBody}>

        <img className={styles.pattern} src={Pattern} alt='Узор'/>

        <div className={`${styles.header} ${styles[directions[0]?.key]}`}>
          <div className={styles.tags}>
            {visibleDirections.map((d) => (
              <div key={d.key} className={styles.tag}>{d.label}</div>
            ))}
            {remainCount > 0 && (
              <div className={styles.tagCount}>Ещё +{remainCount}</div>
            )}
          </div>
        </div>

        <div className={styles.body}>

          <div className={styles.titleAndOrg}>
            <div className={styles.metaContainer}>
              <div className={styles.meta}>
              {typeProject(format)}
              <div className={styles.id}>№ {id}</div>
              </div>
              <div className={styles.title}>{title}</div>
            </div>

          
            <div className={styles.org}>
              <div className={styles.orgAvatar}>Т</div>
              <div className={styles.orgInfo}>
                <span className={styles.orgName}>{organization}</span>
              <span className={styles.orgSub}>публикационная активность</span>
              </div>
            </div>
          </div>

    
          {description && <p className={styles.description}>{description}</p>}
          
          <div className={styles.competenciesBlock}>
            <div className={styles.competenciesLabel}>{competencies.length} компетенций:</div>
            <div className={styles.competenciesWrapper}>
              <div className={styles.competencies}>
                {competencies.map((c, i) => (
                  <span key={i} className={styles.competency}>{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}