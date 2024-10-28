// discount.test.js
const { calculateDiscount } = require('./discount');

describe('Tests de la fonction calculateDiscount', () => {
    test('Remise de 10% sur un prix de 100', () => {
        expect(calculateDiscount(100, 10)).toBe(90);
    });

    test('Remise de 0%', () => {
        expect(calculateDiscount(100, 0)).toBe(100);
    });

    test('Remise de 100%', () => {
        expect(calculateDiscount(100, 100)).toBe(0);
    });

    test('Remise en dehors de l\'intervalle [0, 100]', () => {
        expect(() => calculateDiscount(100, -10)).toThrow("Remise invalide");
        expect(() => calculateDiscount(100, 110)).toThrow("Remise invalide");
    });
});
