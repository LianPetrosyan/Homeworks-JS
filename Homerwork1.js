// 1. Given an object. Invert it (keys become values and values become keys). If there is
// more than key for that given value create an array.

let obj = {
    a : "1",
    b : "2",
    c : "5",
}
let objReversed = {}
for (let key in obj){
    objReversed[obj[key]] = key
}
console.log(objReversed)


// 2. Given two objects. Write a function that performs shallow compare.

function shallowCompare (obj1, obj2){
    for(let key1 in obj1){
        for(let key2 in obj2){
            if(key1 === key2 && obj1[key1] === obj2[key2]){
                return true
            }
        }return false
    }if(Object.keys(obj1).length === 0 && Object.keys(obj2).length ===0){
        return true
    }
}


// 3. Given an array. Determine whether it consists only from uniques or not.

function uniqueArr (arr){
    for(let i = 0 ; i < arr.length-1 ; i++){
        for(let j = 1 ; j < arr.length ; j++){
            if(arr[i] !== arr[j+i]){
            }else return false
        }
    } return true
}


// 4. Determine if a word or phrase is an isogram. An isogram (also known as a "non pattern
// word") is a word or phrase without a repeating letter.

function isogram (str){
    for(let i = 0 ; i < str.length-1 ; i++){
        for(let j = 1 ; j < str.length ; j++)
            if(str[i] !== str[j+i]){
                continue
                return true
            }else return false
    }return true
}


// 5. Given an array of integers. All numbers are unique. Find the count of missing numbers
// between minimum and maximum elements to make integers sequence.

function missingNum(arr){
    let missing = []
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = i ; j < arr.length ; j++){
            if(arr[i]>arr[j]){
                let x = arr[j]
                arr[j] = arr[i]
                arr[i] = x
            }
        }
    }
    for(let i = arr[0]; i < arr[arr.length-1]; i++){
        if(arr.indexOf(i) === -1){
            missing.push(i)
        }
    }return "Missing Numbers are "+missing
}