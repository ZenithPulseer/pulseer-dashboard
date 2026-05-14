'use client';

import { useAccounts } from '@/hooks/use-accounts';
import { AccountCard } from '@/components/account-card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

export default function AccountsPage() {
  const { data: accounts, isLoading } = useAccounts();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Watched Accounts</h1>
          <p className="text-muted-foreground">Manage and monitor Stellar accounts.</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add Account
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          Array(3).fill(0).map((_, i) => <Skeleton key={i} className="h-32 w-full" />)
        ) : accounts?.map(account => (
          <AccountCard key={account.address} account={account} />
        ))}
      </div>
    </div>
  );
}
