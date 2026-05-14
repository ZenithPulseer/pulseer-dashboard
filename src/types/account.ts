export interface Account {
  address: string;
  name?: string;
  tags: string[];
  network: string;
  lastActive?: string;
  alertCount: number;
}
