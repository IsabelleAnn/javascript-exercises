const ftoc = function(fTemp) {
    return parseFloat(((fTemp - 32) / 1.8).toFixed(1));
};

const ctof = function(cTemp) {
    return parseFloat(((cTemp * 1.8) + 32).toFixed(1));
};
console.log("Celsius to F:");
console.log(ctof(-10));
console.log("F to C:");
console.log(ftoc(32));
// Do not edit below this line
module.exports = {
    ftoc,
    ctof
};