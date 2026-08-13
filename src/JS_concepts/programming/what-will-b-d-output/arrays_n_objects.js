
[1,2,3] + [4,5,6]  // '1,2,34,5,6'   - why? - + converts both arrays to strings: [1, 2, 3].toString()  // "1,2,3" and [4, 5, 6].toString()  // "4,5,6"  -  Then string concatenation happens:  -  "1,2,3" + "4,5,6" // "1,2,34,5,6". 

//Similar interview questions to practice
console.log([] + []);   // ''
console.log([] + {});   // '[object Object]'  - why? - + converts both arrays and objectsto strings: [].toString() // "" and {}.toString()  // "[object Object]"
console.log({} + []);   // 0  - why? - {} is treated as a block of code, so it is ignored and only [] is evaluated. [] is converted to 0 when used in a numeric context.
console.log([1] + [2]);   // '12'  - why? - + converts both arrays to strings
console.log([1, 2] == "1,2");   // true  - why?   == converts both sides to strings for comparison
console.log([1, 2] === "1,2");  // false  - why?   === does not convert types, so the comparison is between an array and a string, which are different types.
console.log(null + 1);   // 1  - why? - null is converted to 0 when used in a numeric context, so the expression becomes 0 + 1.
console.log(true + true);  // 2  - why? - true is converted to 1 when used in a numeric context, so the expression becomes 1 + 1.
console.log("5" - 2);   // 3  - why? - "5" is converted to a number when used with the - operator, so the expression becomes 5 - 2.
console.log("5" + 2);   // '52'  - why?  + becomes concatenation operator when either of side value is string.
console.log(2 + "3" + 4);   // '234'  - why?  + becomes concatenation operator when either of side value is string.
console.log(2 + 3 + "4");  // '54'  - why?  Here, 2 + 3 is evaluated first, which is 5, and then 5 + "4" becomes '54'.
console.log("2" + 3 + 4);  // '234'  - why?  + becomes concatenation operator when either of side value is string.


