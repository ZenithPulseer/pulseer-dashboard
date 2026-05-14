export type AssetType = 'native' | 'credit_alphanum4' | 'credit_alphanum12';

export interface Asset {
  code: string;
  issuer?: string;
  type: AssetType;
  balance?: string;
}
