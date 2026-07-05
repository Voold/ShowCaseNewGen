import { formatDeadline, getDaysUntil } from '@/shared/lib/date';
import CalendarIcon from '@/shared/ui/icons/calendar.svg?react';
import CheckIcon from '@/shared/ui/icons/check.svg?react';
import ClockIcon from '@/shared/ui/icons/clock.svg?react'
import styles from './KeyPoints.module.css'

interface KeyPoint {
  title: string;
  deadline: string; // DD-MM-YYYY
  status: boolean;
}

interface KeyPointsProps {
  leftTime: string;
  keyPoints: KeyPoint[];
}

export const KeyPoints = ({ leftTime, keyPoints }: KeyPointsProps) => {
  const lastCompletedIndex = keyPoints.reduce((acc, kp, i) => kp.status ? i : acc, -1)
  const activeIndex = lastCompletedIndex + 1 < keyPoints.length ? lastCompletedIndex + 1 : -1

  return (
    <div className={styles.keyPoints}>
      <div className={styles.header}>
        <p className={styles.title}>Ключевые точки</p>
        <div className={styles.leftTimeBlock}>
          <CalendarIcon/>
          <p className={styles.leftTime}>{leftTime}</p>
        </div>
      </div>

      <div className={styles.listKeyPoints}>
        {keyPoints.map((keyPoint, index) => {
          const isFirst = index === 0
          const isLast = index === keyPoints.length - 1
          const isActive = index === activeIndex
          const isCompleted = keyPoint.status

          const daysUntil = isActive ? getDaysUntil(keyPoint.deadline) : null
          const showCountdown = daysUntil !== null && daysUntil >= 0 && daysUntil <= 10

          const indexClass = [
            styles.index,
            isFirst ? styles.indexDiamond : '',
            isLast ? styles.indexCircle : '',
            isCompleted ? styles.completedIndex : '',
            isActive ? styles.activeIndex : '',
          ].join(' ')

          return (
            <div key={index} className={`${styles.keyPoint} ${isActive ? styles.keyBodyActive : ''} ${isCompleted ? styles.completed : ''}`}>
              <div className={indexClass}>

                  {isActive ? (
                    <div className={styles.clockIcon}>
                      <ClockIcon color={'var(--color-blue)'}/>
                    </div>
                  ) : (
                  <p className={styles.indexNumber}>
                    {index + 1}
                  </p>)
                  }
                  
                </div>
              

              <div className={styles.keyInfo}>
                <p className={`${styles.keyTitle} ${isActive ? styles.keyTitleActive : ''}`}>
                  {keyPoint.title}
                </p>
                <p className={styles.keyDeadline}>
                  {isCompleted ? (
                    <span className={styles.completedText}>Завершено  <CheckIcon className={styles.checkIcon}/></span>
                  ) : (
                    <>
                      {formatDeadline(keyPoint.deadline)}
                      {showCountdown && (
                        <span className={styles.countdown}> (через <span className={styles.countdownDays}>{daysUntil} дней</span>)</span>
                      )}
                    </>
                  )}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}