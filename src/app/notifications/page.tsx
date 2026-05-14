'use client';

import { useNotifications } from '@/hooks/use-notifications';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Bell, Terminal } from 'lucide-react';
import { formatTimeAgo } from '@/lib/format';

export default function NotificationsPage() {
  const { data: notifications, isLoading } = useNotifications();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Notification Handoff</h1>
        <p className="text-muted-foreground">Preview payloads ready for external delivery.</p>
      </div>

      <div className="space-y-6">
        {isLoading ? (
          Array(3).fill(0).map((_, i) => <Skeleton key={i} className="h-48 w-full" />)
        ) : notifications?.map(notif => (
          <Card key={notif.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bell className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">{notif.title}</CardTitle>
                  <CardDescription>{formatTimeAgo(notif.timestamp)}</CardDescription>
                </div>
              </div>
              <Badge variant="outline" className="capitalize">{notif.severity}</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">{notif.body}</p>
              <div className="bg-muted p-3 rounded-md overflow-x-auto">
                <div className="flex items-center gap-2 mb-2 text-[10px] text-muted-foreground uppercase font-bold">
                  <Terminal className="w-3 h-3" />
                  JSON Payload
                </div>
                <pre className="text-[10px] font-mono">
                  {JSON.stringify(notif, null, 2)}
                </pre>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
