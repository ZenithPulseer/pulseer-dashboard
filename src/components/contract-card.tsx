import { Contract } from '@/types/contract';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { formatAddress, formatTimeAgo } from '@/lib/format';
import { Badge } from './ui/badge';
import Link from 'next/link';
import { FileCode } from 'lucide-react';

export const ContractCard = ({ contract }: { contract: Contract }) => {
  return (
    <Card className="hover:border-primary/50 transition-colors">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center gap-2">
          <FileCode className="w-4 h-4 text-muted-foreground" />
          <CardTitle className="text-sm font-medium leading-none">
            <Link href={`/contracts/${contract.id}`} className="hover:underline">
              {contract.name || formatAddress(contract.id)}
            </Link>
          </CardTitle>
        </div>
        {contract.alertCount > 0 && (
          <Badge variant="destructive" className="text-[10px]">
            {contract.alertCount} Alerts
          </Badge>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-[10px] font-mono text-muted-foreground mb-2">
          {contract.id}
        </p>
        <div className="flex items-center justify-between text-[10px] text-muted-foreground">
          <div className="flex gap-1 flex-wrap">
            {contract.watchedTopics.map(topic => (
              <Badge key={topic} variant="outline" className="px-1 py-0 h-4 text-[9px]">
                {topic}
              </Badge>
            ))}
          </div>
          {contract.latestEventTimestamp && (
            <span>{formatTimeAgo(contract.latestEventTimestamp)}</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
