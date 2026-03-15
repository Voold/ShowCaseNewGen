import { useState } from "react";
import styles from "./SwitchWorkSpace.module.css"

export default function SwitchWorkSpace () {

  const [isCatalog, setIsCatalog] = useState(true);

    const square =  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="16" height="16" rx="4"/>
                  </svg>


    return (
        <section className={styles.body}>
          <div className={`${styles.selector} ${isCatalog ? styles.catalog : styles.mySpace}`}></div>
          <div 
            className={`${styles.buttonPart} ${isCatalog ? styles.active : ''}`}
            onClick={()=>{if(isCatalog){return}; setIsCatalog(!isCatalog);}}
          >
            {square}Поиск новых проектов
          </div>
          <div 
            className={`${styles.buttonPart} ${!isCatalog ? styles.active : ''}`}
            onClick={()=>{if(!isCatalog){return}; setIsCatalog(!isCatalog);}}
          >
            {square}Моё пространство
          </div>
        </section>
    );
};
