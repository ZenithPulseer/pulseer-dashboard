export interface Rule {
  id: string;
  name: string;
  description: string;
  category: string;
  severity: string;
  enabled: boolean;
  remediationGuidance?: string;
  metadata?: Record<string, any>;
}
