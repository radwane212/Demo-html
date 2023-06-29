// This is another JavaScript code test.

// Define a function to perform the test
function runCodeTest() {
  console.log("Running code test...");

  // Create an array of numbers
  const numbers = [1, 2, 3, 4, 5];

  // Square each number in the array using map()
  const squaredNumbers = numbers.map((num) => num * num);

  // Print the squared numbers
  console.log("Squared numbers:", squaredNumbers);

  // Filter the squared numbers to get only the even numbers using filter()
  const evenNumbers = squaredNumbers.filter((num) => num % 2 === 0);

  // Print the even numbers
  console.log("Even numbers:", evenNumbers);

  console.log("Code test complete!");
}

// Call the function to run the code test
runCodeTest();
