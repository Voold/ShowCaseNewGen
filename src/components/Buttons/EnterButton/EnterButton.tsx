import styles from "./EnterButton.module.css"

export default function EnterButton () {

    const enterSVG =  <svg viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 7.00005L6.3635 7.00005M6.3635 7.00005L4.20284 5.03577M6.3635 7.00005L4.20284 8.96434"  stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M4.48438 3.46429V3C4.48438 2.17157 5.15595 1.5 5.98438 1.5H10.4997C11.3282 1.5 11.9997 2.17157 11.9997 3V11C11.9997 11.8284 11.3282 12.5 10.4997 12.5H5.98438C5.15595 12.5 4.48438 11.8284 4.48438 11V10.5357" stroke-width="1.125"/>
                    </svg>
                    

    return (
        <div className={styles.wrap}>
          <button className={styles.body}>
            <label className={styles.text}>Войти</label> {enterSVG}
          </button>
        </div>
    );
};
