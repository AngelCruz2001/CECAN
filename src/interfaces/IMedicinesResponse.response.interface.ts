
export interface IMedicinesResponse {
    data: Data;
    ok:   boolean;
}

export interface Data {
    medicines: Medicine[];
}

export interface Medicine {
    key:        string;
    name:       string;
    deleted_at: null;
}
