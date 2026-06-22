import styles from './ProjectCard.module.css';
import type { ProjectCardData } from '../../model/types';
import { useNavigate } from 'react-router-dom';
import { typeProjectsLabel } from '@/shared/ui/type-project-label/typeProjectsLabel.tsx';
import { useState } from 'react';
import { LikeButton } from '@/shared/ui';

interface ProjectCardProps {
  project: ProjectCardData;
}

const getColorFromTag = (tag: string) => {
  switch (tag) {
    case 'Веб-разработка':
      return styles.violet
    case 'Инженерия':
      return styles.blue
    case 'E-commerce':
      return styles.pink
    case 'VR/AR':
      return styles.pink
    case 'Мобайл-разработка':
      return styles.green
    default:
      return styles.blue
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { id, type, primaryTag, tags, partnerId, meta, roles } = project;
  const navigate = useNavigate()
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    return setIsLiked(!isLiked)
  }

  const remainCount = tags.length - 1;

  // Собираем названия компетенций из массива ролей
  const competencies = roles.map(role => role.meta.name);
  // Если есть описание — считаем карточку расширенной

  return (
    <div className={`${styles.cardBody}`} data-bg={primaryTag.tagName}
      onClick={() => navigate(`/catalog/projects/${id}`)}
    >

      <LikeButton
        isLiked={isLiked}
        onClick={toggleLike}
        className={`${styles.like} ${isLiked ? styles.liked : ''}`}
      />

      <div className={`${styles.header} ${getColorFromTag(primaryTag.tagName)}`} data-bg={primaryTag.tagName}>
        <div className={styles.directionTag}>{primaryTag.tagName}</div>
        {remainCount > 0 && (
          <div className={styles.tags}>
            <div className={styles.tag}>Ещё +{remainCount}</div>
          </div>
        )}
      </div>

      <div className={styles.body}>
        <div className={styles.meta}>
          {typeProjectsLabel(type)}
          <div className={styles.id}>№ {id}</div>
        </div>
        <div className={styles.title}>{meta.title}</div>
        {meta.description && <p className={styles.description}>{meta.description}</p>}
        <div className={styles.competenciesLabel}>{competencies.length} компетенций:</div>
        <div className={styles.competenciesWrapper}>
          <div className={styles.competencies}>
            {competencies.map((c, i) => (
              <span key={i} className={styles.competency}>{c}</span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.org}>
          <div className={styles.orgAvatar}>Т</div>
          <div className={styles.orgInfo}>
            <span className={styles.orgName}>{partnerId.verbose}</span>
            <span className={styles.orgSub}>публикационная активность</span>
          </div>
        </div>
      </div>

    </div>
  );
}