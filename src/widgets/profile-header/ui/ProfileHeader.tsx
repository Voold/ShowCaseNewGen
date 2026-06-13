import type { UserDto } from '@/entities/user/model/types';
import EmailIcon from '@/shared/ui/icons/email.svg?react';
import EditIcon from '@/shared/ui/icons/edit.svg?react';
import BigInfoIcon from '@/shared/ui/icons/big_info.svg?react';
import { LinkBlock } from '@/shared/ui/link-block/LinkBlock';
import styles from './ProfileHeader.module.css';

interface ProfileLink {
  type?: 'tg' | 'vk';
  link?: string;
  anotherType?: string;
}

interface ProfileHeaderProps {
  data: UserDto;
  links: ProfileLink[];
}

export const ProfileHeader = ({ data, links }: ProfileHeaderProps) => {
  return (
    <div className={styles.mainInfo}>

      <div className={styles.infoGrid}>

        <section className={styles.mainInfoContainer}>
          <div className={styles.avatar}>
            {
              data.profilePicture ? <img className={styles.avatarImg} src={data.profilePicture} alt='Аватар' /> : <p className={styles.avatarName}>{data.meta.firstName.slice(0, 1)}</p>
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
              links.map((link, index) => (
                <LinkBlock
                  key={index}
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
        <BigInfoIcon className={styles.bigInfoIcon} />
        <p>
          Данные, которые не имеют при себе значка редактирования, заполняются автоматически и недоступны для ручного изменения. Если вы нашли в них ошибку, пожалуйста, свяжитесь со своим куратором.
        </p>
      </div>
    </div>
  );
};
