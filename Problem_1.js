const fs = require("fs");

//1. Create a directory of random JSON files

fs.readFile("./abc.json", "utf8", (err, data) => {
  if (err) throw err;
  else {
    let a = Math.random() * 10;
    fs.appendFile(`./randomJsonfiles/${a}.json`, data, "utf8", (err) => {
      if (err) throw err;
      else console.log("file created successfully");
    });
  }
});

//deleting all random files

fs.readdir("./randomJsonfiles", (err, data) => {
  if (err) throw err;
  else {
    data.map((e) => {
      fs.unlink(`./randomJsonfiles/${e}`, (err) => {
        if (err) throw err;
        console.log(`${data}.json was deleted`);
      });
    });
  }
});
