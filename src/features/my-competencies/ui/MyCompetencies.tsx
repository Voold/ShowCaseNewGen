import styles from './MyCompetencies.module.css';
import Pencil from '@/shared/ui/icons/pencil.svg?react'
import Plus from '@/shared/ui/icons/plus.svg?react'
import Trash from '@/shared/ui/icons/trash.svg?react'
import Cross from '@/shared/ui/icons/cross.svg?react'
import type { Competence, Skill } from "@/features/my-competencies/model/types.ts";
import { MyCompetenciesModal } from "@/features/my-competencies/ui/MyCompetenciesModal.tsx";

type MyCompetenciesProps = {
  data: Competence,
  editingId: string | null,
  currentFullSkills: Skill[],
  removeSkill: (competenceId: string, skillId: string) => void;
  addSkill: (skill: Skill) => void;
  removeCompetency: (competenceId: string) => void;
  popoverOpenFor: string | null;
  setPopoverOpenFor: (competenceId: string | null) => void;
  startEditing: (competenceId: string) => void;
  getSkillsForCompetence: (competenceId: string) => void;

};

export function MyCompetencies({ data, editingId, currentFullSkills, removeSkill, addSkill, removeCompetency, popoverOpenFor, setPopoverOpenFor, startEditing }: MyCompetenciesProps) {

  return (
    <section className={styles.body}>
      <div className={styles.mainContainer}>
        <h5>
          {data.roleTypeName}
        </h5>
        <div className={styles.competenciesContainer}>
          {
            data.skills.map((competency) => (
              <div className={styles.competency}>
                {competency.skillName}
                {editingId === data.roleTypeId &&
                  <button
                    onClick={() => removeSkill(data.roleTypeId, competency.skillId)}
                  >
                    <Cross />
                  </button>
                }
              </div>
            ))
          }
          {
            editingId === data.roleTypeId &&
            <button className={styles.plusButton} onClick={() => setPopoverOpenFor(data.roleTypeId)}>
              <Plus
                className={styles.plus}

              />
            </button>
          }
        </div>
      </div>
      {
        !(editingId === data.roleTypeId) &&
        <button className={styles.editButton} onClick={() => startEditing(data.roleTypeId)}>
          <Pencil className={styles.pencilIcon} />
        </button>
      }
      {
        editingId === data.roleTypeId &&
        <button className={styles.editButton} onClick={() => removeCompetency(data.roleTypeId)}>
          <Trash className={styles.pencilIcon} />
        </button>
      }
      {popoverOpenFor == data.roleTypeId &&
        <MyCompetenciesModal
          currentFullSkills={currentFullSkills}
          addSkill={addSkill}
        />
      }
    </section>
  );
};