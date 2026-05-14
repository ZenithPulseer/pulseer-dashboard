import { describe, it, expect } from 'vitest';
import { formatAddress, formatAmount } from '../lib/format';

describe('Format Utils', () => {
  it('should abbreviate addresses', () => {
    const addr = 'GA2C5TJU4S5T2BKO6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U';
    expect(formatAddress(addr, 4)).toBe('GA2C...U6U6');
  });

  it('should format amounts', () => {
    expect(formatAmount('1000.5')).toBe('1,000.5');
  });
});
