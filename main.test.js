const { capitalize, reverseString, calculator, caesarCipher, analyzeArray} = require('./main')

test("Capitalizes the first letter.", () => {
    expect(capitalize("lorem")).toMatch("Lorem");
})

test("Reverse a string.", () => {
    expect(reverseString('lorem')).toMatch('merol');
})

test("Add two numbers.", () => {
    expect(calculator.add(8,4)).toEqual(12)
})

test("Subtract two numbers.", () => {
    expect(calculator.subtract(8,4)).toEqual(4)
})

test("Divide two numbers.", () => {
    expect(calculator.divide(8,4)).toEqual(2)
})

test("Multiply two numbers.", () => {
    expect(calculator.multiply(8,4)).toEqual(32)
})

test("Cipher the text with Caesars cipher.", () => {
    expect(caesarCipher("This is a text to cipher using Caesars cipher.",10)).toMatch("Drsc sc k dohd dy mszrob ecsxq Mkockbc mszrob.")
})

test("Takes an array and return's some of its properties.", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      })
})