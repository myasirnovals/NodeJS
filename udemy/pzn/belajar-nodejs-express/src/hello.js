import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/yan', (req, res) => {
    res.send("Hello Yan");
});


app.listen(3000, () => {
    console.info("Server running on http://localhost:3000");
});