import { useQuery } from '@tanstack/react-query';
import { usePulseerClient } from './use-pulseer-client';

export const useHealth = () => {
  const client = usePulseerClient();

  return useQuery({
    queryKey: ['health', client],
    queryFn: () => client.getHealth(),
  });
};
