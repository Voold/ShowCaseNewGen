import { ProjectProfile } from '@/shared/ui/small-widgets/project-profile/ProjectProfile';
import styles from './ProjectActivities.module.css';
import { YourTasksWidget } from '@/shared/ui/small-widgets/your-tasks/YourTasksWidget';
import { StagesWidget, YourPointsWidget } from '@/shared/ui';
import type { Activity } from '@/shared/ui';
import type { ClosingDiscipline } from '@/shared/ui';
import { ProjectsGrid } from '@/widgets/projects-grid';
import banner from '../../assets/banner.png'
import { useRef } from 'react';

export const ProjectActivities = () => {

    const data: {
        name?: string;
        role?: string;
        avatarSrc?: string;
        activities?: Activity[];
        closingDisciplines?: ClosingDiscipline[]
    } = {
        name: 'Paven',
        role: 'Разработчик',
        avatarSrc: '',

        activities: [
            {
                type: 'keyPoint',
                title: 'Постерная сессия 1',
                deadline: '29-05-2026',
                status: 'completed',
                number: 1,
                extra: 'tooltip'
            },
            {
                type: 'keyPoint',
                title: 'Постерная сессия 1',
                deadline: '2-06-2026',
                status: 'completed',
                number: 67,
                extra: 'tooltip'
            },
            {
                type: 'currentStage',
                title: 'Подготовка презентации',
                deadline: '5-06-2026',
                progressSteps: 5,
                progressCurrentStep: 2,
                unitType: 'points'
            },
            {
                type: 'currentStage',
                title: 'Подготовка презентации',
                deadline: '5-06-2026',
                progressSteps: 5,
                progressCurrentStep: 5,
                unitType: 'points'
            },
            {
                type: 'upcomingStage',
                title: 'Подготовка презентации',
                progressSteps: 1,
                progressCurrentStep: 0,
                unitType: 'points'
            },
            {
                type: 'keyPoint',
                title: 'Финальный отчёт',
                deadline: '30-06-2026',
                number: 2,
                extra: 'all'
            }
        ],
        closingDisciplines: [
            {
                title: 'УИРС-1',
                currentProgress: 18,
                maxProgress: 36
            },
            {
                title: 'УИРС-2',
                currentProgress: 0,
                maxProgress: 36
            }
        ]
    };

    const widgetRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const target = e.currentTarget;
        const scrollTop = target.scrollTop;

        if (widgetRef.current) {
            widgetRef.current.scrollTop = scrollTop;
        }

        if (contentRef.current) {
            contentRef.current.scrollTop = scrollTop;
        }
    }

    return (
        <main className={styles.mainContent}>
            <aside className={styles.profile}>
                <ProjectProfile name={data.name} role={data.role} avatarSrc={data.avatarSrc} />
            </aside>
            <h1 className={styles.welcomeMessage}>C возвращением, {data.name}!</h1>
            <aside className={styles.activities} ref={widgetRef} onScroll={handleScroll}>
                <YourTasksWidget data={data.activities} />
                <YourPointsWidget disciplines={data.closingDisciplines} tpuPoints={307} />
            </aside>
            <div className={styles.contentWrapper} ref={contentRef} onScroll={handleScroll}>
                <section className={styles.banner}>
                    <img src={banner} alt="Activities Banner" className={styles.bannerImage} />
                </section>
                <section className={styles.stagesWidget}>
                    <StagesWidget />
                </section>
                <section className={styles.projects}>
                    <h3 className={styles.projectstitle}>Проекты для вас</h3>
                    <ProjectsGrid />
                </section>
            </div>

        </main>
    );
}