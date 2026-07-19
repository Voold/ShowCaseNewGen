import styles from './GetStatuses.module.css'
import ToughGuyIcon from '@/shared/ui/icons/statuses/toughGuy.svg?react'
import BugHunterIcon from '@/shared/ui/icons/statuses/bugHunter.svg?react'


const getIconAndColorStatus = ( type: string) => {
  const cl = styles.icon

  switch ( type ) {
    case 'toughGuy':
      return {
        icon: <ToughGuyIcon className={cl}/>,
        color: '#E3574D',
        text: 'Крутой перец'
      }
    case 'bugHunter':
      return {
        icon: <BugHunterIcon className={cl}/>,
        color: 'var(--color-brand-violet)',
        text: 'Баг хантер'
      }
    default:
      return {
        icon: <></>,
        color: '#E3574D',
        text: 'Нет статуса'
      }
  }
}

type GetStatusesProps = {
  type: string
}

export function getStatuses({ type }: GetStatusesProps) {
  const { icon, color, text} = getIconAndColorStatus(type)

  return (
    <div className={styles.body} style={{ backgroundColor: color }}>
      {icon}
      <p>
        {text}
      </p>
    </div>
  )
}
