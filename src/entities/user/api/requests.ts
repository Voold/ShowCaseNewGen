import type { AuthStatusResponse, OAuthExchangeParams, UpdateProfileMetaRequest, RoleTypeDto } from './types'
import type { User, UserDto, SkillDto } from '../model/types'
import { mapUserDto } from '../lib/mappers'
import { api, ENDPOINTS } from '@/shared'

export async function login(params: OAuthExchangeParams): Promise<void> {
  await api.post(ENDPOINTS.LOGIN, params)
}

export async function getAuthStatus(): Promise<AuthStatusResponse> {
  const { data } = await api.get<AuthStatusResponse>(ENDPOINTS.STATUS)
  return data
}

export async function getMe(): Promise<User> {
  const { data } = await api.get<UserDto>(ENDPOINTS.ME)
  return mapUserDto(data)
}

export async function logout(): Promise<void> {
  await api.post(ENDPOINTS.LOGOUT)
}

export async function getUserById(uid: string): Promise<User> {
  const { data } = await api.get<UserDto>(`${ENDPOINTS.USER_BY_ID}/${uid}`)
  return mapUserDto(data)
}

export async function updateProfileMeta(payload: UpdateProfileMetaRequest): Promise<void> {
  await api.patch(ENDPOINTS.ME, payload)
}

export async function getSkills(): Promise<SkillDto[]> {
  const { data } = await api.get<SkillDto[]>('/skills')
  return data
}

export async function getRoleTypes(): Promise<RoleTypeDto[]> {
  const { data } = await api.get<RoleTypeDto[]>('/role-types')
  return data
}