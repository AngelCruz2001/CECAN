export interface IAddMedicineResponse {
  data: Data;
  ok: boolean;
}

export interface Data {
  medicine: Medicine;
}

export interface Medicine {
  key: string;
  name: string;
  created_at: string;
  updated_at: string;
  deleted_at: null;
}
