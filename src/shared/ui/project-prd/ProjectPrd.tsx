import CheckIcon from '@/shared/ui/icons/check.svg?react';
import styles from './ProjectPrd.module.css'
import type {PrdMeta} from "@/entities/project";

type ProjectPrdProps = {
  PRD: PrdMeta;
}

export const ProjectPrd = ({ PRD }: ProjectPrdProps) => {
  const {
    prerequisites,
    productVision,
    audience,
    projectGoal,
    businessGoal,
    keyFunctionality,
    functional,
    nonFunctional,
    problemStatement,
    businessMetrics,
    projectPlan,
  } = PRD || {};

  const hasRequirements = !!(keyFunctionality || functional || nonFunctional);

  return (
    <section className={styles.container}>

      {prerequisites && <article className={styles.smallBlock}>
        <h3 className={styles.title}>
          Предпосылки
        </h3>
        <p className={styles.bodyText}>{prerequisites}</p>
      </article>}

      {productVision && <article className={styles.smallBlock}>
        <h3 className={styles.title}>
          Product vision
        </h3>
        <p className={styles.bodyText}>{productVision}</p>
      </article>}

      {audience && audience.length > 0 && <article className={styles.block}>
        <h3 className={styles.title}>
          Целевая аудитория
        </h3>
        <div className={styles.audienceGrid}>
          {audience.map((item, index) => (
              <div key={index} className={styles.audienceItem}>
                <header className={styles.audienceTitle}>
                <span className={styles.segment}>
                  Сегмент {index + 1}
                </span>
                  <p className={styles.description}>
                    {item.minAge}–{item.maxAge} лет
                  </p>
                </header>
                <div className={styles.audienceBody}>
                  <p className={styles.bodyText}>
                    {item.title}
                  </p>
                  <p className={styles.description}>
                    {item.description}
                  </p>
                </div>
              </div>
          ))}
        </div>
      </article>}

      {(projectGoal || businessGoal) && <article className={styles.block}>
        <h3 className={styles.title}>
          Цели
        </h3>

        {projectGoal && <div className={styles.miniBlock}>
          <h4 className={styles.subtitle}>
            Цель проекта:
          </h4>
          <p className={styles.bodyText}>
            {projectGoal}
          </p>
        </div>}

        {businessGoal && <div className={styles.miniBlock}>
          <h4 className={styles.subtitle}>
            Цель бизнеса:
          </h4>
          <p className={styles.bodyText}>
            {businessGoal}
          </p>
        </div>}

      </article>}

      {hasRequirements && <article className={styles.block}>
        <h3 className={styles.title}>
          Требования
        </h3>

        <div className={styles.reqList}>

          {keyFunctionality && keyFunctionality.length > 0 && <div className={styles.funcBody}>
            <h4 className={`${styles.funcTitleFill} ${styles.segment}`}>
              Ключевой функционал
            </h4>

            <div className={styles.funcList}>
              {
                keyFunctionality.map((req, index) => (
                    <div key={index} className={styles.fun}>
                      <p className={styles.index}>{index + 1}.</p>
                      <p className={styles.bodyText}> {req}</p>
                    </div>
                ))
              }
            </div>
          </div>}

          {functional && functional.length > 0 && <div className={styles.funcBody}>
            <h4 className={`${styles.segment}`}>
              Функциональные требования
            </h4>

            <div className={styles.funcList}>
              {
                functional.map((req, index) => (
                    <div key={index} className={styles.fun}>
                      <p className={styles.index}> <CheckIcon className={styles.checkIcon}/></p>
                      <p className={styles.bodyText}> {req}</p>
                    </div>
                ))
              }
            </div>
          </div>}

          {nonFunctional && nonFunctional.length > 0 && <div className={styles.funcBody}>
            <h4 className={`${styles.segment}`}>
              Нефункциональные требования
            </h4>

            <div className={styles.funcList}>
              {
                nonFunctional.map((req, index) => (
                    <div key={index} className={styles.fun}>
                      <p className={styles.index}>—</p>
                      <p className={styles.bodyText}> {req}</p>
                    </div>
                ))
              }
            </div>
          </div>}

        </div>
      </article>}

      {(problemStatement || businessMetrics) && <article className={styles.block}>
        <h3 className={styles.title}>
          Реализация
        </h3>

        {problemStatement && <div className={styles.miniBlock}>
          <h4 className={styles.subtitle}>
            Постановка задачи:
          </h4>
          <p className={styles.bodyText}>
            {problemStatement}
          </p>
        </div>}

        {businessMetrics && businessMetrics.length > 0 && <div className={styles.miniBlock}>
          <h4 className={styles.subtitle}>
            Бизнес метрики:
          </h4>
          <div className={styles.funcList}>
            {
              businessMetrics.map((metric, index) => (
                  <div key={index} className={styles.metric}>
                    <p className={styles.index}>—</p>
                    <p className={styles.bodyText}> {metric}</p>
                  </div>
              ))
            }
          </div>
        </div>}

      </article>}

      {projectPlan && projectPlan.length > 0 && <article className={styles.smallBlock}>
        <h3 className={styles.title}>
          План проекта
        </h3>
        <div className={styles.funcList}>
          {
            projectPlan.map((paragraph, index) => (
                <div key={index} className={styles.fun}>
                  <p className={styles.index}>{index + 1}.</p>
                  <p className={styles.bodyText}> {paragraph}</p>
                </div>
            ))
          }
        </div>
      </article>}

    </section>
  );
};