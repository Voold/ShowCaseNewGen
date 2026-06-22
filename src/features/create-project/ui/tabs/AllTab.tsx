import type { CreateProjectForm, StepErrors } from '../../model/useProjectWizard';

interface PrdFieldProps {
  form: CreateProjectForm;
  stepErrors: StepErrors;
}

export function AllTab({ form: _form, stepErrors: _stepErrors }: PrdFieldProps) {
  return (
    <div>
      <h3>Разделы сплошным списком</h3>
      <p>Этот раздел находится в разработке.</p>
    </div>
  );
}
