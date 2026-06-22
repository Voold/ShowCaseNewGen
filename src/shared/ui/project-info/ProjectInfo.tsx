import type { ProjectCardData } from '@/entities/project/model/types';
import styles from './ProjectInfo.module.css'
import { typeProjectsLabel } from '@/entities/project';

type ProjectInfoProps = {
  data: ProjectCardData
};

export const ProjectInfo = ({ data }: ProjectInfoProps) => {
  return (
    <div className={styles.projectMain}>
      <div className={styles.topLabel}>
        <div className={styles.mainInfo}>
          <div className={styles.tags}>
            <div className={styles.tag}>
              {data.primaryTag.tagName}
            </div>
            {
              data.tags.map(direction => (
                <div key={direction.tagId} className={styles.tag}>
                  {direction.tagName}
                </div>
              ))
            }
          </div>
        </div>
        <div className={styles.format}>
          {typeProjectsLabel(data.type)}
        </div>
      </div>

      <div className={styles.orgBlock}>
        <div className={styles.orgAvatar}>Т</div>
        <div className={styles.orgInfo}>
          <span className={styles.orgName}>{data.partnerId.verbose}</span>
          <span className={styles.orgSub}>публикационная активность</span>
        </div>
      </div>

      <p className={styles.description}>{data.meta.description}</p>
    </div>
  );
};