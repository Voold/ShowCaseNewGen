import { NavLink } from 'react-router-dom';
import styles from './RouterTabs.module.css';

export interface TabItem {
  label: string;
  to: string;
}

interface RouterTabsProps {
  items: TabItem[];
}

export function RouterTabs({ items }: RouterTabsProps) {
  return (
    <nav className={styles.navMenu}>
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `${styles.button} ${isActive ? styles.active : ''}`
          }
          end
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
