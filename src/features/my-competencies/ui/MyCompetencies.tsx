import styles from './MyCompetencies.module.css';
import { useState } from "react";
import Pencil from '@/shared/ui/icons/pencil.svg?react'
import Cross from '@/shared/ui/icons/cross.svg?react'

type MyCompetenciesProps = {
  label: string,
  competencies: {
    id: string,
    title: string
  }[]
};

export function MyCompetencies({ label, competencies }: MyCompetenciesProps) {

  const [isEditind, setIsEditing] = useState(false);

  return (
    <section className={styles.body}>
      <div className={styles.mainContainer}>
        <h5>
          {label}
        </h5>
        <div className={styles.competenciesContainer}>
          {
            competencies.map((competency) => (
              <div className={styles.competency}>
                {competency.title}
                {isEditind &&
                  <button>
                    <Cross />
                  </button>
                }
              </div>
            ))
          }
        </div>
      </div>
      {
        !isEditind &&
        <button className={styles.editButton} onClick={() => setIsEditing(true)}>
          <Pencil className={styles.pencilIcon} />
        </button>
      }
    </section>
  );
};