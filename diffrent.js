// odd numbers

for (let i = 0; i < 20; i++) {
  if (i % 2 !== 0) {
    console.log(`Odd Numbers: `, i);
  }
}

// even numbers
for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(`Even Numbers: `, i);
  }
}

// give me the list of number between 1 to 30 divisible by 5
for (let i = 1; i <= 30; i++) {
  if (i % 5 == 0) {
    console.log(`divisible by 5:`, i);
  }
}

// give me the list of number between 1 to 30 divisible by 5 or divisible by 3.
for (let i = 1; i <= 30; i++) {
  if (i % 5 == 0 || i % 3 == 0) {
    console.log(`divisible by 5 or 3:`, i);
  }
}

// give me the list of number between 1 to 30 divisible by 5 and divisible by 3.
for (let i = 1; i <= 30; i++) {
  if (i % 5 == 0 && i % 3 == 0) {
    console.log(`divisible by 5 and 3:`, i);
  }
}

// give me the sum of numbers from 1 to 20 that are divisible by 3
let sum = 0;
for (let i = 0; i <= 20; i++) {
   if (i % 3 == 0) {
     console.log(i);
     
     sum += i;
     console.log(`Sum: `,sum);

  }
}

console.log(`Total sum: `,sum);

