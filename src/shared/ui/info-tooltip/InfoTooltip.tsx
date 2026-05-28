import styles from './InfoTooltip.module.css'
import { QuestionIcon } from '../icons/QuestionIcon'

interface InfoTooltipProps {
    className: string;
    text: string;
}

export const InfoTooltip = ({ className, text }: InfoTooltipProps) => {
    return (
        <div className={`${styles.questionIcon} ${className}`}>
            <QuestionIcon pathClassName={styles.questionIconPath} />
            <span className={styles.tooltip}>
                {text}
            </span>
        </div>
    )
}