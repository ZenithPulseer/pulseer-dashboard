import { useQuery } from '@tanstack/react-query';
import { usePulseerClient } from './use-pulseer-client';

export const useContracts = () => {
  const client = usePulseerClient();

  return useQuery({
    queryKey: ['contracts', client],
    queryFn: () => client.listWatchedContracts(),
  });
};
