import { useNavigate } from 'react-router-dom';
import styles from "./CreateProjectPage.module.css";
import BackIcon from "@/shared/ui/icons/back.svg?react";
import {CreateProjectCard} from "@/shared/ui/create-project-card/CreateProjectCard.tsx";

export default function CreateProjectPage() {
  const navigate = useNavigate();

  return (
    // <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
    //   <button
    //     onClick={() => navigate(-1)}
    //     style={{ marginBottom: '20px', cursor: 'pointer', padding: '8px 12px' }}
    //   >
    //     ← Назад
    //   </button>
    //
    //   <h1>Добавление нового проекта</h1>
    //   <p style={{ marginBottom: '30px', color: '#666' }}>
    //     Заполните базовую информацию о проекте.
    //   </p>
    //
    //   <CreateProjectForm onSuccess={() => navigate('/catalog/projects')} />
    // </div>
    <main className={styles.mainContent}>

      <div className={styles.headerLeft} onClick={() => navigate(-1)}>
        <BackIcon />
        <p>Назад к списку проектов</p>
      </div>

      <h1 className={styles.title}>Новый проект</h1>

      <section className={styles.body}>
        <div className={styles.description}>
          <p>
            Выберите тип проекта
          </p>
          <p>
            От выбранного типа зависит состав полей и PRD. В дальнейшем тип проекта можно будет изменить при необходимости
          </p>
        </div>

        <div className={styles.projectList}>
          <CreateProjectCard type={'Study'}/>
          <CreateProjectCard type={'Case'}/>
          <CreateProjectCard type={'Real'}/>
        </div>
      </section>
    </main>
  );
}