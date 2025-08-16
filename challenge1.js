/* Given an integral number, determine if it's a square number: 
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
*/


// MY SOLUTION:
function isSquare(n) {
    let root = Math.sqrt(n);
    if (root % 1 === 0) {
        return true;
    }
    else {
        return false;
    }
}

/* I felt okay with this one. I do think that I could have done it a little cleaner(more efficiently) though */