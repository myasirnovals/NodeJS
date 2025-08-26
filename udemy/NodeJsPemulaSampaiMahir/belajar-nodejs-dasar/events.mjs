import {EventEmitter} from "events"

const emitter = new EventEmitter();

emitter.addListener("Hello", (name) => {
    console.info(`Hello ${name}`);
});

emitter.addListener("Hello", (name) => {
    console.info(`Halo ${name}`);
});

emitter.emit("Hello", "Eko");