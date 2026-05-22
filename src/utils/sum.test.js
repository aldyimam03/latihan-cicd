import { test, expect } from 'vitest';
import { sum } from './sum';

test("menjumlahkan 2 angka", () => {
    expect(sum(1,2)).toBe(3);
});