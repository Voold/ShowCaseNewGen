import styles from './InfoTooltip.module.css'
import QuestionIcon from '@/shared/ui/icons/question.svg?react';

interface InfoTooltipProps {
    className: string;
    text: string;
}

export const InfoTooltip = ({ className, text }: InfoTooltipProps) => {
    return (
        <div className={`${styles.questionIcon} ${className}`}>
            <QuestionIcon className={styles.questionIcon} />
            <span className={styles.tooltip}>
                {text}
            </span>
        </div>
    )
}