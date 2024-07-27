const pinecone = require("@pinecone-lang/pinecone-js");
const fs = require("fs");

function testTime(func) {
    const startTime = Date.now();
    func();
    const endTime = Date.now();
    console.log("Completed in", endTime - startTime, "ms");
}

console.log("Parsing JSON...");
testTime(() => {
    JSON.parse(fs.readFileSync("../dummy.json"));
});

console.log("Parsing Pinecone...");
testTime(() => {
    pinecone.parse("../dummy.pc");
});