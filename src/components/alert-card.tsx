import { Alert } from '@/types/alert';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { formatTimeAgo } from '@/lib/format';
import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

export const AlertCard = ({ alert }: { alert: Alert }) => {
  const severityColors = {
    info: 'bg-blue-100 text-blue-800 border-blue-200',
    low: 'bg-green-100 text-green-800 border-green-200',
    medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    high: 'bg-orange-100 text-orange-800 border-orange-200',
    critical: 'bg-red-100 text-red-800 border-red-200',
  };

  return (
    <Card className="hover:border-primary/50 transition-colors">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center gap-2">
          <AlertTriangle className={cn("w-4 h-4", 
            alert.severity === 'critical' ? 'text-red-500' : 'text-orange-500'
          )} />
          <CardTitle className="text-sm font-medium leading-none">
            <Link href={`/alerts/${alert.id}`} className="hover:underline">
              {alert.title}
            </Link>
          </CardTitle>
        </div>
        <Badge variant="outline" className={cn("text-[10px] uppercase", severityColors[alert.severity])}>
          {alert.severity}
        </Badge>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
          {alert.description}
        </p>
        <div className="flex items-center justify-between text-[10px] text-muted-foreground">
          <span>{alert.network}</span>
          <span>{formatTimeAgo(alert.createdAt)}</span>
        </div>
      </CardContent>
    </Card>
  );
};
