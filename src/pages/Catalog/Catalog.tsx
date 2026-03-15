import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header.tsx';
import styles from "./Catalog.module.css"
import SearchField from '../../components/SearchField/SearchField.tsx';
import Filter from '../../components/Filter/Filter.tsx';


export default function Catalog () {
    return (
      <div className={styles.wrap}>
        <Header/>
        <main className={styles.mainContent}>

          <section className={styles.filterPart}>
            <SearchField/>
            <Filter/>
          </section>

          <section className={styles.projectsPart}>
            <Outlet />            
          </section>

        </main>
      </div>
    );
};
