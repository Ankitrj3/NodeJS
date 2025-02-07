const path = require('path');

console.log("Directory name: ", path.dirname(__filename));
console.log("File name: ", path.basename(__filename));
console.log("File extension:", path.extname(__filename));

const joinedPath = path.join("/user", 'test', 'hello.html');
console.log("Joined path: ", joinedPath);

const resolvePath = path.resolve("uesr", "local", "bin", "node");
console.log("Resolve path: ", resolvePath);

const normalizePath = path.normalize("user/../.local/node/bin//node");
console.log("Normalize path: ", normalizePath);