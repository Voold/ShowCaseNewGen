import { useNavigate } from 'react-router-dom';
import styles from './MyProfile.module.css';
import { BackIcon } from '@/shared';
import { useMe } from '@/entities/user/api/queries';
import { ProfileHeader } from '@/widgets/profile-header';
import { AboutMe } from "@/features/about-me/ui/AboutMe.tsx";
import { MyCompetenciesList } from "@/features/my-competencies";

export const MyProfile = () => {
  const navigate = useNavigate();
  const { data: user } = useMe();

  const links: { type?: 'tg' | 'vk'; link?: string; anotherType?: string }[] = [
    { type: 'tg', link: 'Mys2018' },
    { type: 'vk' },
    { anotherType: 'Max', link: '@mys2018' },
  ];

  if (!user || user.id === 'loading...') {
    return null;
  }

  return (
    <div className={styles.mainContent}>
      <section className={styles.headerLeft} onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>
        <BackIcon pathClassName={styles.backIcon} color='#93959B' />
        <p className={styles.back}>Назад к списку проектов</p>
      </section>

      <section className={styles.title}>
        <h2>Мой профиль</h2>
      </section>

      <section className={styles.profile}>
        <ProfileHeader data={user} links={links} />
        <div className={styles.body}>
          <AboutMe
            bio={user.meta.bio}
            className={styles.wid}
          />
          <MyCompetenciesList savedSkills={user.meta.skills} />
        </div>
      </section>
    </div>
  );
};