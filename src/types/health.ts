export type HealthStatus = 'healthy' | 'degraded' | 'unhealthy' | 'unknown';

export interface HealthCheckResult {
  component: string;
  status: HealthStatus;
  message: string;
  severity: string;
  timestamp: string;
  recommendedAction?: string;
  details?: Record<string, any>;
}
