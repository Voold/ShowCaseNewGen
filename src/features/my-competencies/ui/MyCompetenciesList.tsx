import { useEffect } from 'react';
import styles from './MyCompetenciesList.module.css';
import { MyCompetencies } from "@/features/my-competencies/ui/MyCompetencies.tsx";
import Plus from '@/shared/ui/icons/plus.svg?react';
import { FooterBlockFields } from "@/shared";
import { useSkillsStore } from "@/features/my-competencies/model/store/useSkillsStore.ts";
import { useModalStore } from "@/shared/model";
import { useUpdateProfileMeta, useSkills } from '@/entities/user/api/queries';
import type { SkillDto } from '@/entities/user/model/types';
import type { Competence } from '@/features/my-competencies/model/types.ts';
import { ALL_COMPETENCIES, SKILLS_BY_COMPETENCE } from "@/features/my-competencies/model/store/mock.ts";

type MyCompetenciesListProps = {
  savedSkills?: SkillDto[];
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

  // Запрашиваем с бэкенда полный список всех доступных навыков
  const { data: globalSkillsData } = useSkills();

  // Отправляем глобальные навыки в стор
  useEffect(() => {
    if (globalSkillsData) {
      setGlobalSkills(globalSkillsData);
    }
  }, [globalSkillsData, setGlobalSkills]);

  useEffect(() => {
    if (savedSkills && Array.isArray(savedSkills)) {
      const competenciesMap: Record<string, Competence> = {};

      savedSkills.forEach(skill => {
        let roleTypeId = Object.keys(SKILLS_BY_COMPETENCE).find(id =>
          SKILLS_BY_COMPETENCE[id].some(s => s.skillId === skill.skillId)
        );

        if (!roleTypeId) {
          roleTypeId = 'general';
        }

        if (!competenciesMap[roleTypeId]) {
          const compMeta = ALL_COMPETENCIES.find(c => c.roleTypeId === roleTypeId);
          competenciesMap[roleTypeId] = {
            roleTypeId,
            roleTypeName: compMeta?.roleTypeName || (roleTypeId === 'general' ? 'Общие навыки' : roleTypeId),
            skills: []
          };
        }
        competenciesMap[roleTypeId].skills.push(skill);
      });

      setInitialData(Object.values(competenciesMap));
    }
  }, [savedSkills, setInitialData]);

  const handleSave = () => {
    // Собираем плоский массив skillIds из всех категорий компетенций
    const flatSkillIds = draftData.flatMap(comp => comp.skills.map(s => s.skillId));
    
    updateProfile(
      { skillIds: flatSkillIds },
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