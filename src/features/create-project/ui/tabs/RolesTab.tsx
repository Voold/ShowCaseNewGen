// import type { CreateProjectForm, StepErrors } from '../../model/useProjectWizard';
import styles from "./Tabs.module.css";

// interface PrdFieldProps {
//   form: CreateProjectForm;
//   stepErrors: StepErrors;
// }
//
// // Вспомогательная функция для получения текста ошибки
// const getErrorMessage = (error: unknown): string | undefined => {
//   if (typeof error === 'string') return error;
//   if (error && typeof error === 'object' && 'message' in error) {
//     return String(error.message);
//   }
//   return undefined;
// };

// export function RolesTab({ form, stepErrors }: PrdFieldProps) {
export function RolesTab() {
  return (
    <div>
      <div className={styles.mainInfo}>
        <h3>Команда и компетенции</h3>
        <p>
          Данный раздел находится в разработке
        </p>
      </div>

      {/*/!* Чекпоинты *!/*/}
      {/*<form.Field name="checkpoints">*/}
      {/*  {(field) => (*/}
      {/*    <div>*/}
      {/*      <label>Чекпоинты (ID)</label>*/}
      {/*      <input*/}
      {/*        value={field.state.value}*/}
      {/*        onChange={(e) => field.handleChange(e.target.value)}*/}
      {/*        onBlur={field.handleBlur}*/}
      {/*        placeholder="Iz_FtszccHrjmwmI"*/}
      {/*      />*/}
      {/*      {(field.state.meta.errors.length > 0 || stepErrors['checkpoints']) && (*/}
      {/*        <span>*/}
      {/*          {getErrorMessage(field.state.meta.errors[0]) || stepErrors['checkpoints']?.[0]}*/}
      {/*        </span>*/}
      {/*      )}*/}
      {/*    </div>*/}
      {/*  )}*/}
      {/*</form.Field>*/}

      {/*/!* Роли — упрощённо: одна роль *!/*/}
      {/*<div>*/}
      {/*  <p>Роль 1</p>*/}

      {/*  <form.Field name="roles[0].roleTypeId">*/}
      {/*    {(field) => (*/}
      {/*      <div>*/}
      {/*        <label>Role Type ID</label>*/}
      {/*        <input*/}
      {/*          value={field.state.value ?? ''}*/}
      {/*          onChange={(e) => field.handleChange(e.target.value)}*/}
      {/*          onBlur={field.handleBlur}*/}
      {/*        />*/}
      {/*      </div>*/}
      {/*    )}*/}
      {/*  </form.Field>*/}

      {/*  <div>*/}
      {/*    <form.Field name="roles[0].minPlacesCount">*/}
      {/*      {(field) => (*/}
      {/*        <div>*/}
      {/*          <label>Мин. мест</label>*/}
      {/*          <input*/}
      {/*            type="number"*/}
      {/*            value={field.state.value ?? 1}*/}
      {/*            onChange={(e) => field.handleChange(Number(e.target.value))}*/}
      {/*            onBlur={field.handleBlur}*/}
      {/*          />*/}
      {/*        </div>*/}
      {/*      )}*/}
      {/*    </form.Field>*/}
      {/*    <form.Field name="roles[0].placesCount">*/}
      {/*      {(field) => (*/}
      {/*        <div>*/}
      {/*          <label>Макс. мест</label>*/}
      {/*          <input*/}
      {/*            type="number"*/}
      {/*            value={field.state.value ?? 1}*/}
      {/*            onChange={(e) => field.handleChange(Number(e.target.value))}*/}
      {/*            onBlur={field.handleBlur}*/}
      {/*          />*/}
      {/*        </div>*/}
      {/*      )}*/}
      {/*    </form.Field>*/}
      {/*  </div>*/}

      {/*  <form.Field name="roles[0].meta.name">*/}
      {/*    {(field) => (*/}
      {/*      <div>*/}
      {/*        <label>Название роли</label>*/}
      {/*        <input*/}
      {/*          value={field.state.value ?? ''}*/}
      {/*          onChange={(e) => field.handleChange(e.target.value)}*/}
      {/*          onBlur={field.handleBlur}*/}
      {/*        />*/}
      {/*      </div>*/}
      {/*    )}*/}
      {/*  </form.Field>*/}
      {/*</div>*/}

      {/*{stepErrors['roles'] && (*/}
      {/*  <span>{stepErrors['roles']?.[0]}</span>*/}
      {/*)}*/}
    </div>
  );
}
