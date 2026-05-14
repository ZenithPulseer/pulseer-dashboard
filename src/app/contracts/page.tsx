'use client';

import { useContracts } from '@/hooks/use-contracts';
import { ContractCard } from '@/components/contract-card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

export default function ContractsPage() {
  const { data: contracts, isLoading } = useContracts();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Watched Contracts</h1>
          <p className="text-muted-foreground">Manage and monitor Soroban contracts.</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add Contract
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          Array(3).fill(0).map((_, i) => <Skeleton key={i} className="h-32 w-full" />)
        ) : contracts?.map(contract => (
          <ContractCard key={contract.id} contract={contract} />
        ))}
      </div>
    </div>
  );
}
