11015431

# Array and User Profile Manipulation

## Project Description

This project contains two JavaScript files that perform specific tasks related to processing arrays and creating user profiles. The tasks are divided into three main functions:

1. `processArray` - Processes an array of numbers.
2. `formatArrayStrings` - Modifies an array of strings based on corresponding numbers.
3. `createUserProfiles` - Creates user profiles with original and modified names.

## Files

- `arrayManipulation.js`: Contains the `processArray` and `formatArrayStrings` functions.
- `userInfo.js`: Contains the `createUserProfiles` function and demonstrates how to use the functions from `arrayManipulation.js`.

## Task Descriptions

### Task 1: processArray

Create a function named `processArray` in `arrayManipulation.js` that:
- Takes an array of numbers as an argument.
- Returns a new array where each even number is squared and each odd number is tripled.

### Task 2: formatArrayStrings

Add a function named `formatArrayStrings` in `arrayManipulation.js` that:
- Takes two arrays as arguments:
  - An array of strings.
  - An array of numbers processed by `processArray`.
- Modifies each string based on its corresponding number:
  - Capitalizes the entire string if the number is even.
  - Converts the string to lowercase if the number is odd.

### Task 3: createUserProfiles

Create a function named `createUserProfiles` in `userInfo.js` that:
- Takes an array of names and the array of modified names from Task 2.
- Returns an array of objects, each containing:
  - `originalName`
  - `modifiedName` 

## Example Usage

### arrayManipulation.js

```javascript
const { processArray, formatArrayStrings } = require('./arrayManipulation');

const inputArray = [1, 2, 3, 4, 5];
const processedNumbers = processArray(inputArray);
const names = ["Alice", "Bob", "Charlie", "Diana", "Edward"];
const modifiedNames = formatArrayStrings(names, processedNumbers);

console.log(processedNumbers); // [3, 4, 9, 16, 15]
console.log(modifiedNames); // ['alice', 'BOB', 'charlie', 'DIANA', 'edward']
