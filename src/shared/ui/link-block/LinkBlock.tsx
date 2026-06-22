import styles from './LinkBlock.module.css'
import TgLogo from '@/shared/ui/icons/telegram.svg?react'
import ElementLogo from '@/shared/assets/tpu_element.svg?react'
import VkLogo from '@/shared/ui/icons/vk.svg?react'
import Plus from '@/shared/ui/icons/plus.svg?react'
import clsx from "clsx";

type linkType = 'tg' | 'vk' | 'element'

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
    case 'element':
      return <ElementLogo className={`${styles.logo} ${link ? '' : styles.smallLogo}`}/>
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
    case 'element':
      return "ТПУ-Element"
    default:
      return ""
  }
}

export const LinkBlock = ({type, link, anotherType}: LinkBlockProps) => {
  return (
    <div className={clsx(styles.container, (link ? styles.active : ''),  (type === 'element' && styles.special))}>
      {
        link ? (
          <div className={styles.innerContainerActive}>
            {type && getLogo(type, link)}
            <div className={styles.info}>
              <h6 className={clsx(type === 'element' && styles.special)}>
                {type ? getLabel(type) : anotherType}
              </h6>
              <p className={clsx(type === 'element' && styles.special)}>
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