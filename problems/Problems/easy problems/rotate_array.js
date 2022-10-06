//This problem was asked by Amazon.
//
// Given an array and a number k that's smaller than the length of the array,
// rotate the array to the right k elements in-place.

let arr = [2, 3, 45, 2, 4];
console.log(arr);
// rotate to the right
let k = 3;
if(k > arr.length)
    console.log("K is too big");
else

    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop())
    }
    console.log("array to the right", arr);

// rotate to the left
let j = 1
if (j > arr.length)
    console.log("J is too big")
else
    for (let l=0; l<j; l++){
        arr.push(arr.shift())
    }
    console.log("array to the left", arr);
