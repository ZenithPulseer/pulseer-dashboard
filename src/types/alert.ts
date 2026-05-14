export type AlertSeverity = 'info' | 'low' | 'medium' | 'high' | 'critical';
export type AlertStatus = 'open' | 'acknowledged' | 'resolved' | 'muted';

export interface Alert {
  id: string;
  ruleId: string;
  severity: AlertSeverity;
  category: string;
  title: string;
  description: string;
  network: string;
  affectedAccount?: string;
  affectedContract?: string;
  txHash?: string;
  ledger?: number;
  evidence: Record<string, any>;
  recommendedAction?: string;
  createdAt: string;
  status: AlertStatus;
  deduplicationKey: string;
}
