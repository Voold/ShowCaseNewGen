import { api, ENDPOINTS } from '@/shared'
import type { Competence } from '../model/types'

export const getCompetencies = async (): Promise<Competence[]> => {
  const { data } = await api.get<Competence[]>(ENDPOINTS.ROLE_TYPES)
  return data
}
