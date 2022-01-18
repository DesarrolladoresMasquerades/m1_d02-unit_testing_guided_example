const { divide } = require("./../calculator");

describe("Multiply", () => {

    test("called with two positive integers. The value returned should be the result of the multiplication of both values.", ()=>{
        const resutl = multiply(3,4)
        expect(result).toBe(12)
        
    });
    
    test("called with a negative and a positive integer. The value returned should be a negative number.", ()=>{
        // Test code goes here ...
    });
    
    test("called with any number and a number 0. The value returned should be 0 (any number multiplied by 0 equals 0)", ()=>{
        // Test code goes here ...
    });
});