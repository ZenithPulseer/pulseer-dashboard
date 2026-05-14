import { useQuery } from '@tanstack/react-query';
import { usePulseerClient } from './use-pulseer-client';

export const useSync = () => {
  const client = usePulseerClient();

  return useQuery({
    queryKey: ['sync', client],
    queryFn: () => client.getSyncStatus(),
  });
};
