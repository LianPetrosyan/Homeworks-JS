// 1. Given an array. Write a recursive function that removes the first element and returns the given
// array. (without using arr.unshift(),assign second element to first, third element to second...)

let newArr = []
function addElement(arr) {
    if(!arr.length) {
        return arr
    }
    else if(arr.length - 1) {
        newArr.push(arr[1])
        arr = arr.slice(1)
        addElement(arr)
    }
    return newArr
}


// 2. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function
// that concats arrays).

function flatNestedArray(array) {
    let result = []
    if (array.length == 0) return result;
    if (Array.isArray(array[0])) {
        result = result.concat(flatNestedArray(array[0]));
    } else {
        result.push(array[0]);
    }
    result = result.concat(flatNestedArray(array.slice(1)))
    return result;
}


// 3. Given an array and a number N. Write a recursive function that rotates an array N places to the
// left. (Hint: to add element to the beginning use arr.unshift())

function rotateArr(arr, target){
    if(target < arr.length-1){
        arr.unshift(arr[arr.length-1])
        arr.pop()
        rotateArr(arr, target+1)
    }return arr
}


// 4. Given the list of the following readers:
// Output the books sorted by the percent in descending order which readStatus is true.

arr = [
        { book: "Catcher in the Rye", readStatus: true, percent: 40},
{ book: "Animal Farm", readStatus: true, percent: 20},
{ book: "Solaris", readStatus: false, percent: 90 },
{ book: "The Fall", readStatus: true, percent: 50 },
{ book: "White Nights", readStatus: false, percent: 60 } ,
{ book: "After Dark", readStatus: true, percent: 70 }
];

arr.filter(function fn(el, index, arr){
    if(el.readStatus === true){
        return true
    }
})
    .sort((a,b) => a.percent-b.percent)


// 5. Implement “map” method for plain objects (same as Array map method.)


//kisat
function customMap(fn){
    if (typeof fn !== 'function'){
        console.log(fn +' is not function')
        return
    }
    let result = {}
    for (let key in this){
        if(this.hasOwnProperty(key)){
            const resultFromCallBackFunction = fn(key,this[key],this)

        }
    }return result
}