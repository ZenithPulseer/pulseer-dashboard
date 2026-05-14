import { Account } from '@/types/account';
import { Contract } from '@/types/contract';
import { PulseerEvent } from '@/types/event';
import { Alert } from '@/types/alert';
import { Rule } from '@/types/rule';
import { HealthCheckResult } from '@/types/health';

export const MOCK_ACCOUNTS: Account[] = [
  {
    address: 'GA2C5TJU4S5T2BKO6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U',
    name: 'Treasury Wallet',
    tags: ['treasury', 'high-value'],
    network: 'testnet',
    lastActive: new Date().toISOString(),
    alertCount: 2,
  },
];

export const MOCK_CONTRACTS: Contract[] = [
  {
    id: 'CC2C5TJU4S5T2BKO6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U',
    name: 'Liquidity Pool',
    network: 'testnet',
    latestEventLedger: 123456,
    latestEventTimestamp: new Date().toISOString(),
    watchedTopics: ['transfer', 'mint'],
    alertCount: 1,
  },
];

export const MOCK_EVENTS: PulseerEvent[] = [
  {
    id: 'ev-1',
    type: 'transaction',
    network: 'testnet',
    timestamp: new Date().toISOString(),
    ledger: 123456,
    txHash: 'tx-123',
    source: 'GA2C5TJU4S5T2BKO6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U',
    data: { successful: true, operationCount: 1 },
  },
];

export const MOCK_ALERTS: Alert[] = [
  {
    id: 'alt-1',
    ruleId: 'failed-tx',
    severity: 'high',
    category: 'transaction',
    title: 'Failed Transaction',
    description: 'Transaction tx-123 failed on testnet',
    network: 'testnet',
    affectedAccount: 'GA2C5TJU4S5T2BKO6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U',
    txHash: 'tx-123',
    evidence: { error: 'tx_bad_seq' },
    createdAt: new Date().toISOString(),
    status: 'open',
    deduplicationKey: 'failed-tx:testnet:tx-123',
  },
];

export const MOCK_RULES: Rule[] = [
  {
    id: 'failed-tx',
    name: 'Failed Transaction Detection',
    description: 'Alert when a transaction fails on a watched account',
    category: 'transaction',
    severity: 'high',
    enabled: true,
    remediationGuidance: 'Check the transaction result code and account sequence.',
  },
];

export const MOCK_HEALTH: HealthCheckResult[] = [
  {
    component: 'Horizon',
    status: 'healthy',
    message: 'Horizon is responding normally',
    severity: 'info',
    timestamp: new Date().toISOString(),
  },
  {
    component: 'Soroban RPC',
    status: 'degraded',
    message: 'High latency detected on Soroban RPC',
    severity: 'medium',
    timestamp: new Date().toISOString(),
    recommendedAction: 'Consider switching to a backup RPC provider.',
  },
];
