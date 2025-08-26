import {sum} from "../src/sum.js";

beforeAll(() => {
    console.info("Before ALl");
});

afterAll(() => {
    console.info("After All");
});

beforeEach(() => {
    console.info("Before Each");
});

afterEach(() => {
    console.info("After Each");
});

test("first test", () => {
    expect(sum(10, 10)).toBe(20);
    console.info("First Test");
});

test("second test", () => {
    expect(sum(10, 20)).toBe(30);
    console.info("Second Test");
});