/*
Your goal is to create a function dative() (Dative() in C#) which returns the valid form of a valid Hungarian word w in dative case i. e. append the correct suffix nek or nak to the word w based on vowel harmony rules.

Vowel Harmony Rules (simplified)
When the last vowel in the word is

a front vowel (e, é, i, í, ö, ő, ü, ű) the suffix is -nek
a back vowel (a, á, o, ó, u, ú) the suffix is -nak

*/

function dative(word) {
    const allVowels = ["e", "é", "i", "í", "ö", "ő", "ü", "ű", "a", "á", "o", "ó", "u", "ú"];
    const frontVowels = ["e", "é", "i", "í", "ö", "ő", "ü", "ű"];
    const backVowels = ["a", "á", "o", "ó", "u", "ú"];
    const wordArray = word.split("");
    const wordVowels = wordArray.filter(function (letter) {
        return allVowels.includes(letter)
    });
    if (frontVowels.includes(wordVowels[wordVowels.length - 1])) {
        return `${word}nek`
    } else if (backVowels.includes(wordVowels[wordVowels.length - 1])) {
        return `${word}nak`
    } else {
        return word
    }

}

console.log(dative("ablak"));

/*
This one was a little difficult, not so much because of the task but because I 
struggled to remember syntax and how to use my methods correctly. I also had a 
hard time remembering what methods could be used on certain data types. Overall
challenging, took about 12-15 mins but when I began, I knew exactly how I wanted 
to approach the problem.
*/