import { useState } from 'react';
import type { CreateProjectFormValues, StepErrors } from '@/features/create-project/model/useProjectWizard';
import type { ReactFormExtendedApi } from '@tanstack/react-form';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CreateProjectForm = ReactFormExtendedApi<CreateProjectFormValues, any, any, any, any, any, any, any, any, any, any, any>;

import { TextFieldForm } from "@/shared/ui/fields/text-field/TextField.tsx";
import styles from './ProjectInfoStep.module.css'
import clsx from "clsx";
import { RadioChip } from "@/shared/ui/fields/radio-chip/RadioChip.tsx";
import Cross from '@/shared/ui/icons/cross.svg?react'
import { DropDownList } from "@/shared/ui/fields/dropdown-list/DropDownList.tsx";

const PRIMARY_TAGS: { value: string; label: string }[] = [
  { value: 'web', label: 'Web' },
  { value: 'mobile', label: 'Мобильные' },
  { value: 'ml', label: 'ML / AI' },
  { value: 'gamedev', label: 'Gamedev' },
  { value: 'embedded', label: 'Embedded' },
];

const EXTRA_TAGS: { value: string; label: string }[] = [
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
  { value: 'fullstack', label: 'Fullstack' },
  { value: 'design', label: 'Design' },
  { value: 'devops', label: 'DevOps' },
  { value: 'qa', label: 'QA' },
  { value: 'data', label: 'Data' },
  { value: 'security', label: 'Security' },
  { value: 'blockchain', label: 'Blockchain' },
  { value: 'ar_vr', label: 'AR / VR' },
];

/**
 * @tanstack/react-form с Standard Schema (Zod) кладёт в field.state.meta.errors
 * сырые ZodIssue-объекты, а не строки. Хелпер безопасно достаёт текст.
 */
function getErrorMessage(error: unknown): string {
  if (!error) return '';
  if (typeof error === 'string') return error;
  if (error !== null && typeof error === 'object' && 'message' in error) {
    return String((error as { message: unknown }).message);
  }
  return String(error);
}

// Три таба второй страницы
type InfoTab = 'main' | 'prd' | 'roles';

const TABS: { key: InfoTab; label: string }[] = [
  { key: 'main', label: 'Основная информация' },
  { key: 'prd', label: 'Требования к продукту' },
  { key: 'roles', label: 'Изменяемая зона' },
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

  const hasTabErrors = (tabKey: InfoTab): boolean => {
    // Собираем все ошибки: из stepErrors (пришедшие из локальной валидации)
    // и из текущих нативных ошибок полей TanStack Form
    const allErrors: Record<string, unknown[]> = { ...stepErrors };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Object.keys(form.state.fieldMeta).forEach((key) => {
      const fieldMeta = form.state.fieldMeta[key as keyof typeof form.state.fieldMeta];
      if (fieldMeta?.errors?.length) {
        allErrors[key] = fieldMeta.errors as unknown[];
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
          {activeTab === 'roles' && <RolesTab form={form} stepErrors={stepErrors} />}
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

interface TabProps {
  form: CreateProjectForm;
  stepErrors: StepErrors;
  partners: { value: string; verbose: string }[];
}


function MainInfoTab({ form, stepErrors, partners }: TabProps) {
  return (
    <div className={clsx(styles.mainFieldContainer)}>
      <div className={styles.mainInfo}>
        <h5>
          Заполните основную информацию
        </h5>
        <p>
          После этого вы сможете создать проект и перейти к PRD
        </p>
      </div>

      {/* Название */}
      <form.Field name="meta.title">
        {(field) => (
          <TextFieldForm
            title={'Название проекта'}
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            placeholder={"Например: FinTrack — учёт финансов"}
            maxLength={500}
            validError={getErrorMessage(field.state.meta.errors[0]) || stepErrors['meta.title']?.[0]}
          />
        )}
      </form.Field>

      {/* Описание */}
      <form.Field name="meta.description">
        {(field) => (
          <TextFieldForm
            title={'Описание'}
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            placeholder={"Например: FinTrack — учёт финансов"}
            maxLength={500}
            validError={getErrorMessage(field.state.meta.errors[0]) || stepErrors['meta.title']?.[0]}
          />
        )}
      </form.Field>

      {/* Основной тег — RadioChip */}
      <form.Field name="primaryTag">
        {(field) => (
          <div className={styles.tagGroup}>
            <span className={styles.tagGroupLabel}>Основной тег</span>
            <div className={styles.chipRow}>
              {PRIMARY_TAGS.map((tag) => (
                <RadioChip
                  key={tag.value}
                  label={tag.label}
                  name="primaryTag"
                  value={tag.value}
                  checked={field.state.value === tag.value}
                  onChange={() => field.handleChange(tag.value)}
                />
              ))}
            </div>
            {(field.state.meta.errors.length > 0 || stepErrors['primaryTag']) && (
              <span className={styles.errorText}>
                {getErrorMessage(field.state.meta.errors[0]) || stepErrors['primaryTag']?.[0]}
              </span>
            )}
          </div>
        )}
      </form.Field>

      {/* Дополнительные теги — мульти-выбор плашками */}
      <form.Field name="tags">
        {(field) => (
          <div className={styles.tagGroup}>
            <span className={styles.tagGroupLabel}>Дополнительные теги</span>
            <div className={styles.tagBadgeRow}>
              {EXTRA_TAGS.map((tag) => {
                const isSelected = (field.state.value || []).includes(tag.value);
                return (
                  <button
                    key={tag.value}
                    type="button"
                    className={clsx(styles.tagBadge, isSelected && styles.tagBadgeActive)}
                    onClick={() => {
                      const current = field.state.value || [];
                      field.handleChange(
                        isSelected
                          ? current.filter((t) => t !== tag.value)
                          : [...current, tag.value],
                      );
                    }}
                  >
                    {tag.label}
                    {isSelected && <Cross className={styles.crossIcon} />}
                  </button>
                );
              })}
            </div>
            {(field.state.meta.errors.length > 0 || stepErrors['tags']) && (
              <span className={styles.errorText}>
                {getErrorMessage(field.state.meta.errors[0]) || stepErrors['tags']?.[0]}
              </span>
            )}
          </div>
        )}
      </form.Field>

      {/* Партнёр */}
      <form.Field name="partnerId">
        {(field) => {
          // DropDownList работает со строками; внутренне храним ID
          const selectedVerbose = partners.find((p) => p.value === field.state.value)?.verbose;
          return (
            <DropDownList
              label="Заказчик"
              options={partners.map((p) => p.verbose)}
              value={selectedVerbose}
              onChange={(verbose) => {
                const partner = partners.find((p) => p.verbose === verbose);
                field.handleChange(partner?.value ?? '');
              }}
              placeholder="Выберите заказчика"
              error={
                getErrorMessage(field.state.meta.errors[0]) ||
                stepErrors['partnerId']?.[0]
              }
            />
          );
        }}
      </form.Field>
    </div>
  );
}

// PrdTab и его дочерние компоненты не используют partners
type PrdFieldProps = Omit<TabProps, 'partners'>;

function PrdTab({ form, stepErrors }: PrdFieldProps) {
  const type = form.state.values.type;

  return (
    <div>
      <h3>
        Требования к продукту — {type === 'Study' ? 'Учебный' : type === 'Case' ? 'Кейс' : 'Реальный'}
      </h3>

      {type === 'Study' && <StudyPrdFields form={form} stepErrors={stepErrors} />}
      {type === 'Case' && <CasePrdFields form={form} stepErrors={stepErrors} />}
      {type === 'Real' && <RealPrdFields form={form} stepErrors={stepErrors} />}
    </div>
  );
}

function StudyPrdFields({ form, stepErrors }: PrdFieldProps) {
  return (
    <>
      <form.Field name="prdMeta.prerequisites">
        {(field) => (
          <div>
            <label>Актуальность / Предпосылки</label>
            <textarea
              value={field.state.value as string}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
              rows={3}
            />
            {(field.state.meta.errors.length > 0 || stepErrors['prdMeta.prerequisites']) && (
              <span>
                {getErrorMessage(field.state.meta.errors[0]) || stepErrors['prdMeta.prerequisites']?.[0]}
              </span>
            )}
          </div>
        )}
      </form.Field>

      <form.Field name="prdMeta.projectGoal">
        {(field) => (
          <div>
            <label>Цель проекта</label>
            <textarea
              value={field.state.value as string}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
              rows={3}
            />
            {(field.state.meta.errors.length > 0 || stepErrors['prdMeta.projectGoal']) && (
              <span>
                {getErrorMessage(field.state.meta.errors[0]) || stepErrors['prdMeta.projectGoal']?.[0]}
              </span>
            )}
          </div>
        )}
      </form.Field>

      <form.Field name="prdMeta.keyFunctionality">
        {(field) => (
          <div>
            <label>Ключевой функционал (через запятую)</label>
            <textarea
              value={(field.state.value as string[]).join(', ')}
              onChange={(e) =>
                field.handleChange(
                  e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                )
              }
              onBlur={field.handleBlur}
              rows={3}
              placeholder="Авторизация через SSO, Дашборд аналитики, ..."
            />
            {stepErrors['prdMeta.keyFunctionality'] && (
              <span>{stepErrors['prdMeta.keyFunctionality']?.[0]}</span>
            )}
          </div>
        )}
      </form.Field>
    </>
  );
}

function CasePrdFields({ form, stepErrors }: PrdFieldProps) {
  return (
    <>
      <form.Field name="prdMeta.prerequisites">
        {(field) => (
          <div>
            <label>Актуальность</label>
            <textarea value={field.state.value as string} onChange={(e) => field.handleChange(e.target.value)} onBlur={field.handleBlur} rows={3} />
            {stepErrors['prdMeta.prerequisites'] && <span>{stepErrors['prdMeta.prerequisites']?.[0]}</span>}
          </div>
        )}
      </form.Field>
      <form.Field name="prdMeta.projectGoal">
        {(field) => (
          <div>
            <label>Цель проекта</label>
            <textarea value={field.state.value as string} onChange={(e) => field.handleChange(e.target.value)} onBlur={field.handleBlur} rows={3} />
            {stepErrors['prdMeta.projectGoal'] && <span>{stepErrors['prdMeta.projectGoal']?.[0]}</span>}
          </div>
        )}
      </form.Field>
      <form.Field name="prdMeta.problemStatement">
        {(field) => (
          <div>
            <label>Постановка проблемы</label>
            <textarea value={field.state.value as string} onChange={(e) => field.handleChange(e.target.value)} onBlur={field.handleBlur} rows={4} />
            {stepErrors['prdMeta.problemStatement'] && <span>{stepErrors['prdMeta.problemStatement']?.[0]}</span>}
          </div>
        )}
      </form.Field>
    </>
  );
}

function RealPrdFields({ form, stepErrors }: PrdFieldProps) {
  return (
    <>
      <form.Field name="prdMeta.productVision">
        {(field) => (
          <div>
            <label>Видение продукта</label>
            <textarea value={field.state.value as string} onChange={(e) => field.handleChange(e.target.value)} onBlur={field.handleBlur} rows={3} />
            {stepErrors['prdMeta.productVision'] && <span>{stepErrors['prdMeta.productVision']?.[0]}</span>}
          </div>
        )}
      </form.Field>
      <form.Field name="prdMeta.projectGoal">
        {(field) => (
          <div>
            <label>Цель проекта</label>
            <textarea value={field.state.value as string} onChange={(e) => field.handleChange(e.target.value)} onBlur={field.handleBlur} rows={3} />
            {stepErrors['prdMeta.projectGoal'] && <span>{stepErrors['prdMeta.projectGoal']?.[0]}</span>}
          </div>
        )}
      </form.Field>
      <form.Field name="prdMeta.businessGoal">
        {(field) => (
          <div>
            <label>Бизнес-цель</label>
            <textarea value={field.state.value as string} onChange={(e) => field.handleChange(e.target.value)} onBlur={field.handleBlur} rows={3} />
            {stepErrors['prdMeta.businessGoal'] && <span>{stepErrors['prdMeta.businessGoal']?.[0]}</span>}
          </div>
        )}
      </form.Field>
    </>
  );
}

// ──────────────────────────────────────────────
// Таб 3: Изменяемая зона (роли, чекпоинты)
// ──────────────────────────────────────────────
function RolesTab({ form, stepErrors }: PrdFieldProps) {
  return (
    <div>
      <h3>Изменяемая зона</h3>

      {/* Чекпоинты */}
      <form.Field name="checkpoints">
        {(field) => (
          <div>
            <label>Чекпоинты (ID)</label>
            <input
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
              placeholder="Iz_FtszccHrjmwmI"
            />
            {(field.state.meta.errors.length > 0 || stepErrors['checkpoints']) && (
              <span>
                {getErrorMessage(field.state.meta.errors[0]) || stepErrors['checkpoints']?.[0]}
              </span>
            )}
          </div>
        )}
      </form.Field>

      {/* Роли — упрощённо: одна роль */}
      <div>
        <p>Роль 1</p>

        <form.Field name="roles[0].roleTypeId">
          {(field) => (
            <div>
              <label>Role Type ID</label>
              <input
                value={field.state.value ?? ''}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
              />
            </div>
          )}
        </form.Field>

        <div>
          <form.Field name="roles[0].minPlacesCount">
            {(field) => (
              <div>
                <label>Мин. мест</label>
                <input
                  type="number"
                  value={field.state.value ?? 1}
                  onChange={(e) => field.handleChange(Number(e.target.value))}
                  onBlur={field.handleBlur}
                />
              </div>
            )}
          </form.Field>
          <form.Field name="roles[0].placesCount">
            {(field) => (
              <div>
                <label>Макс. мест</label>
                <input
                  type="number"
                  value={field.state.value ?? 1}
                  onChange={(e) => field.handleChange(Number(e.target.value))}
                  onBlur={field.handleBlur}
                />
              </div>
            )}
          </form.Field>
        </div>

        <form.Field name="roles[0].meta.name">
          {(field) => (
            <div>
              <label>Название роли</label>
              <input
                value={field.state.value ?? ''}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
              />
            </div>
          )}
        </form.Field>
      </div>

      {stepErrors['roles'] && (
        <span>{stepErrors['roles']?.[0]}</span>
      )}
    </div>
  );
}
