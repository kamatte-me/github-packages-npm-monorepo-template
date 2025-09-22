import { expect, test } from 'vitest';

import type { User } from '@/types/user';

import { hoge } from './hoge';

test('hoge', () => {
  const user: User = { id: 1, name: 'kamatte me' };
  const actual = hoge(user);
  expect(actual).toBe(user.id);
});
