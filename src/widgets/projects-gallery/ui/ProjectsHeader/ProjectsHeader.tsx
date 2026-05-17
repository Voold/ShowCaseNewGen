import { Pagination } from '@/shared/ui';
import styles from './ProjectsHeader.module.css';

export default function ProjectsHeader() {
  const downArrow = (
    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 3.5L5 7.5L9 3.5" stroke="#323541" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <header className={styles.projectsHeader}>
      <div className={styles.topPart}>
        <div className={styles.titleBlock}>
          <h1 className={styles.title}>Набор на проекты</h1>
          <h2 className={styles.subTitle}>{'524 проекта'}</h2>
        </div>
        <nav className={styles.navPart}>
          <div className={styles.navEl}>
            <label>
              <input type="checkbox" />
              Наиболее подходящие
            </label>
          </div>
          <div className={styles.navEl}>
            Недавние {downArrow}
          </div>
          <div className={styles.navEl}>|</div>
          <div className={styles.navEl}><Pagination /></div>
        </nav>
      </div>
    </header>
  );
}