/*
Your goal is to write a function that removes the first and last characters of a string. 
You're given one parameter, the original string.

Important: Your function should handle strings of any length ≥ 2 characters. For strings 
with exactly 2 characters, return an empty string.

'eloquent' --> 'loquen'
'country'  --> 'ountr' 
'person'   --> 'erso'
'ab'       --> '' (empty string)
'xyz'      --> 'y'
*/

function removeChar(str) {
    if (str.length === 2) {
        return ""
    }
    return str.substring(1, (str.length - 1))
};

/*
This was pretty easy except I kept forgetting to return an empty string
so this made me realize I have to pay more attention to requirements
*/