import { IAlmacen, IAlmacenStore } from "./IAlmacen.interface";
import { IHistorial, IPrescriptionHistory } from "./IHistorial.interface";
import { IFixedAsset } from './IFixedAssest.interface';
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
    | IAlmacenStore[]
    | IFixedAsset[]
    | null;
  percentages: number[];
  keyName?: "id" | "folio" | "key";
  textDisplay?: CanvasTextAlign[];
  elements: string[];
}

interface ITHeaders {
  id:
    | keyof IMedicineStock
    | keyof IMedicine
    | keyof IMedicineCatalog
    | keyof IPrescriptionHistory
    | keyof IAlmacenStore
    | keyof IFixedAsset
    | HeadersButtons;
  label: string;
}

export interface IOnClick {
  onClick?:
    | ((id: string) => void)
    | ((key: number) => void)
    | ((key: string, quantity: number) => void)
    | ((id: string, initialValue: number) => void);
  onClick2?: ((id: string) => void) | ((key: number, quantity: number) => void);
}

type HeadersButtons =
  | "remove"
  | "edit"
  | "add"
  | "delete"
  | "view"
  | "add"
  | "status"
  | "actions"
  | "details";
