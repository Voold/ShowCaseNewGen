export const queryKeys = {
  all: ['tags'],
  tag: (tagId: string) => [...queryKeys.all, 'tag', tagId] as const,
}