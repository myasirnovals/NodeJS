import fs from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("Muhamad\n");
writer.write("Yasir\n");
writer.write("Noval\n");
writer.end();

const reader = fs.createReadStream("target.log");

reader.addListener("data", (data) => {
    console.info(data.toString());
});