import LogoTPU from "@/shared/assets/svg/newLogo.svg";
import { SwitchWorkSpace } from "@/features/switch-workspace";
import styles from "./Header.module.css";

import { UserCard } from "./UserCard.tsx";

export default function Header() {
  return (
    <div className={styles.header}>
      <header className={styles.wrap}>
        <img src={LogoTPU}  alt={'Лого'}/>
        <div className={styles.center}>
          <SwitchWorkSpace />
        </div>
        {/*<EnterButton /> */}
        <UserCard />
      </header>
    </div>
  );
}
