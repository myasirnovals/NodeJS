import {sayHello} from "../src/sayHello.js";

test("sayHello success", () => {
    expect(sayHello("Yan")).toBe("Hello Yan");
});

test.failing("sayHello error with failing test", () => {
    sayHello(null);
});

test("sayHello error with throw", () => {
    expect(() => sayHello(null).toThrow());
});