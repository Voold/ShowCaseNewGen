import { useForm } from '@tanstack/react-form';
// import { zodValidator } from '@tanstack/zod-form-adapter';
import { z } from 'zod';
import type { CreateProjectDto } from '@/entities/project/model/types';
import { useState } from 'react';

export const createProjectRoleSchema = z.object({
  roleTypeId: z.string().min(1, 'Выберите роль'),
  placesCount: z.number().min(1, 'Минимум мест должен быть не менее 1'),
  minPlacesCount: z.number().min(1, 'Минимум мест должен быть не менее 1'),
  meta: z.object({
    name: z.string().min(2, 'Минимум 2 символа'),
    description: z.string(),
  }),
  skills: z.array(z.any()),
}).refine((data) => data.minPlacesCount <= data.placesCount, {
  message: 'Минимум мест не может быть больше максимума мест',
  path: ['minPlacesCount'],
});

export const baseProjectSchema = z.object({
  ownerId: z.number().min(1, 'ID владельца обязателен'),
  partnerId: z.string().min(1, 'Выберите партнера'),
  checkpoints: z.string().min(1, 'Выберите чекпоинты'),
  meta: z.object({
    title: z.string().min(5, 'Минимум 5 символов'),
    description: z.string().min(100, 'Минимум 100 символов').max(500, 'Максимум 500 символов'),
  }),
  roles: z.array(createProjectRoleSchema).min(1, 'Добавьте хотя бы одну роль'),
  primaryTag: z.string().min(1, 'Выберите основной тег'),
  tags: z.array(z.string()).min(1, 'Выберите хотя бы один тег'),
});

const audienceSegmentSchema = z.object({
  title: z.string().max(70, 'Максимум 70 символов в названии аудитории'),
  description: z.string().min(50, 'Минимум 50 символов').max(500, 'Максимум 500 символов'),
  minAge: z.number().min(1, 'Минимальный возраст должен быть не менее 1 года'),
  maxAge: z.number().max(100, 'Максимальный возраст должен быть не более 100 лет'),
});

const studyPrdSchema = z.object({
  prerequisites: z.string().min(1, 'Укажите актуальность'),
  projectGoal: z.string().min(1, 'Цель проекта обязательна'),
  keyFunctionality: z
    .array(z.string().min(30, 'Минимум 30 символов').max(300, 'Максимум 300 символов'))
    .min(1, 'Добавьте минимум одну функцию'),
});

const casePrdSchema = z.object({
  prerequisites: z.string().min(1, 'Укажите актуальность'),
  audience: z.array(audienceSegmentSchema).min(1, 'Укажите хотя бы один сегмент аудитории'),
  projectGoal: z.string().min(100, 'Минимум 100 символов').max(500, 'Максимум 500 символов'),
  functional: z
    .array(z.string().min(50, 'Минимум 50 символов').max(600, 'Максимум 600 символов'))
    .min(1, 'Функциональные требования обязательны'),
  problemStatement: z.string().min(100, 'Минимум 100 символов').max(1500, 'Максимум 1500 символов'),
});

const realPrdSchema = z.object({
  productVision: z.string().min(100, 'Минимум 100 символов').max(500, 'Максимум 500 символов'),
  audience: z.array(audienceSegmentSchema).min(1, 'Укажите хотя бы один сегмент аудитории'),
  projectGoal: z.string().min(100, 'Минимум 100 символов').max(500, 'Максимум 500 символов'),
  businessGoal: z.string().min(100, 'Минимум 100 символов').max(500, 'Максимум 500 символов'),
  functional: z
    .array(z.string().min(50, 'Минимум 50 символов').max(600, 'Максимум 600 символов'))
    .min(1, 'Функциональные требования обязательны'),
  nonFunctional: z
    .array(z.string().min(50, 'Минимум 50 символов').max(600, 'Максимум 600 символов'))
    .min(1, 'Нефункциональные требования обязательны'),
  businessMetrics: z
    .array(z.string().min(50, 'Минимум 50 символов').max(200, 'Максимум 200 символов'))
    .min(1, 'Минимум одна бизнес-метрика обязательна'),
  projectPlan: z.array(z.string()),
});

export const createProjectSchema = z.discriminatedUnion('type', [
  z.object({ type: z.literal('Study'), prdMeta: studyPrdSchema }).merge(baseProjectSchema),
  z.object({ type: z.literal('Case'), prdMeta: casePrdSchema }).merge(baseProjectSchema),
  z.object({ type: z.literal('Real'), prdMeta: realPrdSchema }).merge(baseProjectSchema),
]);

export type CreateProjectFormValues = z.infer<typeof createProjectSchema>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CreateProjectForm = import('@tanstack/react-form').ReactFormExtendedApi<CreateProjectFormValues, any, any, any, any, any, any, any, any, any, any, any>;


// ---------------------------------------------------------------------------
// Схемы валидации по шагам — только поля текущего шага
// ---------------------------------------------------------------------------

// Шаг 1: основная инфо (название, описание, теги, партнёр)
const step1Schema = z.object({
  meta: baseProjectSchema.shape.meta,
  primaryTag: baseProjectSchema.shape.primaryTag,
  tags: baseProjectSchema.shape.tags,
  partnerId: baseProjectSchema.shape.partnerId,
});

// Шаг 2: роли и чекпоинты
const step2Schema = z.object({
  roles: baseProjectSchema.shape.roles,
  checkpoints: baseProjectSchema.shape.checkpoints,
});

// Шаг 3: PRD (зависит от type)
const step3Schema = z.object({
  prdMeta: z.union([studyPrdSchema, casePrdSchema, realPrdSchema]),
});

const STEP_SCHEMAS: Record<number, z.ZodTypeAny> = {
  1: step1Schema,
  2: step2Schema,
  3: step3Schema,
};

const TOTAL_STEPS = 4;

/** Плоский словарь ошибок: путь поля -> список сообщений */
export type StepErrors = Record<string, string[]>;

interface UseProjectWizardProps {
  onSubmit: (values: CreateProjectDto) => void | Promise<void>;
  defaultValues?: Partial<CreateProjectFormValues>;
}

const STUDY_DEFAULTS: CreateProjectFormValues = {
  type: 'Study',
  ownerId: 1,
  partnerId: '',
  checkpoints: '',
  meta: { title: '', description: '' },
  roles: [
    {
      roleTypeId: '',
      placesCount: 1,
      minPlacesCount: 1,
      meta: {
        name: '',
        description: '',
      },
      skills: [],
    },
  ],
  primaryTag: '',
  tags: [],
  prdMeta: { prerequisites: '', projectGoal: '', keyFunctionality: ['', '', ''] },
};

export const useProjectWizard = ({ onSubmit, defaultValues }: UseProjectWizardProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [stepErrors, setStepErrors] = useState<StepErrors>({});

  const form = useForm({
    // validatorAdapter: zodValidator(),
    validators: {
      onSubmit: createProjectSchema,
    },
    defaultValues: {
      ...STUDY_DEFAULTS,
      ...defaultValues,
    } as CreateProjectFormValues,

    onSubmit: async ({ value }) => {
      await onSubmit(value as unknown as CreateProjectDto);
    },
  });

  const validateCurrentStep = (): boolean => {
    const schema = STEP_SCHEMAS[currentStep];
    if (!schema) return true; // шаг без схемы — пропускаем

    const result = schema.safeParse(form.state.values);

    if (result.success) {
      setStepErrors({});
      return true;
    }

    const errors: StepErrors = {};
    for (const issue of result.error.issues) {
      const key = issue.path.join('.');
      if (!errors[key]) errors[key] = [];
      errors[key].push(issue.message);
    }
    setStepErrors(errors);
    return false;
  };

  const nextStep = () => {
    const isValid = validateCurrentStep();
    if (!isValid) return;
    setCurrentStep((s) => Math.min(s + 1, TOTAL_STEPS));
  };

  const prevStep = () => {
    setStepErrors({});
    setCurrentStep((s) => Math.max(s - 1, 1));
  };

  return { form, currentStep, stepErrors, nextStep, prevStep };
};