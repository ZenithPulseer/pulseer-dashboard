# Alerting Model

Alerts are the primary output of the monitoring system.

## Severity Levels

- **Critical**: Immediate action required (e.g., failed high-value transaction).
- **High**: Significant issue detected (e.g., unexpected contract event).
- **Medium**: Degradation or unusual activity (e.g., RPC latency).
- **Low**: Minor issue or informational alert.
- **Info**: General activity update.

## Status Workflow

- **Open**: New alert requiring review.
- **Acknowledged**: Alert has been seen and is being investigated.
- **Resolved**: Issue has been addressed.
- **Muted**: Alert is suppressed for a period.

Status changes are stored locally in the browser's storage by default.
