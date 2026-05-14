export type SyncStatus = 'synced' | 'syncing' | 'delayed' | 'stopped' | 'error';

export interface SyncState {
  id: string;
  name: string;
  status: SyncStatus;
  cursorValue: string;
  lastProcessedAt: string;
  error?: string;
}
