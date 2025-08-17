/* You are going to be given an array of integers. 
Your job is to take that array and find an index N where the sum 
of the integers to the left of N is equal to the sum of the integers 
to the right of N. If there is no index that would make this happen, 
return -1 */


function findEvenIndex(arr) {
    let sumLeft
    let sumRight

    arr.forEach(function (num) {
        arr.forEach(function (item) {
            if (arr.indexOf(item) < arr.indexOf(num)) {
                sumLeft += item;
            }
            if (arr.indexOf(item) > arr.indexOf(num)) {
                sumRight += item;
            }
            if (arr.indexOf(item) === arr.indexOf(num)) {
                sumLeft + 0;
            }
        })
    })
    if (sumLeft === sumRight) {
        return num
    }
    else {
        return -1
    }
}

console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]));

/* I initially thought I knew what I was doing when I started but it was definitely harder than expected and I still don't have the solution*/