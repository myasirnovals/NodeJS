test("string", () => {
    const name = "Gary Roach Sanderson";

    expect(name).toBe("Gary Roach Sanderson");
    expect(name).toMatch(/Sand/);
});