import { CheckIcon } from '../icons/CheckIcon';
import styles from './ProjectPrd.module.css'

type ProjectPrdProps = {
  prerequisites: string,
  productVision: string,
  audience: {
    title: string,
    description: string,
    minAge: number,
    maxAge: number,
  }[],
  goalsProjects: string,
  goalsBusiness: string,
  requirements: {
    keyFunctionality: string[], 
    functional: string[],
    nonFunctional: string[]
  },
  problemStatement: string,
  businessMetrics: string[],
  projectPlan: string[]
};

export const ProjectPrd = ( PRD : ProjectPrdProps ) => {

  
  return (
    <section className={styles.container}>

      <article className={styles.smallBlock}>
        <h3 className={styles.title}>
          Предпосылки
        </h3>
        <p className={styles.bodyText}>{PRD.prerequisites}</p>
      </article>

      <article className={styles.smallBlock}>
        <h3 className={styles.title}>
          Product vision
        </h3>
        <p className={styles.bodyText}>{PRD.productVision}</p>
      </article>

      <article className={styles.block}>
        <h3 className={styles.title}>
          Целевая аудитория
        </h3>
        <div className={styles.audienceGrid}>
          {PRD.audience.map((audience, index) => (
            <div key={index} className={styles.audienceItem}>
              <header className={styles.audienceTitle}>
                <span className={styles.segment}>
                  Сегмент {index + 1}
                </span>
                <p className={styles.description}>
                  {audience.minAge}–{audience.maxAge} лет
                </p>
              </header>
              <div className={styles.audienceBody}>
                <p className={styles.bodyText}>
                  {audience.title}
                </p>
                <p className={styles.description}>
                  {audience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </article>

      <article className={styles.block}>
        <h3 className={styles.title}>
          Цели
        </h3>
          
        <div className={styles.miniBlock}>
          <h4 className={styles.subtitle}>
            Цель проекта:
          </h4>
          <p className={styles.bodyText}>
            {PRD.goalsProjects}
          </p>
        </div>

        <div className={styles.miniBlock}>
          <h4 className={styles.subtitle}>
            Цель бизнеса:
          </h4>
          <p className={styles.bodyText}>
            {PRD.goalsBusiness}
          </p>
        </div>
        
      </article>

      <article className={styles.block}>
        <h3 className={styles.title}>
          Требования
        </h3>

        <div className={styles.reqList}>

          <div className={styles.funcBody}>
            <h4 className={`${styles.funcTitleFill} ${styles.segment}`}>
              Ключевой функционал
            </h4>

            <div className={styles.funcList}>
              {
                PRD.requirements.keyFunctionality.map((req, index) => (
                  <div className={styles.fun}>
                    <p className={styles.index}>{index + 1}.</p>
                    <p className={styles.bodyText}> {req}</p>
                  </div>
                ))
              }
            </div>
          </div>

          <div className={styles.funcBody}>
            <h4 className={`${styles.segment}`}>
              Функциональные требования
            </h4>

            <div className={styles.funcList}>
              {
                PRD.requirements.functional.map((req) => (
                  <div className={styles.fun}>
                    <p className={styles.index}><CheckIcon className={styles.path}/></p>
                    <p className={styles.bodyText}> {req}</p>
                  </div>
                ))
              }
            </div>
          </div>

          <div className={styles.funcBody}>
            <h4 className={`${styles.segment}`}>
              Нефункциональные требования
            </h4>

            <div className={styles.funcList}>
              {
                PRD.requirements.nonFunctional.map((req) => (
                  <div className={styles.fun}>
                    <p className={styles.index}>—</p>
                    <p className={styles.bodyText}> {req}</p>
                  </div>
                ))
              }
            </div>
          </div>

        </div>
      </article>

      <article className={styles.block}>
        <h3 className={styles.title}>
          Реализация
        </h3>
          
        <div className={styles.miniBlock}>
          <h4 className={styles.subtitle}>
            Постановка задачи:
          </h4>
          <p className={styles.bodyText}>
            {PRD.problemStatement}
          </p>
        </div>

        <div className={styles.miniBlock}>
          <h4 className={styles.subtitle}>
            Бизнес метрики:
          </h4>
          <div className={styles.funcList}>
              {
                PRD.businessMetrics.map((metric) => (
                  <div className={styles.metric}>
                    <p className={styles.index}>—</p>
                    <p className={styles.bodyText}> {metric}</p>
                  </div>
                ))
              }
            </div>
        </div>
        
      </article>

      <article className={styles.smallBlock}>
        <h3 className={styles.title}>
          План проекта
        </h3>
        <div className={styles.funcList}>
              {
                PRD.projectPlan.map((paragraph, index) => (
                  <div className={styles.fun}>
                    <p className={styles.index}>{index + 1}.</p>
                    <p className={styles.bodyText}> {paragraph}</p>
                  </div>
                ))
              }
            </div>
      </article>
      

    </section>
  );
};