import { z } from 'zod';
export const customZodValidator = () => {
  return {
    validate(value: unknown, schema: z.ZodType) {
      const result = schema.safeParse(value);

      if (!result.success) {
        return result.error.issues[0].message;
      }

      return undefined;
    },

    async validateAsync(value: unknown, schema: z.ZodType) {
      const result = await schema.safeParseAsync(value);

      if (!result.success) {
        return result.error.issues[0].message;
      }

      return undefined;
    },
  };
};