import util from "util";

const firstName = "Gary";
const lastName = "Sanderson";

console.info(`Hello ${firstName} ${lastName}`);
console.info(util.format("Hello %s %s", firstName, lastName));

const person = {
    firstName: "James",
    lastName: "Ramirez",
};

console.info(`Person : ${JSON.stringify(person)}`);
console.info(util.format("Person : %j", person));
