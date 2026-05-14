'use client';

import { useNetwork } from '@/hooks/use-network';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { APP_CONFIG } from '@/config/app';

export default function SettingsPage() {
  const { network, setNetworkId, allNetworks } = useNetwork();

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage local preferences and network connections.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Network Configuration</CardTitle>
          <CardDescription>Configure which Stellar network the dashboard should monitor.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="network">Selected Network</Label>
            <Select value={network.id} onValueChange={setNetworkId}>
              <SelectTrigger id="network">
                <SelectValue placeholder="Select network" />
              </SelectTrigger>
              <SelectContent>
                {allNetworks.map(n => (
                  <SelectItem key={n.id} value={n.id}>{n.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="horizon">Horizon URL</Label>
              <Input id="horizon" value={network.horizonUrl} readOnly className="bg-muted" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="rpc">Soroban RPC URL</Label>
              <Input id="rpc" value={network.rpcUrl} readOnly className="bg-muted" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Polling & Batching</CardTitle>
          <CardDescription>Configure how often the dashboard polls for new data.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="interval">Polling Interval (ms)</Label>
              <Input id="interval" type="number" value={APP_CONFIG.pollingIntervalMs} readOnly className="bg-muted" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="batch">Batch Size</Label>
              <Input id="batch" type="number" value={APP_CONFIG.batchSize} readOnly className="bg-muted" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
