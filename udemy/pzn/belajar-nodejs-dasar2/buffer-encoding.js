const buffer = Buffer.from("Gary Roach Sanderson", "utf8");

console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferBase64 = Buffer.from("R2FyeCBSb2FjaCBTYW5kZXJzb23=", "base64");
console.info(bufferBase64.toString("utf8"));