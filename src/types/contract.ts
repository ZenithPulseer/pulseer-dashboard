export interface Contract {
  id: string;
  name?: string;
  network: string;
  latestEventLedger?: number;
  latestEventTimestamp?: string;
  watchedTopics: string[];
  alertCount: number;
}
