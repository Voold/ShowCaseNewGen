import { RouterTabs, type TabItem } from '@/shared/ui';

const MY_PLATFORMS_TABS: TabItem[] = [
    { label: 'Проектная деятельность', to: '/my-platform/project-activities' },
    { label: 'Научная деятельность', to: '/my-platform/scientific-activities' },
    { label: 'Аналитика', to: '/my-platform/analytics' },
    { label: 'Управление проектами', to: '/my-platform/project-management' },
    { label: 'Управление рекламой', to: '/my-platform/ad-management' },
    { label: 'Мой профиль', to: '/my-platform/profile' },
    { label: 'Уведомления', to: '/my-platform/notifications' },
    { label: 'Магазин', to: '/my-platform/store' },
    { label: 'Настройки', to: '/my-platform/settings' },
];

export const SwitchMyPlatform = () => {
    return <RouterTabs items={MY_PLATFORMS_TABS} />;
}