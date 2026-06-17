import styles from 'MyCompetencies.module.css';

type MyCompetenciesProps = {
  label: string,
  competencies: string[]
};

export function MyCompetencies({label, competencies}: MyCompetenciesProps) {
  return (
    <section className={styles.body}>
      <button>

      </button>
      <div className={styles.mainContainer}>
        <h5>
          {label}
        </h5>
        <div className={styles.competenciesContainer}>
          {}
        </div>
      </div>
    </section>
  );
};