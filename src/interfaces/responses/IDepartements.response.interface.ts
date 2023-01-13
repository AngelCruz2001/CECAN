export interface IDepartmentsResponse {
  data: Data;
  ok: boolean;
  page: number;
}

export interface Data {
  departments: Department[];
}

export interface Department {
  id: string;
  name: string;
  floor_number: string;
  created_at: string;
  updated_at: string;
  deleted_at: null;
}
