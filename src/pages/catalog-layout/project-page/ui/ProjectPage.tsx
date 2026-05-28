import { BackIcon, IdIcon, ShareIcon, typeProjectsLabel } from '@/shared/ui';
import styles from './ProjectPage.module.css'
import { ProfileWidget } from '@/shared/ui/small-widgets/profile-widget/ProfileWidget';
import { LinkBlock } from '@/shared/ui/small-widgets/link-block/LinkBlock';
import { KeyPoints } from '@/shared/ui/small-widgets/key-points/KeyPoints';
import { FreeCompetencies } from '@/shared/ui/small-widgets/free-competencies/FreeCompetencies';
import { ProjectTeam } from "@/shared/ui/small-widgets/project-team/ProjectTeam.tsx";

import { useNavigate } from 'react-router-dom';

export function ProjectPage() {
  const navigate = useNavigate();
  // Достаем id из пути /project/:id
  // const { id } = useParams<{ id: string }>();

  const data = {
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
    checkpoint: { value: 'MVP' },
    prdMeta: { problem: '', context: '', audience: '', requirements: [], mvp: [] },

    extended: true,
    accentColor: '#28be46',

    // Тут данные для большой карточки
    name: 'Paven',
    role: 'Разработчик',
    avatarSrc: '',

    leftTime: '4 месяца',
    keyPoints: [
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
    ],

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

    roles: [
      {
        roleId: 'frontend',
        placesCount: 5,
        minPlacesCount: 1,
        places: 1,
        skills: [
          {
            "skillId": "1",
            "skillName": "React",
            requireSkill: true
          },
          {
            "skillId": "2",
            "skillName": "CSS",
            requireSkill: false
          }
        ],
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
        skills: [
          {
            "skillId": "1",
            "skillName": "React"
          },
          {
            "skillId": "2",
            "skillName": "CSS"
          },
          {
            "skillId": "2",
            "skillName": "CSS"
          }
        ],
        meta: {
          name: 'Frontend',
          description: ''
        }
      },
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


  return (
    <main className={styles.main}>
      <div className={styles.headerLeft} onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>
        <BackIcon pathClassName={styles.backIcon} color='#93959B' />
        <p className={styles.back}>Назад к списку проектов</p>
      </div>


      {/* Левые виджеты */}
      <aside className={styles.leftWidgets}>

        {/* Виджет профиля */}
        <ProfileWidget
          name={data.name}
          role={data.role}
          avatarSrc={data.avatarSrc}
        />

        {/* Ключевые точки */}
        <KeyPoints
          leftTime={data.leftTime}
          keyPoints={data.keyPoints}
        />

        {/* Блок ссылок */}
        <div className={styles.links}>
          {data.links.map((link, index) => (
            <LinkBlock key={index} title={link.title} service={link.service} link={link.link} />
          ))}
        </div>

      </aside>

      <h1 className={styles.title}>{data.meta.title}</h1>

      <section className={styles.projectsInfo}>

        <div className={styles.topLabel}>
          <div className={styles.mainInfo}>
            <div className={styles.tags}>
              {
                data.tags.map(direction => (
                  <div key={direction.key} className={styles.tag}>
                    {direction.label}
                  </div>
                ))
              }
            </div>
          </div>
          <div className={styles.format}>
            {typeProjectsLabel(data.type)}
          </div>
        </div>

        <div className={styles.orgBlock}>
          <div className={styles.orgAvatar}>Т</div>
          <div className={styles.orgInfo}>
            <span className={styles.orgName}>{data.partnerId.verbose}</span>
            <span className={styles.orgSub}>публикационная активность</span>
          </div>
        </div>

        <p className={styles.description}>{data.meta.description}</p>
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
      <aside className={styles.rightWidgets}>

        {/* Статус проекта */}
        <div className={styles.projectStatus}>
          <span className={styles.statusLabel}>Статус:</span>
          <span className={styles.status}>{
            data.status === 'Active' ? 'Набор на проект' : 'Набор закрыт'
          }</span>
        </div>

        {/*Команда проекта*/}
        <ProjectTeam list={data.dreamTeam} />

        {/* Компетенции */}
        <FreeCompetencies roles={data.roles} />

      </aside>

    </main>
  );
}