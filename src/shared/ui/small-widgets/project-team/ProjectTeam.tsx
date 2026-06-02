import styles from './ProjectTeam.module.css'
import { InfoTooltip } from '../../info-tooltip/InfoTooltip.tsx'
import { CheckIcon } from '../../icons/CheckIcon.tsx';

type ProjectTeamProps = {
  list: {
    name: string,
    role: string,
    avatarSrc?: string,
  }[]
};

export const ProjectTeam = (props: ProjectTeamProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>Команда проекта</h3>
        <p className={styles.description}>
          Что-то из карточки проекта
        </p>
      </div>
      <ul className={styles.teamList}>
        {
          props.list.map((item, i) => {
            return (
              <li key={i} className={styles.item}>
                <p className={styles.role}>
                  {item.role}
                </p>
                <div className={styles.info}>
                  {item.avatarSrc ? (
                    <img className={styles.avatar} src={item.avatarSrc} alt={item.name} />
                  ) : (
                    <div className={styles.avatarPlaceholder}>
                      {item.name ? item.name.charAt(0).toUpperCase() : ''}
                    </div>
                  )}
                  <p className={styles.name}>
                    {item.name}
                  </p>
                </div>
                <CheckIcon className={styles.checkIcon} color='var(--color-gray-600)'/>
              </li>
            )
          })
        }
      </ul>
      <InfoTooltip
        text="Здесь показаны все участники проекта"
        className={styles.questionIcon}
      />
      
    </div>
  );
};