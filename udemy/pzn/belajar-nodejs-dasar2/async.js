function samplePromise() {
    return Promise.resolve('Hello World');
}

async function run() {
    const name = await samplePromise();
    console.info(name);
}

run();