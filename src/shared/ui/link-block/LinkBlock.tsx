import styles from './LinkBlock.module.css'
import TgLogo from '@/shared/ui/icons/telegram.svg?react'
import ElementLogo from '@/shared/assets/tpu_element.svg?react'
import VkLogo from '@/shared/ui/icons/vk.svg?react'
import Plus from '@/shared/ui/icons/plus.svg?react'
import clsx from "clsx";
import type {Messengers} from "@/entities/user/model/types.ts";

type LinkBlockProps = {
  linksObj: Messengers
};

const getLogo = (type: string, link?: string) => {
  switch (type) {
    case 'telegram':
      return <TgLogo className={`${styles.logo} ${link ? '' : styles.smallLogo}`}/>
    case 'vk':
      return <VkLogo className={`${styles.logo} ${link ? '' : styles.smallLogo}`}/>
    case 'element':
      return <ElementLogo className={`${styles.logo} ${link ? '' : styles.smallLogo}`}/>
    default:
      return 
  }
}

const getLabel = (type: string) => {
  switch (type) {
    case 'telegram':
      return "Telegram"
    case 'vk':
      return "ВК"
    case 'element':
      return "ТПУ-Element"
    default:
      return ""
  }
}

export const LinkBlock = ({ linksObj }: LinkBlockProps) => {

  const links = [
    {
      type: 'telegram',
      link: linksObj.telegram
    },
    {
      type: 'vk',
      link: linksObj.vk
    },
    {
      type: 'element',
      link: linksObj.element
    },
  ]

  return (
    <div className={styles.linkList}>
      {
        links.map((link, index) => (
          <div key={index} className={clsx(styles.container, (link ? styles.active : ''),  (link.type === 'element' && styles.special))}>
            {
              link.link === "" ? (
                <div className={styles.innerContainerActive}>
                  {link.type && getLogo(link.type, link.link)}
                  <div className={styles.info}>
                    <h6 className={clsx(link.type === 'element' && styles.special)}>
                      {getLabel(link.type)}
                    </h6>
                    <p className={clsx(link.type === 'element' && styles.special)}>
                      {link.link}
                    </p>
                  </div>
                </div>
              ) : (
                <div className={styles.innerContainer}>
                  <div className={styles.header}>
                    {link.type ? getLogo(link.type, link.link) : ''}
                  </div>
                  <button>
                    <Plus/>
                    Добавить
                  </button>
                </div>
              )
            }
          </div>
        ))
      }
    </div>
  );
};