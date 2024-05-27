import { formatCurrency } from './formatCurrency';

describe('formatCurrency', () => {
    test('formats number as BRL currency', () => {
        expect(formatCurrency(1234)).toEqual('R$ 1.234');
        expect(formatCurrency(0)).toEqual('R$ 0');
        expect(formatCurrency(1234567)).toEqual('R$ 1.234.567');
    });

    test('formats negative numbers correctly', () => {
        expect(formatCurrency(-1234)).toBe('-R$ 1.234');
    });

    test('handles large numbers', () => {
        expect(formatCurrency(9876543210)).toEqual('R$ 9.876.543.210');
    });
});
