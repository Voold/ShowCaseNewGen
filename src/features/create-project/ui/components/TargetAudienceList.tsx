import type { CreateProjectForm, StepErrors } from '../../model/useProjectWizard';
import { TextFieldForm } from '@/shared/ui/fields/text-field/TextField.tsx';
import styles from './TargetAudienceList.module.css';

interface TargetAudienceListProps {
  form: CreateProjectForm;
  stepErrors: StepErrors;
}

const getErrorMessage = (error: unknown): string | undefined => {
  if (typeof error === 'string') return error;
  if (error && typeof error === 'object' && 'message' in error) {
    return String(error.message);
  }
  return undefined;
};

export function TargetAudienceList({ form, stepErrors }: TargetAudienceListProps) {
  return (
    <form.Field name="prdMeta.audience" mode="array">
      {(field) => {
        const segments = field.state.value || [];

        const handleAdd = () => {
          field.pushValue({
            title: '',
            description: '',
            minAge: 18,
            maxAge: 35,
          });
        };


        return (
          <div className={styles.container}>
            {segments.map((_, index) => {
              const prefix = `prdMeta.audience[${index}]` as any;
              
              return (
                <div key={index} className={styles.segment}>
                  <div className={styles.headerRow}>
                    <form.Field name={`${prefix}.title` as any}>
                      {(subField) => (
                          <TextFieldForm
                            title="Тип"
                            placeholder="Например: Студенты"
                            value={subField.state.value}
                            onChange={(e) => subField.handleChange(e.target.value as any)}
                            maxLength={70}
                            validError={
                              subField.state.meta.errors.length > 0 
                                ? getErrorMessage(subField.state.meta.errors[0]) 
                                : stepErrors[`prdMeta.audience.${index}.title`]?.[0]
                            }
                          />
                      )}
                    </form.Field>

                    {/*{segments.length > 1 && (*/}
                    {/*  <button type="button" onClick={() => handleRemove(index)} className={styles.removeButton}>*/}
                    {/*    Удалить*/}
                    {/*  </button>*/}
                    {/*)}*/}
                  </div>

                  <div className={styles.ageRow}>
                    <span className={styles.ageLabel}>Возраст</span>
                    <span className={styles.ageLabel}>от</span>
                    <form.Field name={`${prefix}.minAge` as any}>
                      {(subField) => {
                        const hasError = subField.state.meta.errors.length > 0 || stepErrors[`prdMeta.audience.${index}.minAge`];
                        return (
                          <div>
                            <input
                              type="number"
                              className={`${styles.ageInput} ${hasError ? styles.ageError : ''}`}
                              value={subField.state.value}
                              onChange={(e) => subField.handleChange(Number(e.target.value) as any)}
                            />
                          </div>
                        );
                      }}
                    </form.Field>
                    
                    <span className={styles.ageLabel}>до</span>
                    <form.Field name={`${prefix}.maxAge` as any}>
                      {(subField) => {
                        const hasError = subField.state.meta.errors.length > 0 || stepErrors[`prdMeta.audience.${index}.maxAge`];
                        return (
                          <div>
                            <input
                              type="number"
                              className={`${styles.ageInput} ${hasError ? styles.ageError : ''}`}
                              value={subField.state.value}
                              onChange={(e) => subField.handleChange(Number(e.target.value) as any)}
                            />
                          </div>
                        );
                      }}
                    </form.Field>
                  </div>

                  <form.Field name={`${prefix}.description` as any}>
                    {(subField) => (
                      <TextFieldForm
                        title="Описание"
                        placeholder="Опишите целевую аудиторию подробнее..."
                        value={subField.state.value}
                        onChange={(e) => subField.handleChange(e.target.value as any)}
                        maxLength={500}
                        validError={
                          subField.state.meta.errors.length > 0 
                            ? getErrorMessage(subField.state.meta.errors[0]) 
                            : stepErrors[`prdMeta.audience.${index}.description`]?.[0]
                        }
                      />
                    )}
                  </form.Field>
                </div>
              );
            })}

            <button type="button" className={styles.addButton} onClick={handleAdd}>
              Добавить ЦА
            </button>
            
            {field.state.meta.errors.length > 0 && (
               <span className={styles.errorText}>{getErrorMessage(field.state.meta.errors[0])}</span>
            )}
            {stepErrors['prdMeta.audience'] && (
               <span className={styles.errorText}>{stepErrors['prdMeta.audience'][0]}</span>
            )}
          </div>
        );
      }}
    </form.Field>
  );
}
