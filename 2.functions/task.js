// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg, L;
  min = 100;
  max = -100;
  sum = null;

  

  for (i=0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }

    sum += arr[i];
  }

  avg = Number((sum/arr.length).toFixed(2));
  
  return { min: min, max: max, avg: avg};
}

// Задание 2
function worker(arr) {
  let sum = null;
  for (let i= 0; i < arr.length; i++) {
    sum += arr[i];  
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
      let result = func(arrOfArr[i]);
      if (max < result) {
        max = result;
      }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let minI, maxI;
  minI = Infinity;
  maxI = -Infinity;
  
  for (let i = 0; i < arr.length; i++) {
    if  (arr[i] < minI) {
      minI = arr[i];
    }

    if (arr[i] > maxI) {
      maxI = arr[i];
    }
  }
  
  return Math.abs(maxI - minI);
}
