export type CursorType = 'paging_token' | 'ledger' | 'event' | 'timestamp';

export interface SyncCursor {
  id: string;
  type: CursorType;
  value: string;
  updatedAt: string;
  metadata?: Record<string, any>;
}
