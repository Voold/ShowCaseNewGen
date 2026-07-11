import styles from './ProfileWidget.module.css';
import { InfoTooltip } from '@/shared';
import FallbackMentorIcon from '@/shared/ui/icons/fallback_mentor.svg?react';

interface ProfileWidgetProps {
  first_name: string;
  last_name: string;
  role: string,
  avatarSrc?: string,
}


export const ProfileWidget = ({ first_name, last_name, role, avatarSrc }: ProfileWidgetProps) => {
  return (
    <div className={styles.profileWidget}>
      <div className={styles.avatar}>
        {
          avatarSrc ? <img className={styles.avatarImg} src={avatarSrc} alt='Аватар' /> : <FallbackMentorIcon/>
        }

      </div>
      <div className={styles.info}>

        <div className={styles.nameContainer}>
          <div className={styles.name}>{last_name}</div>
          <div className={styles.name}>{first_name}</div>
        </div>

        <div className={styles.role}>{role}</div>
      </div>
      <InfoTooltip
        text="Человек который отвечает за этот проект"
        className={styles.questionIcon}
        type={'help'}
      />
    </div>
  )
}