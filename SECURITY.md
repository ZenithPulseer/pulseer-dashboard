# Security Policy

## Supported Versions

We currently support the following versions of Pulseer Dashboard:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0.0 | :x:                |

## Reporting a Vulnerability

We take security seriously. If you find a vulnerability, please report it via the GitHub Security Advisory feature or email security@pulseer.io (fictional).

## Private Key Handling

Pulseer Dashboard is designed to be a read-only monitoring tool.
- **Do not** enter private keys into the dashboard.
- The application does not include any transaction signing logic.
- Ensure your environment variables do not contain sensitive credentials.

## Data Privacy

- The dashboard processes blockchain data which is public.
- Account labels, local rule configurations, and alert status notes are stored in your browser's local storage.
- Notification previews may contain sensitive transaction details; redact these before sharing screenshots.

## Trust Assumptions

- The dashboard relies on data from Horizon and Soroban RPC providers.
- Monitoring accuracy depends on the configured polling intervals and the reliability of these providers.
- Always perform independent review for high-value monitoring decisions.
