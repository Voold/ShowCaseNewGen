import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  children?: React.ReactNode;
  extended?: boolean;
}

export default function ProjectCard({ children: text, extended = false }: ProjectCardProps) {
  return (
    <div className={`${styles.cardBody} ${extended ? styles.extended : ''}`}>
      <div className={styles.header}>
        <div className={styles.type}>Веб-разработка</div>
      </div>

      <div className={styles.body}>
        <div className={styles.format}>Учебный</div>
        <div className={styles.id}>ID 8201</div>
        <div className={styles.title}>{text}</div>
      </div>

      <div className={styles.footer}>
        <div className={styles.teamInfo}>
          Команда:<br />
          <b>2/3 участников</b>
        </div>
        <div className={styles.selectButton}>Выбрать</div>
      </div>
    </div>
  );
}