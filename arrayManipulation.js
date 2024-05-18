

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