// discount.js
function calculateDiscount(price, discountPercent) {
    if (discountPercent < 0 || discountPercent > 100) throw new Error("Remise invalide");
    return price - (price * discountPercent / 100);
}

module.exports = { calculateDiscount };
