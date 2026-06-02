import { useRef } from 'react';
import { BackIcon, IdIcon, ShareIcon, TargetIcon } from '@/shared/ui';
import { type ProjectCardData } from '@/entities/project';
import styles from './ProjectPage.module.css'
import { ProfileWidget } from '@/shared/ui/small-widgets/profile-widget/ProfileWidget';
import { LinkBlock } from '@/shared/ui/small-widgets/link-block/LinkBlock';
import { KeyPoints } from '@/shared/ui/small-widgets/key-points/KeyPoints';
import { FreeCompetencies } from '@/shared/ui/small-widgets/free-competencies/FreeCompetencies';
import { ProjectTeam } from "@/shared/ui/small-widgets/project-team/ProjectTeam.tsx";

import { useNavigate } from 'react-router-dom';
import { ProjectInfo } from '@/shared/ui/project-info/ProjectInfo';
import { ProjectPrd } from '@/shared/ui/project-prd/ProjectPrd';

export function ProjectPage() {
  const navigate = useNavigate();
  const leftWidgetsRef = useRef<HTMLDivElement>(null);
  const projectsInfoRef = useRef<HTMLElement>(null);
  const rightWidgetsRef = useRef<HTMLDivElement>(null);

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

  // Достаем id из пути /project/:id
  // const { id } = useParams<{ id: string }>();

  const data: ProjectCardData = {
    id: '8201',
    type: 'PaidProjectRequest' as const,
    tags: [
      { key: 'web' as const, label: 'Веб-разработка' },
      { key: 'fintech' as const, label: 'FinTech' },
      { key: 'mobile' as const, label: 'Мобайл-разработка' },
      { key: 'ml' as const, label: 'Машинное обучение' },
    ],
    ownerId: 1,
    partnerId: { value: 'org', verbose: 'ТПУ ОРПА' },
    status: 'Active' as const,
    meta: {
      title: 'Проект ИСП РАН: Открытый инструмент моделирования',
      description: 'Конструктор мероприятий Т-банка: трёхкомпонентная система, состоящая из конструктора по созданию мероприятий, веб и мобильной версий для просмотра актуальных мероприятий, скачивания деталей мероприятий для просмотра в оффлайн-режиме, получения уведомлений о мероприятиях.',
    },
    checkpoints: "239892345",
    prdMeta: { problem: '', context: '', audience: '', requirements: [], mvp: [] },

    extended: true,
    brandColor: '#28be46',

    roles: [
      {
        roleId: 'frontend',
        placesCount: 5,
        minPlacesCount: 1,
        places: 1,
        skills: [ { skillId: 'kotlin' , skillName: 'Kotlin', requireSkill: true} ],
        meta: {
          name: 'Frontend',
          description: ''
        }
      },
      {
        roleId: 'backend',
        placesCount: 5,
        minPlacesCount: 1,
        places: 1,
        skills: [
          {
            "skillId": "1",
            "skillName": "Java"
          }
        ],
        meta: {
          name: 'Frontend',
          description: ''
        }
      },
      {
        roleId: 'Тестировщик',
        placesCount: 5,
        minPlacesCount: 1,
        places: 1,
        skills: [ { skillId: 'kotlin', skillName: 'Kotlin' } ],
        meta: {
          name: 'Frontend',
          description: ''
        }
      },
    ],

    
  }

  const BigCargData = {

    // Тут данные для большой карточки
    name: 'Paven',
    role: 'Разработчик',
    avatarSrc: '',

    leftTime: '4 месяца',

    links: [
      {
        title: 'Репозиторий', service: 'GitHub', link: 'https://github.com/mys2018'
      },
      {
        title: 'Доска', service: 'Jira', link: 'https://github.com/mys2018'
      },
      {
        title: 'Репозиторий', service: 'GitHub', link: 'https://github.com/mys2018'
      }
    ],

    dreamTeam: [
      {
        name: 'Pava',
        role: 'Backend',
        avatarSrc: 'https://i.pinimg.com/236x/e1/93/77/e19377801345931014961fba19a5eb4c.jpg'
      },
      {
        name: 'Яра',
        role: 'Frontend',
        avatarSrc: ''
      },
      {
        name: 'Александр А.',
        role: 'Frontend',
        avatarSrc: ''
      }
    ]
  }

  const checkpoints = [
    {
      title: 'Старт работ',
      deadline: '25-05-2026',
      status: true
    },
    {
      title: 'Постерная сессия 1',
      deadline: '29-05-2026',
      status: false
    },
    {
      title: 'Защита',
      deadline: '30-05-2026',
      status: false
    }
  ]

  const PRDdata = {
    prerequisites: 'test',
    productVision: 'test',
    audience: [
      {
        title: 'test',
        description: 'test',
        minAge: 10,
        maxAge: 20
      },
      {
        title: 'test',
        description: 'test',
        minAge: 10,
        maxAge: 20
      },
      {
        title: 'test',
        description: 'test',
        minAge: 10,
        maxAge: 20
      }
    ],
    goalsProjects: 'test',
    goalsBusiness: 'test',
    requirements: {
      keyFunctionality: ['test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test', 'test', 'test'],
      functional: ['test', 'test test test test test test test test test test test test test test test test test', 'test'],
      nonFunctional: ['test', 'test test test test test test test test test test test test test test test test test test test test test test test test test', 'test']
    },
    problemStatement: 'test',
    businessMetrics: ['test', 'test', 'test'],
    projectPlan: ['test', 'test', 'test']
  }

  return (
    <main className={styles.main}>
      <div className={styles.headerLeft} onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>
        <BackIcon pathClassName={styles.backIcon} color='#93959B' />
        <p className={styles.back}>Назад к списку проектов</p>
      </div>

      {/* Левые виджеты */}
      <aside className={styles.leftWidgets} ref={leftWidgetsRef} onScroll={handleScroll}>

        {/* Виджет профиля */}
        <ProfileWidget
          name={BigCargData.name}
          role={BigCargData.role}
          avatarSrc={BigCargData.avatarSrc}
        />

        {/* Ключевые точки */}
        <KeyPoints
          leftTime={BigCargData.leftTime}
          keyPoints={checkpoints}
        />

        {/* Блок ссылок */}
        <div className={styles.links}>
          {BigCargData.links.map((link, index) => (
            <LinkBlock key={index} title={link.title} service={link.service} link={link.link} />
          ))}
        </div>

      </aside>

      <section className={styles.title}>
        <div className={styles.marqueeContent}>
          <span className={styles.titleText}>{data.meta.title}</span>
          <span className={styles.dot}>•</span>
          <span className={styles.titleText}>{data.meta.title}</span>
          <span className={styles.dot}>•</span>
        </div>
      </section>

      <section className={styles.projectsInfo} ref={projectsInfoRef} onScroll={handleScroll}>
        <ProjectInfo data={data}/>
        <ProjectPrd {...PRDdata} />
      </section>

    
      {/* ID и Ссылка */}
      <aside className={styles.idBlock}>
        <p className={styles.id}>
          <IdIcon />
          ID: {data.id}
        </p>
        <a className={styles.share} href=''>
          <ShareIcon />
          Поделиться проектом
        </a>
      </aside>

      {/* Правые виджеты */}
      <aside className={styles.rightWidgets} ref={rightWidgetsRef} onScroll={handleScroll}>

        {/* Статус проекта */}
        <div className={styles.projectStatus}>
          <span className={styles.statusLabel}>Статус:</span>
          <span className={`${styles.status} ${data.status === 'Active' ? '' : styles.inactive}`}>
            <TargetIcon size={12} color={data.status === 'Active' ? 'var(--color-brand-green)' : 'var(--color-brand-red)'} />
            {
              data.status === 'Active' ? 'Набор на проект' : 'Набор закрыт'
            }
          </span>
        </div>

        {/* Компетенции */}
        <FreeCompetencies roles={data.roles} />

        {/*Команда проекта*/}
        <ProjectTeam list={BigCargData.dreamTeam} />

      </aside>

    </main>
  );
}