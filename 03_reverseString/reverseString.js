// const reverseString = function(string) {
//     let reverse = "";
//     for (let i = string.length - 1; i >= 0; i--) {
//         reverse += string[i];
//     }
//     return reverse;
// };

const reverseString = function(string) {
    return string.split("").reverse().join("");
};


// Do not edit below this line
module.exports = reverseString;