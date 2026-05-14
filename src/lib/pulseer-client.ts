import { MOCK_ACCOUNTS, MOCK_CONTRACTS, MOCK_EVENTS, MOCK_ALERTS, MOCK_RULES, MOCK_HEALTH } from './mock-data';
import { Account } from '@/types/account';
import { Contract } from '@/types/contract';
import { PulseerEvent } from '@/types/event';
import { Alert } from '@/types/alert';
import { Rule } from '@/types/rule';
import { HealthCheckResult } from '@/types/health';
import { SyncState } from '@/types/sync';

export class PulseerClient {
  private networkId: string;

  constructor(networkId: string) {
    this.networkId = networkId;
  }

  async listWatchedAccounts(): Promise<Account[]> {
    return MOCK_ACCOUNTS.filter(a => a.network === this.networkId);
  }

  async listWatchedContracts(): Promise<Contract[]> {
    return MOCK_CONTRACTS.filter(c => c.network === this.networkId);
  }

  async listEvents(): Promise<PulseerEvent[]> {
    return MOCK_EVENTS.filter(e => e.network === this.networkId);
  }

  async listAlerts(): Promise<Alert[]> {
    return MOCK_ALERTS.filter(a => a.network === this.networkId);
  }

  async getAlert(id: string): Promise<Alert | undefined> {
    return MOCK_ALERTS.find(a => a.id === id);
  }

  async listRules(): Promise<Rule[]> {
    return MOCK_RULES;
  }

  async getHealth(): Promise<HealthCheckResult[]> {
    return MOCK_HEALTH;
  }

  async getSyncStatus(): Promise<SyncState[]> {
    return [
      {
        id: 'acc-sync',
        name: 'Account Activity Sync',
        status: 'synced',
        cursorValue: '123456',
        lastProcessedAt: new Date().toISOString(),
      }
    ];
  }
}

export const getPulseerClient = (networkId: string) => new PulseerClient(networkId);
