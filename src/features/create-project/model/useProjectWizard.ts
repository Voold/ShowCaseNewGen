import { useForm } from '@tanstack/react-form';
import { z } from 'zod';
import type { CreateProjectDto } from '@/entities/project/model/types';

export const createProjectRoleSchema = z.object({
  roleTypeId: z.string().min(1, 'Выберите роль'),
  placesCount: z.number().min(1, 'Максимум мест должен быть не менее 1'),
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
  tagIds: z.array(z.string()).min(1, 'Выберите хотя бы один тег'),
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

interface UseProjectWizardProps {
  onSubmit: (values: CreateProjectDto) => void | Promise<void>;
  defaultValues?: Partial<CreateProjectFormValues>;
}

const STUDY_DEFAULTS: CreateProjectFormValues = {
  type: 'Study',
  ownerId: 0,
  partnerId: '',
  checkpoints: '',
  meta: { title: '', description: '' },
  roles: [],
  tagIds: [],
  prdMeta: { prerequisites: '', projectGoal: '', keyFunctionality: [] },
};

export const useProjectWizard = ({ onSubmit, defaultValues }: UseProjectWizardProps) => {
  const form = useForm({
    validators: {
      onSubmit: createProjectSchema,
    },
    defaultValues: {
      ...STUDY_DEFAULTS,
      ...defaultValues,
    } as CreateProjectFormValues,

    onSubmit: async ({ value }) => {
      await onSubmit(value as CreateProjectDto);
    },
  });

  return form;
};