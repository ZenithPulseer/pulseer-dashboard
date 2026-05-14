import { useQuery } from '@tanstack/react-query';
import { usePulseerClient } from './use-pulseer-client';

export const useRules = () => {
  const client = usePulseerClient();

  return useQuery({
    queryKey: ['rules', client],
    queryFn: () => client.listRules(),
  });
};
