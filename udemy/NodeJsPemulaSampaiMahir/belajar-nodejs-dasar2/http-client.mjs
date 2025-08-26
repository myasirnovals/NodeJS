import https from "https";

const endpoint = "https://eokslm2y03p0ym.m.pipedream.net";
const request = https.request(endpoint, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
}, (response) => {
    response.addListener("data", (data) => {
        console.info(`Receive data : ${data.toString()}`);
    });
});

const body = JSON.stringify({
    firstName: "Gary",
    lastName: "Sanderson",
});

request.write(body);
request.end();