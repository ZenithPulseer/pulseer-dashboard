import { HealthCheckResult } from '@/types/health';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';
import { CheckCircle2, AlertCircle, XCircle, HelpCircle } from 'lucide-react';

export const HealthCard = ({ result }: { result: HealthCheckResult }) => {
  const statusIcons = {
    healthy: <CheckCircle2 className="w-4 h-4 text-green-500" />,
    degraded: <AlertCircle className="w-4 h-4 text-yellow-500" />,
    unhealthy: <XCircle className="w-4 h-4 text-red-500" />,
    unknown: <HelpCircle className="w-4 h-4 text-muted-foreground" />,
  };

  const statusColors = {
    healthy: 'bg-green-100 text-green-800 border-green-200',
    degraded: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    unhealthy: 'bg-red-100 text-red-800 border-red-200',
    unknown: 'bg-slate-100 text-slate-800 border-slate-200',
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center gap-2">
          {statusIcons[result.status]}
          <CardTitle className="text-sm font-medium leading-none">
            {result.component}
          </CardTitle>
        </div>
        <Badge variant="outline" className={cn("text-[10px] uppercase", statusColors[result.status])}>
          {result.status}
        </Badge>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-muted-foreground mb-1">{result.message}</p>
        {result.recommendedAction && (
          <p className="text-[10px] text-primary font-medium">
            Action: {result.recommendedAction}
          </p>
        )}
      </CardContent>
    </Card>
  );
};
