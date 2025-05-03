// app.js
import path from 'path';
import { fileURLToPath } from 'url';
import colors from 'colors';
import readline from 'readline';
import { add, subtract, multiply, divide } from './my_module/calculator.js';

// Get current file name (Node's __filename is not available in ESM)
const __filename = fileURLToPath(import.meta.url);
const baseName = path.basename(__filename);
console.log(colors.cyan(`Current file name: ${baseName}`));

// Setup readline for terminal input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask user for inputs
rl.question('Enter first number: ', (first) => {
  rl.question('Enter second number: ', (second) => {
    const a = parseFloat(first);
    const b = parseFloat(second);

    console.log(colors.red(`Addition: ${add(a, b)}`));
    console.log(colors.blue(`Subtraction: ${subtract(a, b)}`));
    console.log(colors.green(`Multiplication: ${multiply(a, b)}`));
    console.log(colors.yellow(`Division: ${divide(a, b)}`));

    rl.close();
  });
});
