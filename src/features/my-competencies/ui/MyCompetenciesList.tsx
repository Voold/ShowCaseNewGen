import styles from './MyCompetenciesList.module.css'
import { MyCompetencies } from "@/features/my-competencies/ui/MyCompetencies.tsx";
import Plus from '@/shared/ui/icons/plus.svg?react'
import { FooterBlockFields } from "@/shared";
// import type {Competence} from "@/features/my-competencies/model/types.ts";
import { useSkillsStore } from "@/features/my-competencies/model/store/useSkillsStore.ts";

// type MyCompetenciesListProps = {
//   myCompetencies: Competence[]
// }

// export function MyCompetenciesList({}: MyCompetenciesListProps) {
export function MyCompetenciesList() {

  const {
    originalData,
    draftData,
    editingId,
    popoverOpenFor,
    currentFullSkills,
    startEditing,
    cancelEditing,
    saveChanges,
    removeSkill,
    addSkill,
    removeCompetency,
    setPopoverOpenFor,
    getSkillsForCompetence,
  } = useSkillsStore()

  const handleSave = () => {
    saveChanges()
  }

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
          draftData.map((competency) => (
            <div key={competency.roleTypeId} className={styles.competencyContainer}>
              <MyCompetencies
                data={competency}
                removeSkill={removeSkill}
                addSkill={addSkill}
                removeCompetency={removeCompetency}
                popoverOpenFor={popoverOpenFor}
                setPopoverOpenFor={setPopoverOpenFor}
                startEditing={startEditing}
                editingId={editingId}
                getSkillsForCompetence={getSkillsForCompetence}
                currentFullSkills={currentFullSkills}
              />
              {
                editingId === competency.roleTypeId && <FooterBlockFields handleCancel={cancelEditing} handleSubmit={() => { }} />
              }

            </div>
          ))
        }
      </div>
    </div>
  )
}

