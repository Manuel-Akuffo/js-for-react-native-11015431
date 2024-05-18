

function processArray(arr) {
  return arr.map(num => {
      if (num % 2 === 0) {
          return num * num;  
      } else {
          return num * 3;   
      }
  });
}

const arr = processArray([1,3,7,6]);
console.log(arr);

function formatArrayStrings(strings, numbers) {
  return strings.map((str, index) => {
      const num = numbers[index];
      if (num % 2 === 0) {
          return str.toUpperCase(); 
      } else {
          return str.toLowerCase();
      }
  });
}


const inputArray = [1, 2, 3, 4, 5];
const processedNumbers = processArray(inputArray);
const strings = ["hello", "world", "this", "is", "example"];
const formattedStrings = formatArrayStrings(strings, processedNumbers);

console.log(formattedStrings); 