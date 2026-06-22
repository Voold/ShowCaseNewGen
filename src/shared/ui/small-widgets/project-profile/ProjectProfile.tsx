import styles from './ProjectProfile.module.css'
import ava from "@/shared/assets/ava.webp";

type ProjectProfileProps = {
  name?: string;
  role?: string;
  avatarSrc?: string;
};

export const ProjectProfile = ({ name, role}: ProjectProfileProps) => {

  return (
    <div className={styles.container}>
      {
        // TODO
        // avatarSrc ? (
        //   <img src={avatarSrc} alt={`${name}'s avatar`} className={styles.avatar} />
        // ) : (
        //   <div className={styles.avatarPlaceholder}>
        //     <span>{name?.charAt(0)}</span>
        //   </div>
        // )
        <img src={ava} alt="avatar" className={styles.avatar} />
      }
      <div className={styles.info}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.role}>{role}</p>
      </div>
    </div>
  );
};