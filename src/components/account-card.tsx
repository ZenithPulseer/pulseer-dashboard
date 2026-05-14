import { Account } from '@/types/account';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { formatAddress, formatTimeAgo } from '@/lib/format';
import { Badge } from './ui/badge';
import Link from 'next/link';
import { Wallet } from 'lucide-react';

export const AccountCard = ({ account }: { account: Account }) => {
  return (
    <Card className="hover:border-primary/50 transition-colors">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center gap-2">
          <Wallet className="w-4 h-4 text-muted-foreground" />
          <CardTitle className="text-sm font-medium leading-none">
            <Link href={`/accounts/${account.address}`} className="hover:underline">
              {account.name || formatAddress(account.address)}
            </Link>
          </CardTitle>
        </div>
        {account.alertCount > 0 && (
          <Badge variant="destructive" className="text-[10px]">
            {account.alertCount} Alerts
          </Badge>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-[10px] font-mono text-muted-foreground mb-2">
          {account.address}
        </p>
        <div className="flex items-center justify-between text-[10px] text-muted-foreground">
          <div className="flex gap-1">
            {account.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="px-1 py-0 h-4 text-[9px]">
                {tag}
              </Badge>
            ))}
          </div>
          {account.lastActive && (
            <span>{formatTimeAgo(account.lastActive)}</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
