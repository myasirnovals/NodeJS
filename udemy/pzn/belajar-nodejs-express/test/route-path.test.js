import express from "express";
import request from "supertest";

const app = express();

app.get("/products/*.json", (req, res) => {
    res.send(req.originalUrl);
});

app.get("/categories/*(\\d+).json", (req, res) => {
    res.send(req.originalUrl);
});

test("Test Route Path", async () => {
    let response = await request(app).get("/products/laptops.json");
    expect(response.text).toBe("/products/laptops.json");

    response = await request(app).get("/products/device-computer.json");
    expect(response.text).toBe("/products/device-computer.json");

    response = await request(app).get("/categories/3.json");
    expect(response.text).toBe("/categories/3.json");

    response = await request(app).get("/categories/4.json");
    expect(response.text).toBe("/categories/4.json");

    response = await request(app).get("/categories/food.json");
    expect(response.status).toBe(404);
});