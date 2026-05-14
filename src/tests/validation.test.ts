import { describe, it, expect } from 'vitest';
import { AccountAddressSchema, ContractIdSchema } from '../lib/validation';

describe('Validation Schemas', () => {
  it('should validate Stellar addresses', () => {
    const valid = 'GA2C5TJU4S5T2BKO6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U';
    expect(AccountAddressSchema.safeParse(valid).success).toBe(true);
    expect(AccountAddressSchema.safeParse('invalid').success).toBe(false);
  });

  it('should validate Contract IDs', () => {
    const valid = 'CC2C5TJU4S5T2BKO6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U6U';
    expect(ContractIdSchema.safeParse(valid).success).toBe(true);
  });
});
