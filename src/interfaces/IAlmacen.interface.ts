export interface IAlmacen {
  folio: number;
  created_at: string;
  name: string;
  status: string;
}

export interface IAlmacenStore {
  key: string;
  genericName: string;
  presentation: string;
  quantity_per_unit: number;
}
