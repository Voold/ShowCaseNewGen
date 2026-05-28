import { Header } from '@/widgets/header'
import styles from './MainLayout.module.css'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <main className={styles.mainLayout}>
      <Header/>
      <Outlet/>
    </main>
  )
}