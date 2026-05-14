import { PulseerEvent } from '@/types/event';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from './ui/table';
import { formatAddress, formatTimeAgo } from '@/lib/format';
import { Badge } from './ui/badge';
import { ExternalLink } from 'lucide-react';

export const ContractEventTable = ({ events }: { events: PulseerEvent[] }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Event</TableHead>
          <TableHead>Contract</TableHead>
          <TableHead>Topics</TableHead>
          <TableHead>Ledger</TableHead>
          <TableHead>Time</TableHead>
          <TableHead className="text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {events.map((event) => (
          <TableRow key={event.id}>
            <TableCell className="font-medium">
              <Badge variant="secondary" className="capitalize">
                {event.type.replace('_', ' ')}
              </Badge>
            </TableCell>
            <TableCell className="font-mono text-xs">
              {event.contractId ? formatAddress(event.contractId) : '-'}
            </TableCell>
            <TableCell>
              <div className="flex gap-1">
                {(event.data.topics || []).map((topic: string) => (
                  <Badge key={topic} variant="outline" className="px-1 py-0 h-4 text-[9px]">
                    {topic}
                  </Badge>
                ))}
              </div>
            </TableCell>
            <TableCell className="text-xs">{event.ledger}</TableCell>
            <TableCell className="text-xs text-muted-foreground">
              {formatTimeAgo(event.timestamp)}
            </TableCell>
            <TableCell className="text-right">
              {event.txHash && (
                <a 
                  href={`https://stellar.expert/explorer/testnet/tx/${event.txHash}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
