# Testing

Pulseer Dashboard uses **Vitest** for unit testing and **Playwright** for end-to-end testing.

## Unit Tests

Unit tests are located in `src/tests/` and cover:
- Formatting utilities.
- Validation schemas.
- Rule helpers.
- State management.

## End-to-End Tests

E2E tests are located in `src/e2e/` and cover:
- Page rendering.
- User navigation.
- Form submissions.
- Filter logic.

## Running Tests

```bash
npm run test      # Unit tests
npm run test:e2e  # E2E tests
```
