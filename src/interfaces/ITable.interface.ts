import { IAlmacen, IAlmacenStore } from "./IAlmacen.interface";
import { IHistorial, IPrescriptionHistory } from "./IHistorial.interface";
import { IFixedAsset } from "./IFixedAssest.interface";
import { IDepartment, Department } from "./IDepartments.interface";
import {
  IMedicineStock,
  IMedicine,
  IMedicineCatalog,
} from "./IMedicineStock.interface";
import { User } from "./IUser.interface";

export interface ITable extends IOnClick {
  headers: ITHeaders[];
  rows:
    | User[]
    | IMedicine[]
    | IMedicineCatalog[]
    | IPrescriptionHistory[]
    | IAlmacen[]
    | IAlmacenStore[]
    | IFixedAsset[]
    | Department[]
    | IMedicineStock[]
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
    | keyof Department
    | keyof User
    | HeadersButtons
    | keyof User;
  label: string;
}

export interface IOnClick {
  onClick?: any;
  onClick2?: any;
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
