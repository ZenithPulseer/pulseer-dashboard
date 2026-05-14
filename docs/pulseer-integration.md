# Pulseer Integration

Pulseer Dashboard is designed to work seamlessly with `pulseer-core` or any Pulseer-compatible monitoring backend.

## Pulseer Client

The `src/lib/pulseer-client.ts` file provides a typed abstraction for all data requirements. In a production setup, this client would be configured to point to a persistent Pulseer monitoring service.

## Mock Data

To facilitate local development and testing without a live backend, the dashboard includes a comprehensive set of mock data in `src/lib/mock-data.ts`. The `PulseerClient` automatically falls back to this data when a live connection is not available.

## Network Configuration

The dashboard can be configured to monitor multiple Stellar networks (Public, Testnet, Futurenet). Network settings are managed in `src/config/networks.ts` and can be overridden via environment variables.
