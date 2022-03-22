const leapYears = function(year) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log("True Leap Year!");
            return true;
        }
        console.log("False Not A Leap Year");
        return false;
    }
    if (year % 4 == 0) {
        console.log("True Leap Year!");
        return true;
    }
    console.log("False Not A Leap Year");
    return false;
};
leapYears(1996); //true OK
leapYears(1997); //false OK
leapYears(34992); //true OK
leapYears(1900); //false WRONG
leapYears(1600); //true WRONG
leapYears(700); //false WRONG


// Do not edit below this line
module.exports = leapYears;