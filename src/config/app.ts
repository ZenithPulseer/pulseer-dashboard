export const APP_CONFIG = {
  name: 'Pulseer Dashboard',
  version: '1.0.0',
  description: 'Monitoring and alerting for Stellar and Soroban',
  pollingIntervalMs: Number(process.env.NEXT_PUBLIC_POLLING_INTERVAL_MS) || 5000,
  batchSize: Number(process.env.NEXT_PUBLIC_BATCH_SIZE) || 100,
};
