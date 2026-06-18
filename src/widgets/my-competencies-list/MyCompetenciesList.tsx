import styles from './MyCompetenciesList.module.css'
import { MyCompetencies } from "@/features/my-competencies/ui/MyCompetencies.tsx";
import Plus from '@/shared/ui/icons/plus.svg?react'
import { FooterBlockFields } from "@/shared";

type MyCompetenciesListProps = {
  myCompetencies: {
    label: string,
    competencies: {
      id: string,
      title: string
    }[]
  }[]
}

export function MyCompetenciesList({ myCompetencies }: MyCompetenciesListProps) {

  return (
    <div className={styles.mainContainer}>
      <div className={styles.bioContainer}>
        <h3>
          Мои навыки
        </h3>
        <button
          className={styles.editButton}
        >
          <Plus />
          Добавить компетенцию
        </button>
      </div>
      <div className={styles.myCompetenciesList}>
        {
          myCompetencies.map((competency) => (
            <div className={styles.competencyContainer}>
              <MyCompetencies
                label={competency.label}
                competencies={competency.competencies}
              />
              <FooterBlockFields disabled={false} handleCancel={() => { }} handleSubmit={() => { }} />
            </div>

          ))
        }
      </div>
    </div>
  )
}

