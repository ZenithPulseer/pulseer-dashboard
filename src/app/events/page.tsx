'use client';

import { useEvents } from '@/hooks/use-events';
import { ContractEventTable } from '@/components/contract-event-table';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function EventsPage() {
  const { data: events, isLoading } = useEvents();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Event Stream</h1>
        <p className="text-muted-foreground">Real-time view of all monitored blockchain activity.</p>
      </div>

      <Card>
        <CardContent className="p-0">
          {isLoading ? (
            <Skeleton className="h-96 w-full" />
          ) : (
            <ContractEventTable events={events || []} />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
