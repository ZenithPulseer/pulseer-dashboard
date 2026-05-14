import { useQuery } from '@tanstack/react-query';
import { usePulseerClient } from './use-pulseer-client';

export const useAccounts = () => {
  const client = usePulseerClient();

  return useQuery({
    queryKey: ['accounts', client],
    queryFn: () => client.listWatchedAccounts(),
  });
};
