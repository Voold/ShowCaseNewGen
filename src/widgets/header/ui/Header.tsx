import LogoTPU from '@/shared/assets/svg/LogoTPU.svg';
import { SwitchWorkSpace } from '@/features/switch-workspace';
import EnterButton from './EnterButton/EnterButton.tsx';
import styles from './Header.module.css';


export default function Header() {
  return (
    <div className={styles.header}>
      <header className={styles.wrap}>
        <img src={LogoTPU} />
        <div className={styles.center}>
          <SwitchWorkSpace />
        </div>
        <EnterButton />
      </header>
    </div>

  );
}