import { useQuery } from '@tanstack/react-query';
import { usePulseerClient } from './use-pulseer-client';

export const useAlerts = () => {
  const client = usePulseerClient();

  return useQuery({
    queryKey: ['alerts', client],
    queryFn: () => client.listAlerts(),
  });
};

export const useAlert = (id: string) => {
  const client = usePulseerClient();

  return useQuery({
    queryKey: ['alert', id, client],
    queryFn: () => client.getAlert(id),
    enabled: !!id,
  });
};
