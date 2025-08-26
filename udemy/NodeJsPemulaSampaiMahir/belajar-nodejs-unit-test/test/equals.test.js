test("test toBe", () => {
    const name = "Yasir";
    const hello = `Hello ${name}`;

    expect(hello).toBe('Hello Yasir');
});

test("test toEqual", () => {
    let person = {id: "yan"};
    Object.assign(person, {name: "Yasir"});

    expect(person).toEqual({id: "yan", name: "Yasir"});
});