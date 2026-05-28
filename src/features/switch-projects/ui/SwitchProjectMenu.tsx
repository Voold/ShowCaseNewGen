import { RouterTabs, type TabItem } from '@/shared/ui';

const PROJECT_TABS: TabItem[] = [
    { label: 'Набор', to: '/catalog/recruiting' },
    { label: 'В работе', to: '/catalog/in-work' },
    { label: 'Все проекты', to: '/catalog/all-projects' },
];

export const SwitchProjectMenu = () => {
    return <RouterTabs items={PROJECT_TABS} />;
};