export default interface TokenResponse {
  status: number;
  access_token: string;
  expires_in: number;
  id_token: string;
  token_type: string;
  refresh_token: string;
  refresh_expires_in: number;
  // expiry: string; -- change to not-before-policy which we don't use
  scope: string;
  session_state: string;
}
