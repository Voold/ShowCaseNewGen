import { useNavigate } from 'react-router-dom';
import styles from './MyProfile.module.css'
import { BackIcon } from '@/shared';
import type { UserDto } from '@/entities/user/model/types';
import EmailIcon from '@/shared/ui/icons/email.svg?react';
import EditIcon from '@/shared/ui/icons/edit.svg?react';
import BigInfoIcon from '@/shared/ui/icons/big_info.svg?react';
import { LinkBlock } from '@/shared/ui/link-block/LinkBlock';

export const MyProfile = () => {

  const navigate = useNavigate()

  const data : UserDto = {
    userId: 123,
    email: 'huihui@gmail.com',
    profilePicture: '',
    group: '8R32',
    grade: '2',
    meta: {
      firstName: 'Олег',
      lastName: 'Тинькофф',
      bio: 'Дурак',
      skills: 'dfdfdfd',
      experience: 'dfdfdfd'
    },
    roles: {
      Default: undefined,
      Student: undefined,
      Admin: undefined,
      Curator: undefined,
      Mentor: undefined,
      Moderator: undefined,
      ROOP: undefined,
      Teacher: undefined
    },
    capabilities: null
  }

  const links: { type?: 'tg' | 'vk'; link?: string; anotherType?: string }[] = [
    {
      type: 'tg',
      link: 'Mys2018',
    },
    {
      type: 'vk',
    },
    {
    },
  ]

  return (
    <div className={styles.mainContent}>

      <section className={styles.headerLeft} onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>
        <BackIcon pathClassName={styles.backIcon} color='#93959B' />
        <p className={styles.back}>Назад к списку проектов</p>
      </section>

      <section className={styles.title}>
        <h2>
          Мой профиль
        </h2>
      </section>

      <section className={styles.body}>
        <div className={styles.mainInfo}>

          <div className={styles.infoGrid}>

            <section className={styles.mainInfoContainer}>
              <div className={styles.avatar}>
                {
                  data.profilePicture ? <img className={styles.avatarImg} src={data.profilePicture} alt='Аватар'/> : <p className={styles.avatarName}>{data.meta.firstName.slice(0, 1)}</p>
                }
                <button className={styles.editButton}>
                  <EditIcon />
                </button>
              </div>
              <div className={styles.nameContainer}>
                <div className={styles.name}>
                  <p>
                    {data.meta.firstName}
                  </p>
                  <p>
                    {data.meta.lastName}
                  </p>
                
                </div>
                <p className={styles.group}>
                  {data.group}, {data.grade} курс
                </p>
              </div>
            </section>

            <section className={styles.editBody}>
              <p className={styles.appearance}>
                Внешний вид профиля
              </p>
              <button className={styles.outEditButton}>
                Настроить
              </button>
            </section>

            <section className={styles.secontInfoContainer}>

              <div className={styles.header}>
                <div className={styles.contactsText}>
                  <h1>
                    Контакты
                  </h1>
                  <p>
                    для командного взаимодействия. 
                  </p>
                </div>

                <div className={styles.emailContainer}>
                  <EmailIcon />
                  <p>
                    {data.email}
                  </p>
                </div>
              </div>

              <div className={styles.linkList}>
                {
                  links.map((link) => (
                    <LinkBlock 
                      type={link.type}
                      link={link.link}
                      anotherType={link.anotherType}
                    />
                  ))
                }
              </div>
              
            </section>
            
          </div>
          <div className={styles.infoLabel}>
            <BigInfoIcon className={styles.bigInfoIcon}/>
            <p>
              Данные, которые не имеют при себе значка редактирования (   ), заполняются автоматически и недоступны для ручного изменения. Если вы нашли в них ошибку, пожалуйста, свяжитесь со своим куратором.
            </p>
          </div>
        </div>
        
      </section>
    </div>
  );
};