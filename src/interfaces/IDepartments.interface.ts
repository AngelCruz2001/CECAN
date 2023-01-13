export interface IDepartments {
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
  floor_number: FloorNumber;
  created_at: string;
  updated_at: string;
  deleted_at: null;
  resposible_user_id: string | null;
}

export enum FloorNumber {
  PlantaBaja = "PLANTA BAJA",
}




export interface IDepartment {
  data: {
    department: Department;
  };
  ok: boolean;
  page: number;
}

