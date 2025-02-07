const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");

if(!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
    console.log("Data folder created");
}

const filePath = path.join(dataFolder, "data.txt");
//sync way to write file
fs.writeFileSync(filePath, "Hello ankit");
console.log("File written");

const readContent = fs.readFileSync(filePath, "utf-8");
console.log(readContent);

fs.appendFileSync(filePath, "hello again");
console.log("File appended");

//async way to write file
const filePathAsync = path.join(dataFolder, "data-async.txt");
fs.writeFile(filePathAsync, "Async file write", (err)=>{
    if(err) throw err;
    console.log("File written async");

    fs.readFile(filePathAsync, "utf-8", (err, data)=>{
        if(err) throw err;
        console.log(data);

        fs.appendFile(filePathAsync, "Async file write again", (err)=>{
            if(err) throw err;
            console.log("File appended async");

            fs.readFile(filePathAsync, "utf-8", (err, data)=>{
                if(err) throw err;
                console.log(data);
            });
        });
    });
});