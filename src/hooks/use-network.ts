import { useAppStore } from '@/store/app-store';
import { NETWORKS } from '@/config/networks';

export const useNetwork = () => {
  const { networkId, setNetworkId } = useAppStore();
  const network = NETWORKS[networkId] || NETWORKS.testnet;

  return {
    network,
    setNetworkId,
    allNetworks: Object.values(NETWORKS),
  };
};
