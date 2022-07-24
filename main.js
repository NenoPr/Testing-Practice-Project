
function capitalize(item) {
    return (item[0].toUpperCase() + item.slice(1))
}

function reverseString(item) {
    let newItem = ""
    for (let i = item.length-1; i>-1; i--){
        newItem += item[i]
    }
    return (newItem)
}

const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
    divide: function (a, b) {
        return a / b;
    },
    multiply: function (a, b) {
        return a * b;
    }
}

function findLowerCase(i, text, newArr, found, cipher, overstep) {
    let arrLow = [
        { id: 0, letter: 'a' },  { id: 1, letter: 'b' },
        { id: 2, letter: 'c' },  { id: 3, letter: 'd' },
        { id: 4, letter: 'e' },  { id: 5, letter: 'f' },
        { id: 6, letter: 'g' },  { id: 7, letter: 'h' },
        { id: 8, letter: 'i' },  { id: 9, letter: 'j' },
        { id: 10, letter: 'k' }, { id: 11, letter: 'l' },
        { id: 12, letter: 'm' }, { id: 13, letter: 'n' },
        { id: 14, letter: 'o' }, { id: 15, letter: 'p' },
        { id: 16, letter: 'q' }, { id: 17, letter: 'r' },
        { id: 18, letter: 's' }, { id: 19, letter: 't' },
        { id: 20, letter: 'u' }, { id: 21, letter: 'v' },
        { id: 22, letter: 'w' }, { id: 23, letter: 'x' },
        { id: 24, letter: 'y' }, { id: 25, letter: 'z' }
    ];
    // Find lowercase
    for (let j = 0; j < arrLow.length;j++) {
        if (text[i] === arrLow[j].letter) {
            if (j+cipher > arrLow.length - 1) {
                overstep = (j+cipher) - (arrLow.length - 1) - 1
                newArr.push(arrLow[overstep].letter)
            } else {
                newArr.push(arrLow[j+cipher].letter)
            }
            j = arrLow.length;
            found = true
        }
    }
    //return the new array and if a match was found
    return newArr, found
}

function findUpperCase(i, text, newArr, cipher, overstep) {
    let arrHigh = [
        { id: 0, letter: 'A' },  { id: 1, letter: 'B' },
        { id: 2, letter: 'C' },  { id: 3, letter: 'D' },
        { id: 4, letter: 'E' },  { id: 5, letter: 'F' },
        { id: 6, letter: 'G' },  { id: 7, letter: 'H' },
        { id: 8, letter: 'I' },  { id: 9, letter: 'J' },
        { id: 10, letter: 'K' }, { id: 11, letter: 'L' },
        { id: 12, letter: 'M' }, { id: 13, letter: 'N' },
        { id: 14, letter: 'O' }, { id: 15, letter: 'P' },
        { id: 16, letter: 'Q' }, { id: 17, letter: 'R' },
        { id: 18, letter: 'S' }, { id: 19, letter: 'T' },
        { id: 20, letter: 'U' }, { id: 21, letter: 'V' },
        { id: 22, letter: 'W' }, { id: 23, letter: 'X' },
        { id: 24, letter: 'Y' }, { id: 25, letter: 'Z' }
    ];
    // Find uppercase
    for (let j = 0; j < arrHigh.length;j++) {
        if (text[i] === arrHigh[j].letter) {
            if (j+cipher >= arrHigh.length - 1) {
                overstep = (j+cipher) - (arrHigh.length - 1) - 1
                newArr.push(arrHigh[overstep].letter)
            } else {
                newArr.push(arrHigh[j+cipher].letter)
            }
            j = arrHigh.length;
            }
    }
    return newArr
}

function caesarCipher (text,cipher) {
    // let alphabetLower = "abcdefghijklmnopqrstuvwxyz"
    // let alphabetHigher = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    // for (let i = 0;i<alphabetLower.length;i++) {
    //     arrLow.push({id: i, letter: alphabetLower[i]})
    // }
    // for (let i = 0;i<alphabetHigher.length;i++) {
    //     arrHigh.push({id: i, letter: alphabetHigher[i]})
    // }
    // console.log(arrLow)
    // console.log(arrHigh)
    // let arrLow = [
    //     { id: 0, letter: 'a' },  { id: 1, letter: 'b' },
    //     { id: 2, letter: 'c' },  { id: 3, letter: 'd' },
    //     { id: 4, letter: 'e' },  { id: 5, letter: 'f' },
    //     { id: 6, letter: 'g' },  { id: 7, letter: 'h' },
    //     { id: 8, letter: 'i' },  { id: 9, letter: 'j' },
    //     { id: 10, letter: 'k' }, { id: 11, letter: 'l' },
    //     { id: 12, letter: 'm' }, { id: 13, letter: 'n' },
    //     { id: 14, letter: 'o' }, { id: 15, letter: 'p' },
    //     { id: 16, letter: 'q' }, { id: 17, letter: 'r' },
    //     { id: 18, letter: 's' }, { id: 19, letter: 't' },
    //     { id: 20, letter: 'u' }, { id: 21, letter: 'v' },
    //     { id: 22, letter: 'w' }, { id: 23, letter: 'x' },
    //     { id: 24, letter: 'y' }, { id: 25, letter: 'z' }
    // ];
    // let arrHigh = [
    //     { id: 0, letter: 'A' },  { id: 1, letter: 'B' },
    //     { id: 2, letter: 'C' },  { id: 3, letter: 'D' },
    //     { id: 4, letter: 'E' },  { id: 5, letter: 'F' },
    //     { id: 6, letter: 'G' },  { id: 7, letter: 'H' },
    //     { id: 8, letter: 'I' },  { id: 9, letter: 'J' },
    //     { id: 10, letter: 'K' }, { id: 11, letter: 'L' },
    //     { id: 12, letter: 'M' }, { id: 13, letter: 'N' },
    //     { id: 14, letter: 'O' }, { id: 15, letter: 'P' },
    //     { id: 16, letter: 'Q' }, { id: 17, letter: 'R' },
    //     { id: 18, letter: 'S' }, { id: 19, letter: 'T' },
    //     { id: 20, letter: 'U' }, { id: 21, letter: 'V' },
    //     { id: 22, letter: 'W' }, { id: 23, letter: 'X' },
    //     { id: 24, letter: 'Y' }, { id: 25, letter: 'Z' }
    // ];
    let newArr = [];
    let overstep;
    let found = false;
    for (let i = 0; i < text.length; i++){
        // Lowercase
        newArr, found = findLowerCase(i, text, newArr, found, cipher, overstep)
        // Uppercase
        if (found === false) {
            newArr = findUpperCase(i, text, newArr, cipher, overstep)
        }
        // Check if there was no matches, if true append item (punctuation,space and other characters)
        if (newArr[i] === undefined) newArr.push(text[i])
        found = false;
    }
    // Convert array to string and remove "," characters
    newArr = newArr.toString().replaceAll(",","")
    return newArr
}

function analyzeArray(array=[1,8,3,4,2,6]) {

    let objectArray = {};
    
    objectArray.average = array.reduce( (sum, num) => sum + num) / array.length
    objectArray.min = Math.min(...array)
    objectArray.max = Math.max(...array)
    objectArray.length = array.length

    return objectArray
}

console.log(capitalize("neno"))
console.log(reverseString("lorem"))
console.log(calculator.divide(8,4))
console.log(caesarCipher("This is a text to cipher using Caesars cipher.",10))
console.log(analyzeArray([1,8,3,4,2,6]))

module.exports = {capitalize, reverseString, calculator, caesarCipher, analyzeArray};