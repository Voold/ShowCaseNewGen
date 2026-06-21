export interface OAuthExchangeParams {
  code: string;
  codeVerifier: string;
}

export interface AuthStatusResponse {
  userID: number;
}

export interface UpdateProfileMetaRequest {
  bio?: string;
  experience?: string;
  skillIds?: string[];
}