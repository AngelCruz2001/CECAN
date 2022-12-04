export interface IHistorial {
    prescriptions: IPrescriptionHistory[] | null;
}

export interface IPrescriptionHistory {
  folio: number;
  patient_name: string;
  observations: string;
  instructions: string;
  created_at: string;
  supplied_at: string;
}
