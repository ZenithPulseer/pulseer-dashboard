'use client';

import { useRules } from '@/hooks/use-rules';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { ShieldCheck } from 'lucide-react';

export default function RulesPage() {
  const { data: rules, isLoading } = useRules();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Alert Rules</h1>
        <p className="text-muted-foreground">Configure monitoring logic and severity thresholds.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {isLoading ? (
          Array(4).fill(0).map((_, i) => <Skeleton key={i} className="h-40 w-full" />)
        ) : rules?.map(rule => (
          <Card key={rule.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div className="space-y-1">
                <CardTitle className="text-lg">{rule.name}</CardTitle>
                <CardDescription>{rule.description}</CardDescription>
              </div>
              <ShieldCheck className="w-5 h-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant={rule.enabled ? "default" : "secondary"}>
                  {rule.enabled ? "Enabled" : "Disabled"}
                </Badge>
                <Badge variant="outline" className="capitalize">
                  {rule.severity}
                </Badge>
                <Badge variant="outline" className="capitalize">
                  {rule.category}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
