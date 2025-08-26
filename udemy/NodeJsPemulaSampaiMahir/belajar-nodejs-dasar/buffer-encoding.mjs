const buffer = Buffer.from("Muhamad Yasir Noval", "utf8");

console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferBase64 = Buffer.from("TXVoYW1hZCBZYXNpciBOb3ZhbA==", "base64");
console.info(bufferBase64.toString("utf8"));