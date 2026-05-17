import LogoTPU from '@/shared/assets/svg/LogoTPU.svg';
import { SwitchWorkSpace } from '@/features/switch-workspace';
import EnterButton from './EnterButton/EnterButton.tsx';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.wrap}>
      <img src={LogoTPU} />
      <SwitchWorkSpace />
      <EnterButton />
    </header>
  );
}