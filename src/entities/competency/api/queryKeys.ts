export const queryKeys = {
	all: ['competencies'] as const,
	competence: (competencyId: string) => [...queryKeys.all, 'competence', competencyId] as const,
}