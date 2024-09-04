/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */

let numbers = 61;
while (numbers <= 100) {
  if (numbers % 2 !== 0) {
    console.log(numbers, `is odd number`);
  }
  numbers++;
}

/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/
let num = 78;
while (num <= 98) {
  if (num % 2 == 0) {
    console.log(num, `is even number`);
  }
  num++;
}
