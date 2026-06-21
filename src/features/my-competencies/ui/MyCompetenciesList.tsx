import { useEffect } from 'react';
import styles from './MyCompetenciesList.module.css';
import { MyCompetencies } from "@/features/my-competencies/ui/MyCompetencies.tsx";
import Plus from '@/shared/ui/icons/plus.svg?react';
import { FooterBlockFields } from "@/shared";
import { useSkillsStore } from "@/features/my-competencies/model/store/useSkillsStore.ts";
import { useModalStore } from "@/shared/model";
import { useUpdateProfileMeta, useSkills } from '@/entities/user/api/queries';
import type { CompetenceDto } from '@/entities/user/model/types';

type MyCompetenciesListProps = {
  savedSkills?: CompetenceDto[];
};

export function MyCompetenciesList({ savedSkills }: MyCompetenciesListProps) {
  const {
    draftData,
    editingId,
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

  useEffect(() => {
    if (globalSkillsData) {
      setGlobalSkills(globalSkillsData);
    }
  }, [globalSkillsData, setGlobalSkills]);

  useEffect(() => {
    if (savedSkills && Array.isArray(savedSkills)) {
      setInitialData(savedSkills);
    }
  }, [savedSkills, setInitialData]);

  const handleSave = () => {
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

  return (
    <div className={styles.mainContainer}>
      <div className={styles.bioContainer}>
        <h3>Мои навыки</h3>
        <button
          className={styles.editButton}
          onClick={() => openModal('COMPETENCY_CHOICE')}
          disabled={isPending}
        >
          <Plus />
          Добавить компетенцию
        </button>
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
              startEditing={startEditing}
              editingId={editingId}
              getSkillsForCompetence={getSkillsForCompetence}
              currentFullSkills={currentFullSkills}
            />
            {editingId === competency.roleTypeId && (
              <FooterBlockFields
                handleCancel={cancelEditing}
                handleSubmit={handleSave}
                disabled={!hasChanges || isPending}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}