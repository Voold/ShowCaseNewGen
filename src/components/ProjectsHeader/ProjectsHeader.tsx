import { useState } from "react";
import styles from "./ProjectsHeader.module.css"
import Pagination from "../Pagination/Pagination";
import { useNavigate } from "react-router-dom";

export default function ProjectsHeader () {

  const navigate = useNavigate()
  
  const [activeTab, setActiveTab] = useState(getPath());
  
  function getPath () {
    const projectsTab = window.location.pathname?.split('/')?.at(0);
    switch (projectsTab) {
      case 'projects': case 'inProgress': case 'completed':
        return projectsTab
      default:
        return 'projects'
    }
  }
    
  const downArrow =   <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 3.5L5 7.5L9 3.5" stroke="#323541" stroke-opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>


    return (
        <div className={styles.projectsHeader}>
          <div className={styles.topPart}>
            <div className={styles.titleBlock}>
              <h1 className={styles.title}>Все проекты</h1>
              <h2 className={styles.subTitle}>{'524 проекта'}</h2> 
            </div>
            <nav className={styles.navPart}>
              <div  className={styles.navEl}>
                <label>
                  <input type="checkbox" />
                  Наиболее подходящие
                </label>
              </div>
              <div  className={styles.navEl}>
                Недавние {downArrow}
              </div>
              <div  className={styles.navEl}>|</div>
              <div  className={styles.navEl}><Pagination/></div>
            </nav>
          </div>

          <ul className={styles.bottomPart}>
            <li 
              className={`${styles.tab} ${activeTab === 'projects' ? styles.selected : ''}`}
              onClick={()=>{setActiveTab('projects'); navigate('/')}}
            >
              Доступные для отклика
            </li>
            <li className={styles.gap}></li>
            <li 
              className={`${styles.tab} ${activeTab === 'inProgress' ? styles.selected : ''}`}
              onClick={()=>{setActiveTab('inProgress'); navigate('/inProgress')}}
            >
              В работе
            </li>
            <li className={styles.gap}></li>
            <li 
              className={`${styles.tab} ${activeTab === 'completed' ? styles.selected : ''}`}
              onClick={()=>{{setActiveTab('completed'); navigate('/completed')}}}
            >
              Завершённые
            </li>
            <li className={styles.sepLine}></li>
          </ul>
        </div>
    );
};
