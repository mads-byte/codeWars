/*
There are some stones on Bob's table in a row, and each of them can be red, 
green or blue, indicated by the characters R, G, and B. Help Bob find the 
minimum number of stones he needs to remove from the table so that the 
stones in each pair of adjacent stones have different colors.

Examples:

"RGBRGBRGGB"   => 1
"RGGRGBBRGRR"  => 3
"RRRRGGGGBBBB" => 9
*/

function solve(stones) {
    let counter = 0;
    for (let i = 0; i < stones.length; i++) {
        if (stones[i] === stones[i + 1]) {
            counter += 1
        }
    }
    if (counter === 0) {
        return 0;
    }
    else {
        return counter
    }

}

/* I felt pretty confident about this one and had a clear idea of how I wanted to proceed.
The only issue was that the instructions asked for something different from what the tests
were testing for so once I figured that out, it worked.*/