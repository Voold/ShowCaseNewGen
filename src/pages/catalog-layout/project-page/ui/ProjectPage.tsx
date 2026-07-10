import {useEffect, useRef, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import IdIcon from '@/shared/ui/icons/id.svg?react';
import ShareIcon from '@/shared/ui/icons/share.svg?react';
import BackIcon from '@/shared/ui/icons/back.svg?react';
import styles from './ProjectPage.module.css';
import { ProfileWidget } from '@/shared/ui/small-widgets/profile-widget/ProfileWidget';
import { LinkBlock } from '@/shared/ui/small-widgets/link-block/LinkBlock';
import { KeyPoints } from '@/shared/ui/small-widgets/key-points/KeyPoints';
import { FreeCompetencies } from '@/shared/ui/small-widgets/free-competencies/FreeCompetencies';
import { ProjectTeam } from "@/shared/ui/small-widgets/project-team/ProjectTeam.tsx";
import { ProjectInfo } from '@/shared/ui/project-info/ProjectInfo';
import { ProjectPrd } from '@/shared/ui/project-prd/ProjectPrd';
import { useProjectDetails } from '@/entities/project/api/queries';
import TargetIcon from '@/shared/ui/icons/target.svg?react'
import clsx from "clsx";


export function ProjectPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data: project, isLoading, isError } = useProjectDetails(id || '');

  const leftWidgetsRef = useRef<HTMLDivElement>(null);
  const projectsInfoRef = useRef<HTMLElement>(null);
  const rightWidgetsRef = useRef<HTMLDivElement>(null);

  const titleLabelRef = useRef<HTMLElement>(null)
  const titleTextRef = useRef<HTMLSpanElement>(null)

  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const label = titleLabelRef.current
    const text = titleTextRef.current

    if (!label || !text) return;

    const checkOverflow = () => {
      const hasOverflow = text.offsetWidth > label.offsetWidth;
      console.log(text.offsetWidth);
      console.log(label.offsetWidth);
      setIsScrolling(hasOverflow);
      console.log(hasOverflow);
    }



    checkOverflow()

    const resizeObserver = new ResizeObserver(() => checkOverflow())
    resizeObserver.observe(label)

    return resizeObserver.disconnect()
  }, [project]);


  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const target = e.currentTarget;
    const scrollTop = target.scrollTop;

    if (leftWidgetsRef.current && target !== leftWidgetsRef.current) {
      leftWidgetsRef.current.scrollTop = scrollTop;
    }
    if (projectsInfoRef.current && target !== projectsInfoRef.current) {
      projectsInfoRef.current.scrollTop = scrollTop;
    }
    if (rightWidgetsRef.current && target !== rightWidgetsRef.current) {
      rightWidgetsRef.current.scrollTop = scrollTop;
    }
  };

  if (isLoading) return <div style={{ padding: 40 }}>Загрузка проекта...</div>;
  if (isError || !project) return <div style={{ padding: 40 }}>Проект не найден</div>;
  const teamMock = [
    { name: 'Фадеев', role: 'Backend', avatarSrc: '' },
    { name: 'Яра', role: 'Frontend', avatarSrc: '' }
  ];

  const linksMock = [
    { title: 'Репозиторий', service: 'GitHub', link: 'https://github.com' }
  ];


  const checkpointsMock = [
    { title: 'Старт работ', deadline: '25-05-2026', status: true },
    { title: 'Постерная сессия', deadline: '29-05-2026', status: false }
  ];

  return (
    <main className={styles.main}>
      <div className={styles.headerLeft} onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>
        <BackIcon/>
        <p className={styles.back}>Назад к списку проектов</p>
      </div>

      <aside className={styles.leftWidgets} ref={leftWidgetsRef} onScroll={handleScroll}>
        <ProfileWidget
          name="Организатор"
          role="Менеджер"
          avatarSrc=""
        />
        <KeyPoints
          leftTime="В процессе"
          keyPoints={checkpointsMock}
        />
        <div className={styles.links}>
          {linksMock.map((link, index) => (
            <LinkBlock key={index} title={link.title} service={link.service} link={link.link} />
          ))}
        </div>
      </aside>

      <section className={clsx(styles.title)} ref={titleLabelRef}>
        <div
          className={isScrolling ? styles.marqueeContent : styles.marqueeContentStatic}
        >
          <span
            className={styles.titleText}
            ref={titleTextRef}
          >
            {project.meta.title}
          </span>

          {isScrolling && (
            <>
              <span className={styles.dot}>  </span>
              <span className={styles.titleText}>
                {project.meta.title}
              </span>
              <span className={styles.dot}>  </span>
            </>
          )}
        </div>
      </section>

      <section className={styles.projectsInfo} ref={projectsInfoRef} onScroll={handleScroll}>
        <ProjectInfo data={project} />
        <ProjectPrd PRD={project.prdMeta} />
      </section>

      <aside className={styles.idBlock}>
        <p className={styles.id}>
          <IdIcon />
          ID: {project.id}
        </p>
        <a className={styles.share} href='#'>
          <ShareIcon />
          Поделиться проектом
        </a>
      </aside>

      <aside className={styles.rightWidgets} ref={rightWidgetsRef} onScroll={handleScroll}>
        <div className={styles.projectStatus}>
          <span className={styles.statusLabel}>Статус:</span>
          <span className={`${styles.status} ${project.status === 'Active' ? '' : styles.inactive}`}>
            <TargetIcon className={project.status === 'Active' ? styles.green : styles.red} />
            {project.status === 'Active' ? 'Набор на проект' : 'Набор закрыт'}
          </span>
        </div>

        <FreeCompetencies roles={project.roles} />
        <ProjectTeam list={teamMock} />
      </aside>
    </main>
  );
}