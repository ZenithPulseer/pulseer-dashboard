import { Network } from '@/types/network';

export const NETWORKS: Record<string, Network> = {
  public: {
    id: 'public',
    name: 'Public Network',
    passphrase: 'Public Global Stellar Network ; September 2015',
    horizonUrl: 'https://horizon.stellar.org',
    rpcUrl: 'https://mainnet.stellar.org:443',
  },
  testnet: {
    id: 'testnet',
    name: 'Test Network',
    passphrase: 'Test SDF Network ; September 2015',
    horizonUrl: 'https://horizon-testnet.stellar.org',
    rpcUrl: 'https://soroban-testnet.stellar.org',
  },
  futurenet: {
    id: 'futurenet',
    name: 'Future Network',
    passphrase: 'Test SDF Future Network ; October 2022',
    horizonUrl: 'https://horizon-futurenet.stellar.org',
    rpcUrl: 'https://rpc-futurenet.stellar.org',
  },
};

export const DEFAULT_NETWORK_ID = process.env.NEXT_PUBLIC_STELLAR_NETWORK || 'testnet';
