import { getShortNumber } from '../index';

describe('Utils:', () => {
    test(getShortNumber.name, () => {
        expect(getShortNumber(1)).toBe('1');
        expect(getShortNumber(11)).toBe('11');
        expect(getShortNumber(123)).toBe('123');
        expect(getShortNumber(1234)).toBe('1K');
        expect(getShortNumber(12345)).toBe('12K');
        expect(getShortNumber(123457)).toBe('123K');
        expect(getShortNumber(1234567)).toBe('1KK');
    });
});
