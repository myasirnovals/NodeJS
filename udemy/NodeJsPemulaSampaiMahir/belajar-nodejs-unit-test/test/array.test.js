test("array simple", () => {
    const names = ["gary", "roach", "sanderson"];
    expect(names).toEqual(["gary", "roach", "sanderson"]);
    expect(names).toContain("sanderson");
});

test("array object", () => {
    const persons = [
        {name: "Derek"},
        {name: "Gary"}
    ];

    expect(persons).toContainEqual({name: "Gary"});
});