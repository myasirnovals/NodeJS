import {divideAll, sum, sumAll} from "../src/sum.js";

test("test sum1 function", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
});

test("test sum2 function", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
});

test("test sum3 function", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
});

test("test sum all", () => {
    const numbers = [1,1,1,1,1];
    expect(sumAll(numbers)).toBe(5);
});

test("test divide all", () => {
    const numbers = [1,1,1,1,1];
    expect(divideAll(numbers)).toBe(1);
});

test("test divide if zero", () => {
    const numbers = [1,1,0,1,1];
    expect(() => divideAll(numbers)).toThrow("Can't divide by zero");
    expect(() => divideAll(numbers)).toThrow(Error);
});