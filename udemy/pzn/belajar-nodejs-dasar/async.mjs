function samplePromise() {
    return Promise.resolve("Yasir");
}

const name = await samplePromise();

console.info(name);