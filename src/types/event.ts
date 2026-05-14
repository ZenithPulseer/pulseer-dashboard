export type PulseerEventType = 'transaction' | 'operation' | 'contract_event' | 'ledger';

export interface PulseerEvent {
  id: string;
  type: PulseerEventType;
  network: string;
  timestamp: string;
  ledger: number;
  txHash?: string;
  source?: string;
  target?: string;
  contractId?: string;
  data: Record<string, any>;
  raw?: any;
}
