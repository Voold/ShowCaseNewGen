import styles from './ProjectProfile.module.css'

type ProjectProfileProps = {
  name?: string;
  role?: string;
  avatarSrc?: string;
};

export const ProjectProfile = ({ name, role, avatarSrc }: ProjectProfileProps) => {
  return (
    <div className={styles.container}>
      {
        avatarSrc ? (
          <img src={avatarSrc} alt={`${name}'s avatar`} className={styles.avatar} />
        ) : (
          <div className={styles.avatarPlaceholder}>
            <span>{name?.charAt(0)}</span>
          </div>
        )
      }
      <div className={styles.info}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.role}>{role}</p>
      </div>
    </div>
  );
};