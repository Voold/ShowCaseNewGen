import styles from './Filter.module.css';
import { FolderIcon } from '@/shared/ui';
import { useFilterStore } from '../../model/useFilterStore';

export default function Filter() {
  const { projectTypes, tags, competencies, toggleProjectType, toggleTag, toggleCompetency } = useFilterStore();

  return (
    <aside className={styles.body}>
      <div className={styles.projectContainer}>

        <h3 className={styles.title}>Тип проекта</h3>
        <div className={styles.typeProjects}>
          {
            ['Кейсовый', 'Реальный', 'Оплачиваемый'].map((project) => (
              <div
                key={project}
                className={`${styles.project} ${projectTypes[project] ? styles.selected : ''}`}
                onClick={() => toggleProjectType(project)}
              >
                <FolderIcon pathClassName={styles.folderPath} />
                <p className={styles.projectTitle}>
                  {project}
                </p>
              </div>
            ))
          }
        </div>

      </div>

      <div className={styles.separator}></div>

      <div className={styles.tagsContainer}>
        <h3 className={styles.title}>
          Трек-теги
        </h3>
        <div className={styles.bodyTags}>

          <div className={styles.tagBlock}>
            <p className={styles.field}>
            Основа проекта:
            </p>
            <div className={styles.tagsList}>
              {
                ['Веб-разработка', 'Мобайл-разработка', 'Инженерия',
                  'VR/AR',
                ].map((tag) => (
                  <div key={tag} className={`${styles.tag} ${tags[tag] ? styles.selected : ''}`} onClick={() => toggleTag(tag)}>
                    {tag}
                  </div>
                ))
              }
            </div>
          </div>

          <div className={styles.tagBlock}>
            <p className={styles.field}>
              Область индустрии:
            </p>
            <div className={styles.tagsList}>
              {
                ['EdTech', 'FinTech', 'MedTech',
                  'Соц-сети', 'GameDev', 'E-commerce',
                ].map((tag) => (
                  <div key={tag} className={`${styles.tag} ${tags[tag] ? styles.selected : ''}`} onClick={() => toggleTag(tag)}>
                    {tag}
                  </div>
                ))
              }
            </div>
          </div>

          <div className={styles.tagBlock}>
            <p className={styles.field}>
            Основа проекта:
            </p>
            <div className={styles.tagsList}>
              {
                ['Машинное обучение', 
                  'Информационная безопасность'
                ].map((tag) => (
                  <div key={tag} className={`${styles.tag} ${tags[tag] ? styles.selected : ''}`} onClick={() => toggleTag(tag)}>
                    {tag}
                  </div>
                ))
              }
            </div>
          </div>
        
        </div>
      </div>

      <div className={styles.separator}></div>

      <div className={styles.competenciesContainer}>

        <h3 className={styles.title}>Компетенции</h3>
        <div className={styles.competenciesList}>
          {
            [
              'Frontend', 'Backend', 'Mobile',
              'Дизайнер', 'Аналитик', 'Тестировщик', 'ML-инженер'

            ].map((competency) => (
              <div
                key={competency}
                className={`${styles.competencies} ${competencies[competency] ? styles.selected : ''}`}
                onClick={() => toggleCompetency(competency)}
              >
                {competency}
              </div>
            ))
          }
        </div>

      </div>        

    </aside>
  );
}