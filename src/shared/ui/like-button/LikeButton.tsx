import styles from './LikeButton.module.css';
import LikeIcon from '@/shared/ui/icons/niceLike.svg?react';

interface LikeButtonProps {
  isLiked: boolean;
  onClick: () => void;
  className?: string;
}

export const LikeButton = ({ isLiked, onClick, className = '' }: LikeButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClick();
  };

  return (
      <button
          type="button"
          className={`${styles.button} ${className}`}
          onClick={handleClick}
      >
        <LikeIcon
          className={`${styles.likeIcon} ${isLiked ? styles.liked : ''}`}
        />
      </button>
  );
};