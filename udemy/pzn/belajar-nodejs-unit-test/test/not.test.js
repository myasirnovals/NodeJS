test("string.not", () => {
    const name = "Gary Sanderson";

    expect(name).not.toBe("Derek");
    expect(name).not.toEqual("Derek");
    expect(name).not.toMatch(/Derek/);
});

test("number.not", () => {
    const value = 2 + 2;

    expect(value).not.toBe(5);
    expect(value).not.toBeGreaterThan(4);
    expect(value).not.toBeLessThan(4);
});