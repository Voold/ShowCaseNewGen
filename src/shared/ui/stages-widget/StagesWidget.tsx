import { FeedBackIcon } from '../icons/FeedBackIcon';
import { FolderIcon } from '../icons/FolderIcon';
import { LikeIcon } from '../icons/LikeIcon';
import styles from './StagesWidget.module.css'


interface StagesData {
  type: 'projects' | 'feedback' | 'likes',
  count: number,
  snippet?: string
}

const getName = (type: string) => {
  switch (type) {
    case 'projects':
      return 'Мои проекты'
    case 'feedback':
      return 'Мои отклики'
    case 'likes':
      return 'Понравились'
  }
}

const getIcon = (type: string) => {
  switch (type) {
    case 'projects':
      return <FolderIcon size={18} color={'var(--color-gray-600)'}/>;
    case 'feedback':
      return <FeedBackIcon size={18} color={'var(--color-gray-600)'}/>;
    case 'likes':
      return <LikeIcon size={18} color={'var(--color-gray-600)'}/>;
    default:
      return null;
  }
};


export const StagesWidget = () => {

  const stagesData: StagesData[] = [
    {
      type: 'projects',
      count: 2,
      snippet: '1 активный'
    },
    {
      type: 'feedback',
      count: 1,
      snippet: 'еще 4 доступно'
    },
    {
      type: 'likes',
      count: 3,
      snippet: 'ждут отклика'
    }
  ]

  return (
    <div className={styles.mainContainer}>
      {
        stagesData.map((card) => (
          <div key={card.type} className={styles.cardBody}>
            <header className={styles.cardHeader}>
              <span className={styles.count}>
                {card.count}
              </span>
              {getIcon(card.type)}
            </header>
            <footer className={styles.cardFooter}>
              <h4 className={styles.label}>
                {getName(card.type)}
              </h4>
              <p className={styles.snippet}>
                {card.snippet}
              </p>
            </footer>
          </div>
        ))
      }
      
    </div>
  );
};