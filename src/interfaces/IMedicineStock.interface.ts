export interface IMedicineStock {
  key: string;
  lot_number: string;
  name: string;
  expires_at: string;
  pieces: string;
  edit: string;
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