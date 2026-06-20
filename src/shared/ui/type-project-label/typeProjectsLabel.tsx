import styles from './typeProjectsLabel.module.css';
import { FolderIcon } from '@/shared/ui';
import { CodeIcon } from '@/shared/ui/icons/CodeIcon';
import { StarIcon } from '@/shared/ui/icons/StarIcon';
import StudyIcon from '@/shared/ui/icons/studyIcon.svg?react'
import type { ProjectFormat } from '../../../entities/project/model/types';

export const typeProjectsLabel = (type: ProjectFormat) => {
  switch (type) {
    case 'Case':
      return <div className={`${styles.base} ${styles.case}`}><FolderIcon pathClassName={styles.pathFolder} size={12} />Кейсовый</div>;
    case 'Study':
      return <div className={`${styles.base} ${styles.study}`}><StudyIcon/>Учебный</div>;
    case 'Real':
      return <div className={`${styles.base} ${styles.real}`}><CodeIcon pathClassName={styles.pathCode} size={12} />Реальный</div>;
    case 'Paid':
      return <div className={`${styles.base} ${styles.paid}`}><StarIcon pathClassName={styles.pathStar} size={12} />Оплачиваемый</div>;
    default:
      return null;
  }
};
