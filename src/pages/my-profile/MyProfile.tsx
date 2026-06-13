import { useNavigate } from 'react-router-dom';
import styles from './MyProfile.module.css'
import { BackIcon } from '@/shared';
import type { UserDto } from '@/entities/user/model/types';
import { ProfileHeader } from '@/widgets/profile-header';

export const MyProfile = () => {

  const navigate = useNavigate()

  const data: UserDto = {
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
        <ProfileHeader data={data} links={links} />
      </section>
    </div>
  );
};
