import styles from './ProfileWidget.module.css';
import { InfoTooltip } from '../../info-tooltip/InfoTooltip.tsx';

interface ProfileWidgetProps {
  name: string,
  role: string,
  avatarSrc?: string,
}


export const ProfileWidget = ({ name, role, avatarSrc }: ProfileWidgetProps) => {
  return (
    <div className={styles.profileWidget}>
      <div className={styles.avatar}>
        {
          avatarSrc && <img className={styles.avatarImg} src={avatarSrc} alt='Аватар' />
        }

      </div>
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.role}>{role}</div>
      </div>
      <InfoTooltip
        text="Менеджер проекта"
        className={styles.questionIcon}
      />
    </div>
  )
}