function samplePromise() {
    return Promise.resolve("Yasir");
}

async function run() {
    const name = await samplePromise();

    console.info(name);
}

run();