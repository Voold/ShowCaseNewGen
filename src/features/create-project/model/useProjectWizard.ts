import { useForm } from '@tanstack/react-form';
import z from 'zod';
import type { CreateProjectDto } from '@/entities/project/model/types';

// Схема для валидации отдельной роли проекта
export const createProjectRoleSchema = z.object({
  roleTypeId: z.string().min(1, "Выберите роль"),
  placesCount: z.number().min(1, "Максимум мест должен быть не менее 1"),
  minPlacesCount: z.number().min(1, "Минимум мест должен быть не менее 1"),
  meta: z.object({
    name: z.string().min(2, "Минимум 2 символа"),
    description: z.string().optional().or(z.literal('')),
  }),
  skills: z.array(z.any()).default([]),
}).refine((data) => data.minPlacesCount <= data.placesCount, {
  message: "Минимум мест не может быть больше максимума мест",
  path: ["minPlacesCount"],
});

// Базовая схема проекта, общая для всех типов
export const baseProjectSchema = z.object({
  ownerId: z.number().min(1, "ID владельца обязателен"),
  partnerId: z.string().min(1, "Выберите партнера"),
  checkpoints: z.string().min(1, "Выберите чекпоинты"),
  meta: z.object({
    title: z.string().min(5, "Минимум 5 символов"),
    description: z.string().min(10, "Минимум 10 символов").max(500, "Максимум 500 символов"),
  }),
  roles: z.array(createProjectRoleSchema).min(1, "Добавьте хотя бы одну роль"),
  tagIds: z.array(z.string()).min(1, "Выберите хотя бы один тег"),
});

// Разветвленная схема по типу проекта (дискриминантное объединение)
export const createProjectSchema = z.discriminatedUnion("type", [
  baseProjectSchema.extend({
    type: z.literal("Study"),
    prdMeta: z.object({
      prerequisites: z.string().min(10, "Минимум 10 символов для предпосылок"),
      projectGoal: z.string().min(10, "Минимум 10 символов для цели"),
      keyFunctionality: z.array(z.string()).min(1, "Добавьте хотя бы одну фичу"),
    }),
  }),
  baseProjectSchema.extend({
    type: z.literal("Case"),
    prdMeta: z.record(z.string(), z.any()).default({}),
  }),
  baseProjectSchema.extend({
    type: z.literal("Real"),
    prdMeta: z.record(z.string(), z.any()).default({}),
  }),
]);

interface UseProjectWizardProps {
  onSubmit: (values: CreateProjectDto) => void | Promise<void>;
  defaultValues?: Partial<CreateProjectDto>;
}

export const useProjectWizard = ({ onSubmit, defaultValues }: UseProjectWizardProps) => {
  const form = useForm({
    defaultValues: {
      type: 'Study',
      ownerId: 1,
      partnerId: '',
      checkpoints: '',
      meta: {
        title: '',
        description: '',
      },
      roles: [],
      tagIds: [],
      prdMeta: {
        prerequisites: '',
        projectGoal: '',
        keyFunctionality: [],
      },
      ...defaultValues,
    } as CreateProjectDto,
    onSubmit: async ({ value }) => {
      const result = createProjectSchema.safeParse(value);
      if (!result.success) {
        throw new Error("Форма содержит ошибки валидации");
      }
      await onSubmit(value);
    },
    validators: {
      onChange: ({ value }) => {
        const result = createProjectSchema.safeParse(value);
        if (!result.success) {
          // Возвращаем общую ошибку формы
          return {
            form: "Некоторые поля заполнены некорректно",
          };
        }
        return {};
      },
    },
  });

  return form;
};