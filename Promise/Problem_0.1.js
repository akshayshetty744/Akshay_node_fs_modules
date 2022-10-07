let fs = require("fs").promises;

let readpromise = fs.readFile("./a.json", "utf8");

readpromise
    .then((data) => {
        const writePromise = fs.writeFile("./b.json", data);
        return writePromise;
    })
    .then(() => {
        console.log("data write successfully");
    })
    .catch((err) => {
        console.log(err);
    });
