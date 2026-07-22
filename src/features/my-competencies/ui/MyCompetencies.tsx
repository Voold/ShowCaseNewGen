import styles from './MyCompetencies.module.css';

import Plus from '@/shared/ui/icons/plus.svg?react'
import Trash from '@/shared/ui/icons/trash.svg?react'
import Cross from '@/shared/ui/icons/cross.svg?react'
import type { Competence, Skill } from "@/features/my-competencies/model/types.ts";
import { MyCompetenciesModal } from "@/features/my-competencies/ui/MyCompetenciesModal.tsx";

type MyCompetenciesProps = {
  data: Competence,
  isEditing: boolean,
  currentFullSkills: Skill[],
  removeSkill: (competenceId: string, skillId: string) => void;
  addSkill: (skill: Skill) => void;
  removeCompetency: (competenceId: string) => void;
  popoverOpenFor: string | null;
  setPopoverOpenFor: (competenceId: string | null) => void;
  getSkillsForCompetence: (competenceId: string) => void;

};

export function MyCompetencies({
  data,
  isEditing,
  currentFullSkills,
  removeSkill,
  addSkill,
  removeCompetency,
  popoverOpenFor,
  setPopoverOpenFor,
  getSkillsForCompetence
}: MyCompetenciesProps) {

  if (!isEditing && data.skills.length === 0) {
    return null;
  }

  return (
    <section className={styles.body}>
      <div className={styles.mainContainer}>
        <h5>
          {data.roleTypeName}
        </h5>
        <div className={styles.competenciesContainer}>
          {
            data.skills.map((competency) => (
              <div key={competency.skillId} className={`${styles.competency} ${isEditing ? styles.editing : ''}`}>
                {competency.skillName}
                {isEditing &&
                  <button
                    onClick={() => removeSkill(data.roleTypeId, competency.skillId)}
                  >
                    <Cross className={styles.crossIcon}/>
                  </button>
                }
              </div>
            ))
          }
          {
            (isEditing && !popoverOpenFor) &&
            <button className={styles.addButton}
                    onClick={() => {
              getSkillsForCompetence(data.roleTypeId)
              setPopoverOpenFor(data.roleTypeId)
                    }}
            >
              <div className={styles.plusButton}>
                <Plus className={styles.plus}/>
              </div>
              {
                data.skills.length === 0 &&
                <p className={styles.addLabel}>
                  Добавить навыки
                </p>
              }
            </button>
          }
        </div>
      </div>
      {
        isEditing &&
        <button className={styles.editButton} onClick={() => removeCompetency(data.roleTypeId)}>
          <Trash className={styles.trashIcon}/>
        </button>
      }
      {popoverOpenFor === data.roleTypeId && (
        <>
          <div className={styles.backdrop} onClick={() => setPopoverOpenFor(null)} />
          <MyCompetenciesModal
            currentFullSkills={currentFullSkills}
            addSkill={addSkill}
            setPopoverOpenFor={setPopoverOpenFor}
          />
        </>
      )}
    </section>
  );
}