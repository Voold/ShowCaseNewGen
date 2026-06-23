import { useState } from 'react';
import type { CreateProjectFormValues, StepErrors } from '@/features/create-project/model/useProjectWizard';
import type { ReactFormExtendedApi } from '@tanstack/react-form';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CreateProjectForm = ReactFormExtendedApi<CreateProjectFormValues, any, any, any, any, any, any, any, any, any, any, any>;

import styles from './ProjectInfoStep.module.css'
import clsx from "clsx";
import { MainInfoTab } from './tabs/MainInfoTab';
import { PrdTab } from './tabs/PrdTab';
import { RolesTab } from './tabs/RolesTab';
import { DatesTab } from './tabs/DatesTab';
import { AllTab } from './tabs/AllTab';
import { useStore } from '@tanstack/react-form';

// Три таба второй страницы
type InfoTab = 'main' | 'prd' | 'roles' | 'dates' | 'all';

const TABS: { key: InfoTab; label: string }[] = [
  { key: 'main', label: 'Основная информация' },
  { key: 'prd', label: 'Требования к продукту' },
  { key: 'roles', label: 'Команда и компетенции' },
  { key: 'dates', label: 'Дата и ресурсы' },
  { key: 'all', label: 'Разделы сплошным списком' },
];

interface ProjectInfoStepProps {
  form: CreateProjectForm;
  stepErrors: StepErrors;
  isPending: boolean;
  onSubmit: () => void;
  onDeleteDraft: () => void;
  /** { value: ID, verbose: отображаемое название } */
  partners: { value: string; verbose: string }[];
}

export function ProjectInfoStep({ form, stepErrors, isPending, onSubmit, onDeleteDraft, partners }: ProjectInfoStepProps) {
  const [activeTab, setActiveTab] = useState<InfoTab>('main');
  const fieldMeta = useStore(form.store, (state) => state.fieldMeta);

  const hasTabErrors = (tabKey: InfoTab): boolean => {
    // Собираем все ошибки: из stepErrors (пришедшие из локальной валидации)
    // и из текущих нативных ошибок полей TanStack Form
    const allErrors: Record<string, unknown[]> = { ...stepErrors };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Object.keys(fieldMeta).forEach((key) => {
      const meta = fieldMeta[key as keyof typeof fieldMeta];
      if (meta?.errors?.length) {
        allErrors[key] = meta.errors as unknown[];
      }
    });

    const errorKeys = Object.keys(allErrors).filter((key) => allErrors[key]?.length > 0);

    if (tabKey === 'main') {
      return errorKeys.some((k) =>
        k.startsWith('meta.') ||
        k === 'primaryTag' ||
        k === 'tags' ||
        k === 'partnerId'
      );
    }
    if (tabKey === 'prd') {
      return errorKeys.some((k) => k.startsWith('prdMeta'));
    }
    if (tabKey === 'roles') {
      return errorKeys.some((k) => k.startsWith('roles') || k === 'checkpoints');
    }
    return false;
  };

  return (
    <section className={clsx(styles.root)}>
      <nav className={styles.nav}>
        {TABS.map((tab) => {
          const hasError = hasTabErrors(tab.key);
          return (
            <button
              className={clsx(
                styles.navItem,
                activeTab === tab.key && styles.active,
                hasError && styles.navItemError
              )}
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
              {hasError && <span className={styles.errorDot} />}
            </button>
          );
        })}
      </nav>


      <div className={styles.main}>
        <div>
          {activeTab === 'main' && <MainInfoTab form={form} stepErrors={stepErrors} partners={partners} />}
          {activeTab === 'prd' && <PrdTab form={form} stepErrors={stepErrors} />}
          {/*{activeTab === 'roles' && <RolesTab form={form} stepErrors={stepErrors} />}*/}
          {activeTab === 'roles' && <RolesTab/>}
          {activeTab === 'dates' && <DatesTab/>}
          {activeTab === 'all' && <AllTab/>}
        </div>

        {/* Нижние кнопки */}
        <div className={styles.buttonBlock}>
          <button
            type="button"
            onClick={onDeleteDraft}
            className={styles.cancelButton}
          >
            Удалить черновик
          </button>

          <button
            type="button"
            onClick={onSubmit}
            disabled={isPending}
            className={clsx(styles.saveButton, isPending ? styles.disable : '')}
          >
            {isPending ? 'Отправка...' : 'Отправить проект'}
          </button>
        </div>
      </div>


    </section>
  );
}

