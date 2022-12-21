export interface IMedicineStock {
  key: string;
  id: string;
  lot_number: string;
  name: string;
  expires_at: string;
  pieces: number;
}

export interface IMedicine {
  key: string;
  name: string;
  quantity: number;
}

export interface IMedicineCatalog {
  key: string;
  name: string;
}