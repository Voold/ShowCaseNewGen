import { useState, useRef, useEffect } from 'react'
import styles from './SwitchProjectMenu.module.css'

export const SwitchProjectMenu = () => {
    type ProjectsTab = 'recruiting' | 'inWork' | 'allProjects'

    const [active, setActive] = useState<ProjectsTab>('allProjects')
    const [selectorStyle, setSelectorStyle] = useState({ left: 0, width: 0 })

    const refs = {
        recruiting: useRef<HTMLDivElement>(null),
        inWork: useRef<HTMLDivElement>(null),
        allProjects: useRef<HTMLDivElement>(null),
    }

    useEffect(() => {
        const el = refs[active].current
        if (el) {
            setSelectorStyle({ left: el.offsetLeft, width: el.offsetWidth })
        }
    }, [active])

    return (
        <nav className={styles.navMenu}>
            <div
                className={styles.selector}
                style={{ left: selectorStyle.left, width: selectorStyle.width }}
            />
            <div
                ref={refs.recruiting}
                className={`${styles.button} ${active === 'recruiting' ? styles.active : ''}`}
                onClick={() => setActive('recruiting')}
            >
                Набор
            </div>
            <div
                ref={refs.inWork}
                className={`${styles.button} ${active === 'inWork' ? styles.active : ''}`}
                onClick={() => setActive('inWork')}
            >
                В работе
            </div>
            <div
                ref={refs.allProjects}
                className={`${styles.button} ${active === 'allProjects' ? styles.active : ''}`}
                onClick={() => setActive('allProjects')}
            >
                Все проекты
            </div>
        </nav>
    )
}