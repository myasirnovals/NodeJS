import {Console} from "console";
import fs from "fs";

const file = fs.createWriteStream("application.log");

const log = new Console({
    stdout: file,
    stderr: file,
});

log.info("Hello World");
log.error("Hello World");

const person = {
    firstName: "Gary",
    lastName: "Sanderson",
};

log.table(person);