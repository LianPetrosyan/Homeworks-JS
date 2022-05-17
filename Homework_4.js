

// 2. Write a JavaScript function to get all possible subsets of given length of the given
// array.
// Assume that all elements in the array are unique.

//kisat e, menak 2 hati depq

let result = []
function foo (arr, target) {
    if(arr.length === 1){
        return result
    }
    for(let i = 1 ; i < arr.length ; i++){
        let res = []
        res.push(arr[0], arr[i])
        result = [...result,res]
    }
    arr.shift()
    foo(arr)
    return result
}
foo([1,2,3,4,5],2)



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