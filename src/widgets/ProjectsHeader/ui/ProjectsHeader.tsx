import { useState, useRef, useEffect } from 'react';
import { Pagination } from '@/shared/ui';
import styles from './ProjectsHeader.module.css';
import { MagicToggle } from '@/shared/ui/magic-checkbox/MagicToggle';

const SORT_OPTIONS = [
  { key: 'popular', label: 'Популярные' },
  { key: 'recent', label: 'Недавние' },
  { key: 'lessResponses', label: 'Меньше откликов' },
  { key: 'moreResponses', label: 'Больше откликов' },
];

export function ProjectsHeader() {
  const [sortOpen, setSortOpen] = useState(false);
  const [sortKey, setSortKey] = useState('popular');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentSort = SORT_OPTIONS.find(o => o.key === sortKey);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSortOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const downArrow = (
    <svg
      width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"
      className={`${styles.arrow} ${sortOpen ? styles.arrowUp : ''}`}
    >
      <path d="M1 3.5L5 7.5L9 3.5" stroke="#323541" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <header className={styles.projectsHeader}>
      <div className={styles.topPart}>
        <div className={styles.titleBlock}>
          <h1 className={styles.title}>Набор на проекты</h1>
          <h2 className={styles.subTitle}>{'524 проекта'}</h2>
        </div>
        <nav className={styles.navPart}>
          <div className={styles.navEl}>
            <MagicToggle/>
            наиболее подходящие
          </div>
          <div className={styles.navEl} ref={dropdownRef}>
            <div className={styles.sortTrigger} onClick={() => setSortOpen(v => !v)}>
              {currentSort?.label} {downArrow}
            </div>
            {sortOpen && (
              <div className={styles.dropdown}>
                {SORT_OPTIONS.map(o => (
                  <div
                    key={o.key}
                    className={`${styles.dropdownItem} ${o.key === sortKey ? styles.dropdownItemActive : ''}`}
                    onClick={() => { setSortKey(o.key); setSortOpen(false); }}
                  >
                    {o.label}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className={styles.navEl}>|</div>
          <div className={styles.navEl}><Pagination /></div>
        </nav>
      </div>
    </header>
  );
}