import { useQuery } from '@tanstack/react-query';
import { usePulseerClient } from './use-pulseer-client';

export const useNotifications = () => {
  const client = usePulseerClient();

  return useQuery({
    queryKey: ['notifications', client],
    queryFn: async () => {
      const alerts = await client.listAlerts();
      return alerts.map(a => ({
        id: `notif-${a.id}`,
        type: 'alert_created',
        title: `Alert: ${a.title}`,
        body: a.description,
        severity: a.severity,
        timestamp: a.createdAt,
        metadata: { alertId: a.id },
      }));
    },
  });
};
