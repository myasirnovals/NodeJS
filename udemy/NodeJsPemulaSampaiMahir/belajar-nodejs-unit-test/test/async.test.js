import {sayHelloAsync} from "../src/async.js";

test("test async function", async () => {
    const result = await sayHelloAsync("Yan");
    expect(result).toBe("Hello Yan");
});

test("test async matchers", async () => {
    await expect(sayHelloAsync("Yan")).resolves.toBe("Hello Yan");
    await expect(sayHelloAsync()).rejects.toBe("Name is empty");
});