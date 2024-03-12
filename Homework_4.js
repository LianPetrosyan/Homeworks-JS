

// 2. Write a JavaScript function to get all possible subsets of given length of the given
// array.
// Assume that all elements in the array are unique.

  function generate(current, start) {
    if (current.length === length) {
      subsets.push([...current]);
      return;
    }
    for (let i = start; i < array.length; i++) {
      current.push(array[i]);
      generate(current, i + 1);
      current.pop();
    }
  }

  generate([], 0);
  return subsets;
}

// 3. Write a recursive function to determine whether all digits of the number are odd or
// not.

let odd;
function isOdd(number) {
    if (number === 0 || odd === false) {
        return odd
    }
    let lastDigit = number % 10
    if  (lastDigit%2 !== 0 && number > 0){
        odd = true
        number = Math.trunc(number/10)
        return isOdd(number)
    }
    else {
        odd = false
        number = Math.trunc(number / 10)
        return isOdd(number)
    }
}

// 4. Given an array of numbers. Write a recursive function to find its minimal positive element. (if
//     such element does not exist, return -1)․

function minPositiveEl (arr){
    arr.sort( (a,b) => a-b)
    let min = arr.find (el => el>=0)
    if(min>=0){
        return min
    }
    return -1
}
