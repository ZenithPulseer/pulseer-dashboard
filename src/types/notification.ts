export interface NotificationPayload {
  id: string;
  type: string;
  title: string;
  body: string;
  severity: string;
  timestamp: string;
  metadata: Record<string, any>;
}
