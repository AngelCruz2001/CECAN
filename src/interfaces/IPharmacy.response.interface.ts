
export interface IPharmacyDataResponse {
  data: Data;
  ok: boolean;
}

export interface Data {
  inventory: Inventory[];
}

export interface Inventory {
  medicine: Medicine;
  stocks: Stock[];
  pieces_left_by_semaforization_color: PiecesLeftBySemaforizationColor;
  total_pieces: number;
  total_pieces_left: number;
}

export interface Medicine {
  key: string;
  name: string;
  deleted_at: null;
}

export interface PiecesLeftBySemaforizationColor {
  ambar: number;
}

export interface Stock {
  id: string;
  lot_number: string;
  pieces: number;
  pieces_used: number;
  pieces_left: number;
  expires_at: string;
  semaforization_color: string;
}
