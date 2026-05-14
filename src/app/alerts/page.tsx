'use client';

import { useAlerts } from '@/hooks/use-alerts';
import { AlertCard } from '@/components/alert-card';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export default function AlertsPage() {
  const { data: alerts, isLoading } = useAlerts();

  const openAlerts = alerts?.filter(a => a.status === 'open') || [];
  const resolvedAlerts = alerts?.filter(a => a.status === 'resolved') || [];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Alert Center</h1>
        <p className="text-muted-foreground">Review and manage monitoring findings.</p>
      </div>

      <Tabs defaultValue="open">
        <TabsList>
          <TabsTrigger value="open">Open ({openAlerts.length})</TabsTrigger>
          <TabsTrigger value="resolved">Resolved ({resolvedAlerts.length})</TabsTrigger>
          <TabsTrigger value="all">All ({alerts?.length || 0})</TabsTrigger>
        </TabsList>

        <TabsContent value="open" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {isLoading ? (
              Array(3).fill(0).map((_, i) => <Skeleton key={i} className="h-32 w-full" />)
            ) : openAlerts.map(alert => (
              <AlertCard key={alert.id} alert={alert} />
            ))}
          </div>
        </TabsContent>
        {/* Other tabs follow similar pattern */}
      </Tabs>
    </div>
  );
}
