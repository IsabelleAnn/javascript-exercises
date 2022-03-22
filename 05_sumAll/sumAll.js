const sumAll = function(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number" || num1 < 0 || num2 < 0) {
        console.log("ERROR");
        return "ERROR";
    }
    console.log(num1, num2);
    if (num1 > num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
        console.log(num1, num2);

    }
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        sum += i;
    }
    console.log(sum);
    return sum;
};
sumAll(3488, 50);
// Do not edit below this line
module.exports = sumAll;