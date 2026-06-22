import type { CreateProjectForm, StepErrors } from '../../model/useProjectWizard';

interface PrdFieldProps {
  form: CreateProjectForm;
  stepErrors: StepErrors;
}

export function DatesTab({ form: _form, stepErrors: _stepErrors }: PrdFieldProps) {
  return (
    <div>
      <h3>Даты и ресурсы</h3>
      <p>Этот раздел находится в разработке.</p>
    </div>
  );
}
