export interface IHistorial {
    prescriptions: IPrescriptionHistory[] | null;
}

export interface IPrescriptionHistory {
  folio: number;
  id: string;
  patient_name: string;
  observations: string;
  instructions: string;
  status: string;
}
