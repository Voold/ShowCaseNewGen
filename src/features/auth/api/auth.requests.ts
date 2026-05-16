import { axiosInstance } from '@/shared/api';
import type { AuthResponse, OAuthExchangeParams } from '../types';
import type { User } from '@/shared/types';
import { ENDPOINTS } from '@/shared/config';

class AuthRequests {

  public async login(params: OAuthExchangeParams): Promise<AuthResponse> {
    const { data } = await axiosInstance.post<AuthResponse>(ENDPOINTS.LOGIN, params);
    return data;
  }

  public async getMe(): Promise<User> {
    const { data } = await axiosInstance.get<User>(ENDPOINTS.ME);
    return data;
  }

  public async logout(): Promise<void> {
    await axiosInstance.post(ENDPOINTS.LOGOUT);
  }

  //ANCHOR - other feature 
  public async getUserById(uid: string): Promise<User> {
    const { data } = await axiosInstance.get<User>(`${ENDPOINTS.USER_BY_ID}${uid}`);
    return data;
  }
};

export const authRequests = new AuthRequests();