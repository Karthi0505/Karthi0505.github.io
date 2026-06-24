

let n = 5;

for (let i = 1; i <= n; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += "* ";
  }

  console.log(row);
}
/**

*
* * 
* * * 
* * * * 
* * * * * 

*/
//-----------------------------------------------------

//Pyramid
let n = 5;
//3nd           3    5
for (let i = 1; i <= n; i++) {
  let row = "";
//                1    2      
  for (let j = 1; j <= n - i; j++) {
    row += " ";
  }
//                1    5
  for (let k = 1; k <= 2 * i - 1; k++) {
    row += "*";
  }

  console.log(row);
}
/**

    *
   ***
  *****
 *******
*********

*/