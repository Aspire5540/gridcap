import { DataHrResponse } from "./HrResponse";

export interface UserInFoResponse {
  email: string;
  email_verified: boolean;
  family_name: string;
  given_name: string;
  name: string;
  preferred_username: string;
  sub: string;
  DataHrResponse: DataHrResponse
}
