import { useQuery } from '@tanstack/react-query';
import { usePulseerClient } from './use-pulseer-client';

export const useEvents = () => {
  const client = usePulseerClient();

  return useQuery({
    queryKey: ['events', client],
    queryFn: () => client.listEvents(),
  });
};
