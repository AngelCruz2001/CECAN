export interface IFixedAssetResponse {
  data: {
    fixed_assets: IFixedAsset[];
  };
}

export interface IFixedAsset {
  id: string;
  description: string;
  model: string;
  brand: string;
  created_at: string;
  updated_at: string;
}
