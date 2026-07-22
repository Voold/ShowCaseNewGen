import { useEffect, useState } from 'react';
import styles from './MyCompetenciesList.module.css';
import { MyCompetencies } from "@/features/my-competencies/ui/MyCompetencies.tsx";
import Plus from '@/shared/ui/icons/plus.svg?react';
import Pencil from '@/shared/ui/icons/pencil.svg?react';
import { FooterBlockFields } from "@/shared";
import { useSkillsStore } from "@/features/my-competencies/model/store/useSkillsStore.ts";
import { useModalStore } from "@/shared/model";
import { useUpdateProfileMeta, useSkills } from '@/entities/user/api/queries';
import type { CompetenceDto } from '@/entities/user/model/types';

type MyCompetenciesListProps = {
  savedSkills?: CompetenceDto[];
  readonly?: boolean;
};

export function MyCompetenciesList({ savedSkills, readonly = false }: MyCompetenciesListProps) {
  const {
    draftData,
    isEditing,
    popoverOpenFor,
    currentFullSkills,
    hasChanges,
    setInitialData,
    setGlobalSkills,
    startEditing,
    cancelEditing,
    saveChanges,
    removeSkill,
    addSkill,
    removeCompetency,
    setPopoverOpenFor,
    getSkillsForCompetence,
  } = useSkillsStore();

  const { openModal } = useModalStore();
  const { mutate: updateProfile, isPending } = useUpdateProfileMeta();
  const { data: globalSkillsData } = useSkills();
  const [showSaveError, setShowSaveError] = useState(false);

  useEffect(() => {
    if (globalSkillsData) {
      setGlobalSkills(globalSkillsData);
    }
  }, [globalSkillsData, setGlobalSkills]);

  useEffect(() => {
    setShowSaveError(false);
  }, [draftData]);

  useEffect(() => {
    if (savedSkills && Array.isArray(savedSkills)) {
      setInitialData(savedSkills);
    }
  }, [savedSkills, setInitialData]);

  const handleSave = () => {
    if (hasEmptyCompetencies) {
      setShowSaveError(true);
      return;
    }

    const skillsPayload = draftData.map(comp => ({
      roleTypeId: comp.roleTypeId,
      skillIds: comp.skills.map(s => s.skillId)
    }));
    
    updateProfile(
      { skills: skillsPayload },
      {
        onSuccess: () => {
          saveChanges();
        }
      }
    );
  };

  const hasEmptyCompetencies = draftData.some(comp => comp.skills.length === 0);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.bioContainer}>
        <h3>Мои навыки</h3>
        {(!isEditing && !readonly) && (
          <button
            className={styles.editButton}
            onClick={startEditing}
            disabled={isPending}
          >
            <Pencil />
            Редактировать
          </button>
        )}
      </div>
      <div className={styles.myCompetenciesList}>
        {draftData.map((competency) => (
          <div key={competency.roleTypeId} className={styles.competencyContainer}>
            <MyCompetencies
              data={competency}
              removeSkill={removeSkill}
              addSkill={addSkill}
              removeCompetency={removeCompetency}
              popoverOpenFor={popoverOpenFor}
              setPopoverOpenFor={setPopoverOpenFor}
              isEditing={isEditing}
              getSkillsForCompetence={getSkillsForCompetence}
              currentFullSkills={currentFullSkills}
            />
          </div>
        ))}
      </div>
      {isEditing &&
        <button
          className={styles.addCompetencyBtn}
          onClick={() => openModal('COMPETENCY_CHOICE')}
          disabled={isPending}
        >
          <Plus />
          Добавить компетенцию
        </button>
      }
      {isEditing && (
        <div className={styles.footerContainer}>
          <FooterBlockFields
            handleCancel={cancelEditing}
            handleSubmit={handleSave}
            disabled={!hasChanges || isPending}
            customError={showSaveError && hasEmptyCompetencies ? "Выберите хотя бы по 1 навыку в каждой компетенции" : undefined}
          />
        </div>
      )}
    </div>
  );
}