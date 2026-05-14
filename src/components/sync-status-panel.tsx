import { SyncState } from '@/types/sync';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { formatTimeAgo } from '@/lib/format';
import { RefreshCw, CheckCircle2, AlertTriangle, PlayCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export const SyncStatusPanel = ({ syncs }: { syncs: SyncState[] }) => {
  const statusIcons = {
    synced: <CheckCircle2 className="w-4 h-4 text-green-500" />,
    syncing: <RefreshCw className="w-4 h-4 text-blue-500 animate-spin" />,
    delayed: <AlertTriangle className="w-4 h-4 text-yellow-500" />,
    stopped: <PlayCircle className="w-4 h-4 text-muted-foreground" />,
    error: <AlertTriangle className="w-4 h-4 text-red-500" />,
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {syncs.map((sync) => (
        <Card key={sync.id}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {sync.name}
            </CardTitle>
            {statusIcons[sync.status]}
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Status</span>
              <Badge variant="outline" className="text-[10px] uppercase">
                {sync.status}
              </Badge>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Cursor</span>
              <span className="text-xs font-mono">{sync.cursorValue}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Updated</span>
              <span className="text-[10px]">{formatTimeAgo(sync.lastProcessedAt)}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
