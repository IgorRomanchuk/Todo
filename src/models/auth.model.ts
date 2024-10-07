export interface AuthModel {
  telegram_id: number | string;
  username: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
};