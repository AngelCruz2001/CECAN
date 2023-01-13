export interface IUserResponse {
  data: Data;
  ok: boolean;
}

export interface Data {
  users: User[];
}

export interface User {
  id: string;
  role_id: string;
  name: string;
  surname: string;
  full_name: string;
  email: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}
