import { CalendarIcon } from '../../icons/CalendarIcon'
import { CheckIcon } from '../../icons/CheckIcon';
import { ClockIcon } from '../../icons/ClockIcon';
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

const parseDeadline = (deadline: string): Date | null => {
  const parts = deadline.split('-')
  if (parts.length !== 3) return null
  const [day, month, year] = parts
  return new Date(Number(year), Number(month) - 1, Number(day))
}

const formatDeadline = (deadline: string): string => {
  const date = parseDeadline(deadline)
  if (!date) return deadline
  return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })
}

const getDaysUntil = (deadline: string): number | null => {
  const date = parseDeadline(deadline)
  if (!date) return null
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const diff = date.getTime() - today.getTime()
  return Math.ceil(diff / (1000 * 60 * 60 * 24))
}

export const KeyPoints = ({ leftTime, keyPoints }: KeyPointsProps) => {
  const lastCompletedIndex = keyPoints.reduce((acc, kp, i) => kp.status ? i : acc, -1)
  const activeIndex = lastCompletedIndex + 1 < keyPoints.length ? lastCompletedIndex + 1 : -1

  return (
    <div className={styles.keyPoints}>
      <div className={styles.header}>
        <p className={styles.title}>Ключевые точки</p>
        <div className={styles.leftTimeBlock}>
          <CalendarIcon />
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
            <div key={index} className={`${styles.keyPoint} ${isCompleted ? styles.completed : ''}`}>
              <div className={indexClass}>

                  {isActive ? (
                    <div className={styles.clockIcon}>
                      <ClockIcon color={'#1D1D1F'}/>
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
                    <span className={styles.completedText}>Завершено <CheckIcon stroke='#28BE46' className={''}/></span>
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