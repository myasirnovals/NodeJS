import express from "express";
import request from "supertest";

const app = express();

app.get("/products/:id", (req, res) => {
    const idProduct = req.params.id;
    res.send(`Product: ${idProduct}`);
});

app.get("/categories/:id(\\d+)", (req, res) => {
    const idCategory = req.params.id;
    res.send(`Category: ${idCategory}`);
});

app.get("/seller/:idSeller/products/:idProduct", (req, res) => {
    const idProduct = req.params.idProduct;
    const idSeller = req.params.idSeller;
    res.send(`Seller: ${idSeller} with Product: ${idProduct}`);
});

test("Test Route Parameter", async () => {
    let response = await request(app).get("/products/laptops");
    expect(response.text).toBe("Product: laptops");

    response = await request(app).get("/products/device-computer");
    expect(response.text).toBe("Product: device-computer");

    response = await request(app).get("/categories/3");
    expect(response.text).toBe("Category: 3");

    response = await request(app).get("/categories/4");
    expect(response.text).toBe("Category: 4");

    response = await request(app).get("/categories/food");
    expect(response.status).toBe(404);
});