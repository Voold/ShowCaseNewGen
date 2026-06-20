import styles from './MyCompetenciesModal.module.css'
import type { Skill } from "@/features/my-competencies/model/types.ts";

type MyCompetenciesModalProps = {
  currentFullSkills: Skill[],
  addSkill: (skill: Skill) => void;
};

export const MyCompetenciesModal = ({ currentFullSkills, addSkill }: MyCompetenciesModalProps) => {
  return (
    <div className={styles.modalBody}>
      {currentFullSkills.map((skill) => (
        <button className={styles.skill} onClick={() => addSkill(skill)}>
          {skill.skillName}
        </button>
      ))}
    </div>
  );
};