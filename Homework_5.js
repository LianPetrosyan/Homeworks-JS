// 1. Create a function that builds a tree.

const treeNodes = [
    {id: 'root', children: [1, 2]},
    {id: 1, children: [3,]},
    {id: 2, children: [4, 5]},
    {id: 3, children: [6]},
    {id: 4, children: [7]},
    {id: 5, children: []},
    {id: 6, children: []},
    {id: 7, children: [8, 9]},
    {id: 8, children: []},
    {id: 9, children: [10]},
    {id: 10, children: []},
]

let createTree = (arr, id = "root") =>
    arr.reduce((tree, currentItem) => {
        if(!Array.isArray(id)){
            if (currentItem.id === id) {
                if (currentItem.children.length > 1 ) {
                    for(let i = 0 ; i < currentItem.children.length; i++){
                        tree[currentItem.children[i]] = createTree(arr, currentItem.children[i])
                    }
                }
                else if (currentItem.children.length === 0){
                    return {}
                }
                else {
                    tree[currentItem.children] = createTree(arr, currentItem.children)
                }
            }
        }
        else {
            for(let j = 0 ; j < id.length ; j++){
                if(currentItem.id === id[j]) {
                    if(currentItem.children.length > 1 ) {
                        for(let i = 0 ; i < currentItem.children.length; i++){
                            tree[currentItem.children[i]] = createTree(arr, currentItem.children[i])
                        }
                        if(currentItem.children.length === 0) {
                            return {}
                        }
                        else {
                            tree[currentItem.children[j]] = createTree(arr, currentItem.children[j])
                        }
                    }
                }
            }
        }
        return tree
    },{})



// 2. Write a JavaScript function to get all possible subsets of given length of the given
// array.  Assume that all elements in the array are unique.

// chstacvac

// let arr = [1,2,3,4,5]
// target = 3
// function factorial(n){
//     if(n == 0 || n == 1){
//         return 1;
//     }else{
//         return n * factorial(n-1);
//     }
// }
// let numberOfCombination = factorial(arr.length) / (factorial(target) * factorial(arr.length - target))

// function skipIndexAndSlice(arr, indexToSkip){
//     let arrWithSkippedIndex = []
//     for(let i = 0 ; i < arr.length; i++ ){
//         if(i !== indexToSkip){
//             arrWithSkippedIndex.push(arr[i])
//         }
//     }arrWithSkippedIndex.length = target-1
//     return arrWithSkippedIndex
// }
// let count = 0, i = 0 , j=-1
// let subArr = []
// let result = []
// function subArrays (arr, target) {
//     if(count === numberOfCombination){
//         return result
//     }
//     if(j >= target){
//         return result
//     }
//     count++
//     let concat = [].concat(skipIndexAndSlice(arr, j))
//     for(let x = arr.length-target+1; x < arr.length ; x++){
//         subArr = concat.concat(arr[x])
//         result.push(subArr)
//     }
//     j++
//     subArrays(arr, target)  
//     return result
// }

// 3. Create a decorator delay(f, ms) that delays each call of ‘f’ by ‘ms’ milliseconds.

function delay (fn, ms) {
    function result () {
        fn()
    }
    setTimeout(fn, ms)
}

delay(()=> console.log("asd"),3000)



// 4. Implement Debounce decorator

function debounce(func){
    let timer;
    result => {
        clearTimeout(timer);
        timer = setTimeout(() => {
                return result()
            }
            , 1000);
    };

}
