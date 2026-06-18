import styles from './MyCompetencies.module.css';
import { useState } from "react";
import Pencil from '@/shared/ui/icons/pencil.svg?react'
import Plus from '@/shared/ui/icons/plus.svg?react'
import Trash from '@/shared/ui/icons/trash.svg?react'
import Cross from '@/shared/ui/icons/cross.svg?react'
import type {Competence, Skill} from "@/features/my-competencies/model/types.ts";

type MyCompetenciesProps = {
  data: Competence,
  editingId: string | null,
  removeSkill: (competenceId: string, skillId: string) => void;
  addSkill: (competenceId: string, skill: Skill) => void;
  removeCompetency: (competenceId: string) => void;
  setPopoverOpenFor: (competenceId: string | null) => void;
  startEditing: (competenceId: string) => void;
};

export function MyCompetencies({ data, editingId, removeSkill, removeCompetency, setPopoverOpenFor, startEditing }: MyCompetenciesProps) {

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
                {editingId &&
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
            editingId &&
              <button className={styles.plusButton} onClick={() => setPopoverOpenFor(data.roleTypeId)}>
                <Plus
                 className={styles.plus}
                />
              </button>
          }
        </div>
      </div>
      {
        !editingId &&
        <button className={styles.editButton} onClick={() => startEditing(data.roleTypeId)}>
          <Pencil className={styles.pencilIcon} />
        </button>
      }
      {
        editingId &&
        <button className={styles.editButton} onClick={() => removeCompetency(data.roleTypeId)}>
          <Trash className={styles.pencilIcon} />
        </button>
      }
    </section>
  );
};