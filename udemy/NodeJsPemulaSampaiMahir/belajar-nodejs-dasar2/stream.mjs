import fs from "fs";

const writer = fs.createWriteStream("target.log");
writer.write("Gary\n");
writer.write("Roach\n");
writer.write("Sanderson\n");
writer.end();

const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
    console.info(data.toString());
});