import { z } from 'zod';

export const AccountAddressSchema = z
  .string()
  .regex(/^G[A-Z2-7]{55}$/, 'Invalid Stellar account address');

export const ContractIdSchema = z
  .string()
  .regex(/^C[A-Z2-7]{55}$/, 'Invalid Soroban contract ID');

export const RuleConfigSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  enabled: z.boolean(),
  severity: z.enum(['info', 'low', 'medium', 'high', 'critical']),
});
