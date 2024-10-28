// mathFunctions.js
function division(a, b) {
    if (b === 0) throw new Error("Division par zéro");
    return a / b;
}

function isEven(number) {
    return number % 2 === 0;
}

module.exports = { division, isEven };
