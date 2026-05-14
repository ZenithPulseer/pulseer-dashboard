'use client';

import { useHealth } from '@/hooks/use-health';
import { useSync } from '@/hooks/use-sync';
import { HealthCard } from '@/components/health-card';
import { SyncStatusPanel } from '@/components/sync-status-panel';
import { Skeleton } from '@/components/ui/skeleton';

export default function HealthPage() {
  const { data: health, isLoading: healthLoading } = useHealth();
  const { data: syncs, isLoading: syncLoading } = useSync();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Operational Health</h1>
        <p className="text-muted-foreground">Monitor infrastructure status and sync performance.</p>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Endpoint Status</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {healthLoading ? (
            Array(3).fill(0).map((_, i) => <Skeleton key={i} className="h-32 w-full" />)
          ) : health?.map(h => (
            <HealthCard key={h.component} result={h} />
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Sync Performance</h2>
        {syncLoading ? (
          <Skeleton className="h-32 w-full" />
        ) : (
          <SyncStatusPanel syncs={syncs || []} />
        )}
      </div>
    </div>
  );
}
