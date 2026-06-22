import { useState } from 'react';
import type { CreateProjectFormValues, StepErrors } from '@/features/create-project/model/useProjectWizard';
import type { ReactFormExtendedApi } from '@tanstack/react-form';

/**
 * @tanstack/react-form с Standard Schema (Zod) кладёт в field.state.meta.errors
 * сырые ZodIssue-объекты, а не строки. Хелпер безопасно достаёт текст.
 */
function getErrorMessage(error: unknown): string {
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: ReactFormExtendedApi<CreateProjectFormValues, any, any, any, any, any, any, any, any, any, any, any>;
  stepErrors: StepErrors;
  isPending: boolean;
  onSubmit: () => void;
  onDeleteDraft: () => void;
}

export function ProjectInfoStep({ form, stepErrors, isPending, onSubmit, onDeleteDraft }: ProjectInfoStepProps) {
  const [activeTab, setActiveTab] = useState<InfoTab>('main');

  return (
    <div>
      {/* Таб-навигация */}
      <nav>
        {TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Содержимое таба */}
      <div>
        {activeTab === 'main' && <MainInfoTab form={form} stepErrors={stepErrors} />}
        {activeTab === 'prd' && <PrdTab form={form} stepErrors={stepErrors} />}
        {activeTab === 'roles' && <RolesTab form={form} stepErrors={stepErrors} />}
      </div>

      {/* Нижние кнопки */}
      <div>
        <button
          type="button"
          onClick={onDeleteDraft}
        >
          Удалить черновик
        </button>

        <button
          type="button"
          onClick={onSubmit}
          disabled={isPending}
        >
          {isPending ? 'Отправка...' : 'Отправить проект'}
        </button>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────
// Таб 1: Основная информация
// ──────────────────────────────────────────────
interface TabProps {
  form: ReactFormExtendedApi<CreateProjectFormValues, never, never, never, never, never, never, never, never, never, never, never>;
  stepErrors: StepErrors;
}

function MainInfoTab({ form, stepErrors }: TabProps) {
  return (
    <div>
      <h3>Заполните основную информацию</h3>

      {/* Название */}
      <form.Field name="meta.title">
        {(field) => (
          <div>
            <label>Название проекта</label>
            <input
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
              placeholder="Например: FinTrack — учёт финансов"
            />
            {(field.state.meta.errors.length > 0 || stepErrors['meta.title']) && (
              <span>
                {getErrorMessage(field.state.meta.errors[0]) || stepErrors['meta.title']?.[0]}
              </span>
            )}
          </div>
        )}
      </form.Field>

      {/* Описание */}
      <form.Field name="meta.description">
        {(field) => (
          <div>
            <label>Описание</label>
            <textarea
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
              rows={4}
              placeholder="Кратко опишите суть проекта..."
            />
            <span>{field.state.value.length}/500</span>
            {(field.state.meta.errors.length > 0 || stepErrors['meta.description']) && (
              <span>
                {getErrorMessage(field.state.meta.errors[0]) || stepErrors['meta.description']?.[0]}
              </span>
            )}
          </div>
        )}
      </form.Field>

      {/* Теги */}
      <form.Field name="tagIds">
        {(field) => (
          <div>
            <label>Теги (через запятую)</label>
            <input
              value={field.state.value.join(', ')}
              onChange={(e) =>
                field.handleChange(
                  e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                )
              }
              onBlur={field.handleBlur}
              placeholder="web, mobile, ml"
            />
            {(field.state.meta.errors.length > 0 || stepErrors['tagIds']) && (
              <span>
                {getErrorMessage(field.state.meta.errors[0]) || stepErrors['tagIds']?.[0]}
              </span>
            )}
          </div>
        )}
      </form.Field>

      {/* Партнёр */}
      <form.Field name="partnerId">
        {(field) => (
          <div>
            <label>Заказчик (Partner ID)</label>
            <input
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
              placeholder="rUw2qyQh"
            />
            {(field.state.meta.errors.length > 0 || stepErrors['partnerId']) && (
              <span>
                {getErrorMessage(field.state.meta.errors[0]) || stepErrors['partnerId']?.[0]}
              </span>
            )}
          </div>
        )}
      </form.Field>
    </div>
  );
}

// ──────────────────────────────────────────────
// Таб 2: Требования к продукту (PRD)
// ──────────────────────────────────────────────
function PrdTab({ form, stepErrors }: TabProps) {
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

function StudyPrdFields({ form, stepErrors }: TabProps) {
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

function CasePrdFields({ form, stepErrors }: TabProps) {
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

function RealPrdFields({ form, stepErrors }: TabProps) {
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
function RolesTab({ form, stepErrors }: TabProps) {
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
