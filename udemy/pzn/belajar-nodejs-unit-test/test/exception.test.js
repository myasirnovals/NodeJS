import {callMe, MyException} from "../src/exception.js";

test("exception", () => {
    expect(() => callMe("error")).toThrow();
    expect(() => callMe("error")).toThrow(MyException);
    expect(() => callMe("error")).toThrow("Ups my exceptions happens");
});