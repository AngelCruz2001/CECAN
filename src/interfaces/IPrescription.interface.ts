import { IMedicine } from "./IMedicineStock.interface";

export interface IPrescription {
    patient_name: string;
    observations: string;
    instructions: string;
    medicines:    IMedicine[];
}
