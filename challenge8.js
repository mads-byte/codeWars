/*
When provided with a number between 0-9, return it in words. Note that the input is guaranteed to be within the range of 0-9.

Input: 1

Output: "One".
*/


function switchItUp(number) {
    let result
    switch (number) {
        case 1:
            result = "One"
            break;
        case 2:
            result = "Two"
            break;
        case 3:
            result = "Three"
            break;
        case 4:
            result = "Four"
            break;
        case 5:
            result = "Five"
            break;
        case 6:
            result = "Six"
            break;
        case 7:
            result = "Seven"
            break;
        case 8:
            result = "Eight"
            break;
        case 9:
            result = "Nine"
            break;
        case 0:
            result = "Zero"
            break;

    }
    return result;

};

/*
I found this to be easy but once again, it took a little longer 
than it should have because of syntax errors. I will be working 
on remembering syntax a little better.
*/