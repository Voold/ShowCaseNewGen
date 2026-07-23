import { useNavigate } from 'react-router-dom';
import styles from './MyProfile.module.css';
import { useMe } from '@/entities/user/api/queries';
import { ProfileHeader } from '@/widgets/profile-header';
import { AboutMe } from "@/features/about-me/ui/AboutMe.tsx";
import { MyCompetenciesList } from "@/features/my-competencies";
import BackIcon from '@/shared/ui/icons/back.svg?react';
import EyeIcon from '@/shared/ui/icons/eye.svg?react';
import {Portfolio} from "@/features/portfolio/Portfolio.tsx";

export const MyProfile = () => {
  const navigate = useNavigate();
  const { data: user } = useMe();

  const portfolio = ''

  if (!user || user.id === 'loading...') {
    return null;
  }

  console.log(user.meta.messengers)
  console.log(user)

  return (
    <div className={styles.mainContent}>
      <section className={styles.headerLeft} onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>
        <BackIcon/>
        <p className={styles.back}>Назад к списку проектов</p>
      </section>

      <section className={styles.title}>
        <h2>Мой профиль</h2>
      </section>

      <section className={styles.see} onClick={() => navigate(`/profile/${user.id}`)}>
        <EyeIcon/>
        <p>
          Посмотреть опубликованный вид
        </p>
      </section>

      <section className={styles.profile}>
        <ProfileHeader data={user} links={user.meta.messengers} />
        <div className={styles.body}>
          <AboutMe
            bio={user.meta.bio}
            className={styles.wid}
          />
          <MyCompetenciesList savedSkills={user.meta.skills} />
          <Portfolio firsValue={portfolio} />
        </div>
      </section>
    </div>
  );
};