/* Given an array of numbers and an index, return either the index of 
the smallest number that is larger than the element at the given index, 
or -1 if there is no such index ( or, where applicable, Nothing or a 
similarly empty value  */

function leastLarger(arr, index) {
    let num = arr[index]
    const largerNums = arr.filter(function (value) {
        return value > num;
    });
    if (largerNums.length > 0) {
        return arr.indexOf(Math.min.apply(null, largerNums));
    }
    else {
        return -1;
    }
}

/* This one confused me a bit because I thought I understood what 
the instructions were asking for but then I failed the tests because 
I didn't realize it was asking for the index of the value and not
the value itself.  Overall, I'd say I felt confident, then confused,
then confident again once I understood */



