import {useNavigate} from 'react-router-dom';
import styles from './MyProfile.module.css'
import {BackIcon} from '@/shared';
import type {UserDto} from '@/entities/user/model/types';
import {ProfileHeader} from '@/widgets/profile-header';
import {AboutMe} from "@/features/about-me/ui/AboutMe.tsx";
// TODO
import { MyCompetenciesList } from "@/features/my-competencies";

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
      bio: 'Имею профильное образование в (X) и сильную теоретическую базу. Быстро обучаюсь, умею работать с большими объемами информации. Прошел(ла) обучение по направлению \\(X\\), владею инструментами \\(A\\) и \\(B\\). Высоко мотивирован(а) на развитие в сфере \\(X\\) и готов(а) брать на себя ответственность за результат. Имею профильное образование в \\(X\\) и сильную теоретическую базу. Быстро обучаюсь, умею работать с большими объемами информации. Прошел(ла) обучение по направлению \\(X\\), владею инструментами.',
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
      anotherType: 'Max',
      link: '@mys2018'
    },
  ]
  return (
      <div className={styles.mainContent}>

        <section className={styles.headerLeft} onClick={() => navigate(-1)} style={{cursor: 'pointer'}}>
          <BackIcon pathClassName={styles.backIcon} color='#93959B'/>
          <p className={styles.back}>Назад к списку проектов</p>
        </section>

        <section className={styles.title}>
          <h2>
            Мой профиль
          </h2>
        </section>

        <section className={styles.profile}>
          <ProfileHeader data={data} links={links}/>
          <div className={styles.body}>
            <AboutMe
                bio={data.meta.bio}
                className={styles.wid}
            />
            <MyCompetenciesList/>
          </div>
        </section>
      </div>
  );
};
