import { getPulseerClient } from '@/lib/pulseer-client';
import { useNetwork } from './use-network';

export const usePulseerClient = () => {
  const { network } = useNetwork();
  return getPulseerClient(network.id);
};
