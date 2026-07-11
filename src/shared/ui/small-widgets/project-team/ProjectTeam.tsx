import styles from './ProjectTeam.module.css'
import CheckIcon from '@/shared/ui/icons/check.svg?react';
import PersonFallbackIcon from '@/shared/ui/icons/fallback_personal.svg?react';


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
          Текущий состав участников, которые реализуют этот проект
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
                  {item.avatarSrc ?
                    <img className={styles.avatar} src={item.avatarSrc} alt={item.name} /> :
                    <PersonFallbackIcon className={styles.fallbackIcon}/>
                  }
                  <p className={styles.name}>
                    {item.name}
                  </p>
                </div>
                <CheckIcon className={styles.checkIcon}/>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};