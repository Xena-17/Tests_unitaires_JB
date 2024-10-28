// mathFunctions.test.js
const { division, isEven } = require('./mathFunctions');

describe('Tests de la fonction division', () => {
    test('Division de nombres positifs', () => {
        expect(division(10, 2)).toBe(5);
    });

    test('Division de nombres négatifs', () => {
        expect(division(-10, -2)).toBe(5);
    });

    test('Division par un nombre négatif', () => {
        expect(division(10, -2)).toBe(-5);
    });

    test('Division par zéro', () => {
        expect(() => division(10, 0)).toThrow("Division par zéro");
    });
});

describe('Tests de la fonction isEven', () => {
    test('Nombre pair', () => {
        expect(isEven(4)).toBe(true);
    });

    test('Nombre impair', () => {
        expect(isEven(5)).toBe(false);
    });

    test('Zéro est pair', () => {
        expect(isEven(0)).toBe(true);
    });

    test('Nombre négatif pair', () => {
        expect(isEven(-6)).toBe(true);
    });

    test('Nombre négatif impair', () => {
        expect(isEven(-7)).toBe(false);
    });
});
