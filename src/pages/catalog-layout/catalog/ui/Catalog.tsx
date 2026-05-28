import styles from './Catalog.module.css'
import {SearchField} from "@/shared/ui";
import {Filter} from "@/features/filter";
import {ProjectsHeader} from "@/widgets/ProjectsHeader";
import {Outlet} from "react-router-dom";
import {useRef} from "react";

export const Catalog = () => {

  const filterRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const target = e.currentTarget;

    if (filterRef.current && target === projectsRef.current) {
      filterRef.current.scrollTop = target.scrollTop;
    }

    if (projectsRef.current && target === filterRef.current) {
      projectsRef.current.scrollTop = target.scrollTop;
    }
  };

  return (
      <main className={styles.mainContent}>
        <aside className={styles.searchPart}>
          <SearchField />
        </aside>
        <aside className={styles.filterPart} ref={filterRef as React.RefObject<HTMLDivElement>} onScroll={handleScroll}>
          <Filter />
        </aside>
        <section className={styles.projectHeader}>
          <ProjectsHeader />
        </section>
        <section className={styles.projectsPart} ref={projectsRef as React.RefObject<HTMLDivElement>} onScroll={handleScroll}>
          <Outlet />
        </section>
      </main>
  );
};