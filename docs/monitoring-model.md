# Monitoring Model

Pulseer Dashboard implements a polling-based monitoring model for the browser.

## Watched Resources

- **Accounts**: Stellar G-addresses.
- **Contracts**: Soroban C-addresses.

## Sync Cursors

Cursors are used to track the latest processed activity for each watched resource. The dashboard displays these cursors to provide transparency into the monitoring lag.

## Polling Strategy

1.  The dashboard polls the configured Horizon or Soroban RPC endpoints at a fixed interval (default: 5s).
2.  New events are normalised and added to the local view.
3.  Rules are evaluated against new events (logic typically resides in the Pulseer backend or `pulseer-core`).
