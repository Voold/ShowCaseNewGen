import styles from './typeProjectsLabel.module.css';
import { FolderIcon } from '@/shared/ui';
import { CodeIcon } from '@/shared/ui/icons/CodeIcon';
import { StarIcon } from '@/shared/ui/icons/StarIcon';
import type { ProjectFormat } from '@/entities/project/model/types';



export const typeProjectsLabel = (type: ProjectFormat) => {
  switch (type) {
    case 'CaseProjectRequest':
      return <div className={styles.case}><FolderIcon pathClassName={styles.pathFolder}/>Кейсовый</div>;
    case 'RealProjectRequest':
      return <div className={styles.real}><CodeIcon pathClassName={styles.pathCode}/>Реальный</div>;
    case 'PaidProjectRequest':
      return <div className={styles.paid}><StarIcon pathClassName={styles.pathStar}/>Оплачиваемый</div>;
    default:
      return null;
  }
};