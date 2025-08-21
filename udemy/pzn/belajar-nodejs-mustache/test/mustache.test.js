import Mustache from 'mustache';
import fs from 'fs/promises';

test("Menggunakan Mustache", () => {
    const data = Mustache.render("Hello {{name}}", {name: "Yan"});

    expect(data).toBe("Hello Yan");
});

test("Menggunakan Mustache Cache", () => {
    Mustache.parse("Hello {{name}}");

    const data = Mustache.render("Hello {{name}}", {name: "Yan"});

    expect(data).toBe("Hello Yan");
});

test("Tags", () => {
    const data = Mustache.render("Hello {{name}}, my hobby is {{{hobby}}}", {
        name: "Yan",
        hobby: "<b>programming</b>"
    });

    expect(data).toBe("Hello Yan, my hobby is <b>programming</b>");
});

test("Nested Object", () => {
    const data = Mustache.render("Hello {{person.name}}", {
        person: {
            name: "Yan"
        }
    });

    expect(data).toBe("Hello Yan");
});

test("Mustache File", async () => {
    const helloTemplate = await fs.readFile("./templates/hello.mustache")
        .then(data => data.toString());

    const data = Mustache.render(helloTemplate, {
        title: "Programmer Zaman Now"
    });

    console.info(data);
    expect(data).toContain("Programmer Zaman Now");
});

test("Mustache Section Not Show", async () => {
    const helloTemplate = await fs.readFile("./templates/person.mustache")
        .then(data => data.toString());

    const data = Mustache.render(helloTemplate, {});
    console.info(data);
    expect(data).not.toContain("Hello Person");
});

test("Mustache Section Show", async () => {
    const helloTemplate = await fs.readFile("./templates/person.mustache")
        .then(data => data.toString());

    const data = Mustache.render(helloTemplate, {
        person: {
            name: "Yan"
        }
    });

    console.info(data);
    expect(data).toContain("Hello Person");
});

test("Section Data", async () => {
    const helloTemplate = await fs.readFile("./templates/person.mustache")
        .then(data => data.toString());

    const data = Mustache.render(helloTemplate, {
        person: {
            name: "Yan"
        }
    });

    console.info(data);
    expect(data).toContain("Hello Person Yan!");
});

test("Inverted Section", async () => {
    const helloTemplate = await fs.readFile("./templates/person.mustache")
        .then(data => data.toString());

    const data = Mustache.render(helloTemplate, {});
    console.info(data);
    expect(data).toContain("Hello Guest");
});

test("List", async () => {
    const helloTemplate = await fs.readFile("./templates/hobbies.mustache")
        .then(data => data.toString());

    const data = Mustache.render(helloTemplate, {
        hobbies: ["Programming", "Reading", "Writing", "Gaming"]
    });
    console.info(data);
    expect(data).toContain("Programming");
    expect(data).toContain("Gaming");
    expect(data).toContain("Reading");
    expect(data).toContain("Writing");
});

test("List Object", async () => {
    const helloTemplate = await fs.readFile("./templates/students.mustache")
        .then(data => data.toString());

    const data = Mustache.render(helloTemplate, {
        students: [
            {name: "Yan", value: 100},
            {name: "Derek", value: 90}
        ]
    });

    console.info(data);
    expect(data).toContain("Yan");
    expect(data).toContain("Derek");
    expect(data).toContain("100");
});

test("Functions", async () => {
    const parameter = {
        name: "Yan",
        upper: () => {
            return (text, render) => {
                return render(text).toUpperCase();
            }
        }
    };

    const data = Mustache.render("Hello {{#upper}}{{name}}{{/upper}}", parameter);
    console.info(data);
    expect(data).toBe("Hello YAN");
});

test("Comment", async () => {
    const helloTemplate = await fs.readFile("./templates/comment.mustache")
        .then(data => data.toString());

    const data = Mustache.render(helloTemplate, {
        title: "Yan"
    });

    console.info(data);
    expect(data).toContain("Yan");
    expect(data).not.toContain("Komentar");
});

test("Partials", async () => {
    const contentTemplate = await fs.readFile("./templates/content.mustache")
        .then(data => data.toString());
    const headerTemplate = await fs.readFile("./templates/header.mustache")
        .then(data => data.toString());
    const footerTemplate = await fs.readFile("./templates/footer.mustache")
        .then(data => data.toString());

    const data = Mustache.render(contentTemplate, {
        title: "Yan",
        content: "Belajar Mustache JS"
    }, {
        header: headerTemplate,
        footer: footerTemplate
    });

    console.info(data);
    expect(data).toContain("Yan");
    expect(data).toContain("Belajar Mustache JS");
    expect(data).toContain("Powered by Programmer Zaman Now");
});