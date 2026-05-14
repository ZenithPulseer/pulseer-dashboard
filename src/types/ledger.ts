export interface Ledger {
  sequence: number;
  hash: string;
  closedAt: string;
  txCount: number;
  operationCount: number;
}
