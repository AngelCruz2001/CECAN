import { IAlmacen } from "./IAlmacen.interface";
import { IHistorial, IPrescriptionHistory } from "./IHistorial.interface";
import {
  IMedicineStock,
  IMedicine,
  IMedicineCatalog,
} from "./IMedicineStock.interface";

export interface ITable extends IOnClick {
  headers: ITHeaders[];
  rows:
    | IMedicineStock[]
    | IMedicine[]
    | IMedicineCatalog[]
    | IPrescriptionHistory[]
    | IAlmacen[]
    | null;
  percentages: number[];
  textDisplay?: CanvasTextAlign[];
  elements: string[];
}

interface ITHeaders {
  id:
    | keyof IMedicineStock
    | keyof IMedicine
    | keyof IMedicineCatalog
    | keyof IPrescriptionHistory
  label: string;
}

export interface IOnClick {
  onClick?:
    | ((id: string | number) => void)
    | ((key: string, quantity: number) => void);
  onClick2?:
    | ((id: string | number) => void)
    | ((key: string, quantity: number) => void);
}
