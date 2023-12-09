var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var evenArr = [];
var oddArr = [];

for (i = 0; i < numberArray.length; i++) {
    if (numberArray[i] % 2 === 0) {
        evenArr.push(numberArray[i]);
    }
    if (numberArray[i] % 2 === 1) {
        oddArr.push(numberArray[i]);
    }
}
document.write("<h2>Even Numbers</h2>");
document.write("Even : " + evenArr);
document.write("<h2>Odd Numbers</h2>");
document.write("Odd : " + oddArr);