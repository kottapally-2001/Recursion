const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fibonacci
function fibs(n) {
  let arr = [0, 1];
  if (n <= 1) return [0];
  if (n === 2) return arr;

  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
}

//Input
rl.question("Enter the number of Fibonacci terms: ", (answer) => {
  const n = parseInt(answer);

  if (isNaN(n) || n <= 0) {
    console.log("Please enter a valid positive number.");
  } else {
    console.log(`Fibonacci sequence with ${n} terms:`);
    console.log(fibs(n));
  }

  rl.close();
});
