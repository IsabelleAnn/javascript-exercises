const removeFromArray = function(array, ...args) {
    console.log(array);

    let remove = [...args];

    console.log(remove);
    removeArray:
        for (let i = 0; i < remove.length; i++) {
            if (array.indexOf(remove[i]) == -1) {
                continue removeArray;
            }
            array.splice(array.indexOf(remove[i]), 1);
        }
    console.log(array);
    return array;
};
removeFromArray([1, 2, "ho", 4], 5, "1", "4", "2", "ho", 1);
// Do not edit below this line
module.exports = removeFromArray;