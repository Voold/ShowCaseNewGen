import styles from './LinkBlock.module.css'
import TgLogo from '@/shared/ui/icons/telegram.svg?react'
import VkLogo from '@/shared/ui/icons/vk.svg?react'
import Plus from '@/shared/ui/icons/plus.svg?react'

type linkType = 'tg' | 'vk'

type LinkBlockProps = {
  type?: linkType,
  link?: string, 
  anotherType?: string
};

const getLogo = (type: linkType, link?: string) => {
  switch (type) {
    case 'tg':
      return <TgLogo className={`${styles.logo} ${link ? '' : styles.smallLogo}`}/>
    case 'vk':
      return <VkLogo className={`${styles.logo} ${link ? '' : styles.smallLogo}`}/>
    default:
      return 
  }
}

const getLabel = (type: linkType) => {
  switch (type) {
    case 'tg':
      return "Telegram"
    case 'vk':
      return "ВК"
    default:
      return ""
  }
}

export const LinkBlock = ({type, link, anotherType}: LinkBlockProps) => {
  return (
    <div className={`${styles.container} ${link ? styles.active : ''}`}>
      {
        link ? (
          <div className={styles.innerContainerActive}>
            {type && getLogo(type, link)}
            <div className={styles.info}>
              <h6>
                {type ? getLabel(type) : anotherType}
              </h6>
              <p>
                {link}
              </p>
            </div>
          </div>
        ) : (
          <div className={styles.innerContainer}>
            <div className={styles.header}>
              {type ? getLogo(type, link) : ''}
              <h6>
                {type ? getLabel(type) : 'Другой способ связи'}
              </h6>
            </div>
            <button>
              <Plus/>
              Добавить
            </button>
          </div>
        )
      }
    </div>
  );
};