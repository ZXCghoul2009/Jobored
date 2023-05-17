export interface ILoginRequest {
  login: string
  password: string
  client_id: number
  client_secret: string
  hr: string
}

export interface ILoginResponse {
  access_token: string,
  refresh_token: string,
  ttl: number,
  expires_in: number,
  token_type: string
}

export interface IRefreshTokens {
  refresh_token: string,
  client_id: string,
  client_secret: string
}
