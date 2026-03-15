import LogoTPU from "../../assets/svg/LogoTPU.svg"
import EnterButton from "../Buttons/EnterButton/EnterButton.tsx";
import SwitchWorkSpace from "../Buttons/SwitchWorkSpace/SwitchWorkSpace.tsx";

import styles from "./Header.module.css"

export default function Header () {

    return (
        <header className={styles.wrap}>
          <img src={LogoTPU}/>
          <SwitchWorkSpace/>
          <EnterButton/>
          <div className={styles.backLine}></div>
        </header>
    );
};
