import express from "express";
import request from "supertest";

const app = express();

const router = express.Router();
router.use((req, res, next) => {
    console.info(`Receive request : ${req.originalUrl}`);
});

router.get('/feature/a', (req, res) => {
    res.send("Feature A");
});

test("Test Route Disabled", async () => {
    let response = await request(app).get("/feature/a");
    expect(response.status).toBe(404);
});

test("Test Router Enabled", async () => {
    app.use(router);

    const response = await request(app).get("/feature/a");
    expect(response.text).toBe("feature a");
});