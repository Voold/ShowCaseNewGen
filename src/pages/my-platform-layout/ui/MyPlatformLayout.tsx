import styles from './MyPlatformLayout.module.css';
import { SwitchMyPlatform } from '@/features/switch-my-platform';
import { Outlet } from "react-router-dom";

export const MyPlatformLayout = () => {
    return (
        <div className={styles.wrap}>
            <SwitchMyPlatform />
            <Outlet />
        </div>
    );
}