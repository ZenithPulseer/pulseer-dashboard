export interface Transaction {
  hash: string;
  ledger: number;
  createdAt: string;
  sourceAccount: string;
  feePaid: string;
  successful: boolean;
  operationCount: number;
}
