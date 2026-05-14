'use client';

import { useAccounts } from '@/hooks/use-accounts';
import { useContracts } from '@/hooks/use-contracts';
import { useAlerts } from '@/hooks/use-alerts';
import { useEvents } from '@/hooks/use-events';
import { useHealth } from '@/hooks/use-health';
import { useSync } from '@/hooks/use-sync';
import { AccountCard } from '@/components/account-card';
import { ContractCard } from '@/components/contract-card';
import { AlertCard } from '@/components/alert-card';
import { HealthCard } from '@/components/health-card';
import { ContractEventTable } from '@/components/contract-event-table';
import { SyncStatusPanel } from '@/components/sync-status-panel';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function HomePage() {
  const { data: accounts, isLoading: accountsLoading } = useAccounts();
  const { data: contracts, isLoading: contractsLoading } = useContracts();
  const { data: alerts, isLoading: alertsLoading } = useAlerts();
  const { data: events, isLoading: eventsLoading } = useEvents();
  const { data: health, isLoading: healthLoading } = useHealth();
  const { data: syncs, isLoading: syncLoading } = useSync();

  const recentAlerts = alerts?.slice(0, 3) || [];
  const recentEvents = events?.slice(0, 5) || [];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Pulseer Overview</h1>
        <p className="text-muted-foreground">Monitoring the Stellar and Soroban ecosystem.</p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Watched Accounts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{accounts?.length || 0}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Watched Contracts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{contracts?.length || 0}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">
              {alerts?.filter(a => a.status === 'open').length || 0}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Network Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">Healthy</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Recent Alerts */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Recent Alerts</h2>
          {alertsLoading ? (
            Array(3).fill(0).map((_, i) => <Skeleton key={i} className="h-24 w-full" />)
          ) : recentAlerts.length > 0 ? (
            recentAlerts.map(alert => <AlertCard key={alert.id} alert={alert} />)
          ) : (
            <p className="text-sm text-muted-foreground">No active alerts.</p>
          )}
        </div>

        {/* Health Summary */}
        <div className="space-y-4 lg:col-span-2">
          <h2 className="text-xl font-semibold">System Health</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {healthLoading ? (
              Array(2).fill(0).map((_, i) => <Skeleton key={i} className="h-24 w-full" />)
            ) : (
              health?.map(h => <HealthCard key={h.component} result={h} />)
            )}
          </div>
        </div>
      </div>

      {/* Sync Status */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Sync Status</h2>
        {syncLoading ? (
          <Skeleton className="h-32 w-full" />
        ) : (
          <SyncStatusPanel syncs={syncs || []} />
        )}
      </div>

      {/* Recent Events */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Recent Contract Events</h2>
        <Card>
          <CardContent className="p-0">
            {eventsLoading ? (
              <Skeleton className="h-64 w-full" />
            ) : (
              <ContractEventTable events={recentEvents} />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
