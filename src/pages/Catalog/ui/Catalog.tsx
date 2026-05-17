import { Outlet } from 'react-router-dom';
import { Header } from '@/widgets/header';
import { Filter } from '@/features/filter';
import { SearchField } from '@/shared/ui';
import styles from './Catalog.module.css';

export default function Catalog() {
  return (
    <div className={styles.wrap}>
      <Header />
      <main className={styles.mainContent}>
        <aside className={styles.filterPart}>
          <SearchField />
          <Filter />
        </aside>
        <section className={styles.projectsPart}>
          <Outlet />
        </section>
      </main>
    </div>
  );
}