import { getHealthStatus } from './index.js';

test('health > 50 returns healthy', () => {
  expect(getHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
  expect(getHealthStatus({ name: 'Маг', health: 51 })).toBe('healthy');
});

test('health between 15 and 50 returns wounded', () => {
  expect(getHealthStatus({ name: 'Маг', health: 50 })).toBe('wounded');
  expect(getHealthStatus({ name: 'Маг', health: 15 })).toBe('wounded');
  expect(getHealthStatus({ name: 'Маг', health: 30 })).toBe('wounded');
});

test('health < 15 returns critical', () => {
  expect(getHealthStatus({ name: 'Маг', health: 14 })).toBe('critical');
  expect(getHealthStatus({ name: 'Маг', health: 0 })).toBe('critical');
});