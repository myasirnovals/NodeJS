function tagFunction(array, ...args) {
    console.info(array);
    console.info(args);
}

test("tag function", () => {
    const name = "Yan";
    const lastName = "Westbrook";

    tagFunction `Hello ${name} ${lastName}, How are you?`;
    tagFunction `Bye ${name} ${lastName}!, see you later`;
});

test("tag function sql", () => {
    const name = "Yan";
    const id = 30;

    tagFunction `SELECT * FROM sample WHERE name = ${name} AND id = ${id}`;
});