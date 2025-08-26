function samplePromise() {
    return Promise.resolve('Hello World');
}

const name = await  samplePromise();
console.info(name)