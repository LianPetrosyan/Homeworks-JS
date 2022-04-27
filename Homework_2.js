// 1. Given an array of numbers which is almost sorted in ascending order.  Find the index
// where sorting order is violated.

function wrongOrderIndex(arr){
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i]>arr[i+1]){
            return i
        }
    }return -1
}


// 2. Given an array consisting from the arrays of numbers (like a two-dimensional array).
// Find sum of each row and print them as an array

function sumOftwoDimensionalArr(arr){
    let resultOfSum =0
    let resultArr =[]
    let result = []
    for(let i = 0 ; i < arr.length ; i++){
        if(typeof arr[i] !== "object"){
            return "Wrong format"
        }
        for(let j = 0 ; j < arr[i].length ; j++){
            resultOfSum += arr[i][j]
        }resultArr.push(resultOfSum)
        resultOfSum=0
    }result.push(resultArr)
    return result
}


// 3. Given an array of integers. Write a function that return new array from first array,
//     where removed even numbers, and odd numbers was multiplied with new array length

function newArr (arr){
    let sorted = arr.filter(function fn(el, i, arr){
        if(el%2 !== 0){
            return true
        }
    })
    let newArray = sorted.map(function fn(el, i, arr){
        return el *= sorted.length
    })
    return newArray
}


// 4. Given a number. Write a function that calculates its sum of the digits and if that sum
// has more than 1 digit find the sum of digits of that number. Repeat that process if needed and
// return the result.

function sumOfDigits(number){
    let sum = number%10
    while( number!==0 ){
        number = Math.trunc(number/10)
        sum=sum+number%10
    }if(sum>=10){
        sum = sumOfDigits(sum)
    }return sum
}


// 5. Write a recursive function which receives a number as arguments and returns the
// fibonacci sequence as array.

function fibonacci(n){
    if(n <= 0){
        return []
    }
    arr = [0,1]
    for(let i = 2; i < n; i++)
        arr[i] = arr[i - 1] + arr[i - 2];
    return arr;
}
