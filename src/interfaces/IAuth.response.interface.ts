export interface IAuthResponse {
  data: IAuth;
  ok: boolean;
}

export interface IAuth {
  token: string;
  user: User;
}

export interface User {
  id: string;
  role_id: string;
  role: Role;
  name: string;
  surname: string;
  full_name: string;
  email: string;
  created_at: string;
  deleted_at: string;
}

export interface Role {
  id: string;
  name: string;
}

export interface IRenewResponse {
  data: {
    token: string;
  };
  ok: boolean;
}
