import { OpenIcon } from '../../icons/OpenIcon';
import styles from './LinkBlock.module.css';

interface LinkBlockProps {
  title: string,
  service: string,
  link: string,
}


export const LinkBlock = ({title, service, link} : LinkBlockProps) => {
  return (
    <div className={styles.body}>
      <p className={styles.title}>{title}</p>
      <a className={styles.linkBlock} href={link}>
        <p className={styles.service}>{service}</p>
        <OpenIcon/>
      </a>
    </div>
  )
}