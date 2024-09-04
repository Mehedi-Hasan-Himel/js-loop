/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

*/

let numbers = 81;
let sum = 0;
while (numbers <= 131) {
  if (numbers % 2 !== 0) {
    sum = sum + numbers;
  }
  numbers++;
}
console.log(`Display sum of all the odd numbers from 81 to 131: `, sum);

/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

let num = 206;
let evenSum = 0;
while (num <= 311) {
  if (num % 2 == 0) {
    evenSum = evenSum + num;
  }
  num++;
}

console.log(
  `Display sum of all the even numbers from 206 to 311.
: `,
  evenSum
);

