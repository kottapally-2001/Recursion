const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Recursive 
function fibsRec(n) {
  if (n <= 1) return [0];
  if (n === 2) return [0, 1];

  let arr = fibsRec(n - 1);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return arr;
}

//Input
rl.question("Enter the number of Fibonacci terms: ", (answer) => {
  const n = parseInt(answer);

  if (isNaN(n) || n <= 0) {
    console.log("Please enter a valid positive number.");
  } else {
    console.log(`Fibonacci sequence with ${n} terms:`);
    console.log(fibsRec(n));
  }

  rl.close();
});
