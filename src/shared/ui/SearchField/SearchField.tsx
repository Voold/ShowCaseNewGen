import styles from './SearchField.module.css';
import searchIcon from '@/assets/svg/SearchIcon.svg'

export default function SearchField() {
  return (
    <div className={styles.body}>
      <img className={styles.icon}src={searchIcon} alt='Поиск'/>
      <input className={styles.input} type="text" placeholder="Вводите инфо о проекте" />
    </div>
  )
}