
const functions = require('./functions.js');


test('should run', () => {
    expect(functions.returnTwo()).toEqual(2)
})

test('should return "Hello, Carlie"', () => {
    expect(functions.greeting('Carlie')).toBe('Hello, Carlie')
})

describe('Math functions', () => {
    test('should add numbers correctly', () => {
        expect(functions.add(1, 2)).toBe(3)
        expect(functions.add(2, 2)).toBe(4)
    })

    test('subtract numbers correctly', () => {
        expect(functions.subtract(1, 2)).toEqual(-1)
    })

    test('multiply numbers correctly', () => {
        expect(functions.multiply(1, 2)).toEqual(2)
    })

    test('divide numbers correctly', () => {
        expect(functions.divide(1, 2)).toEqual(0.5)
    })
})
