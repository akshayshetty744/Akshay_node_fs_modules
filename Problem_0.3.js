const fs = require("fs");

fs.readFile("./a.json", "utf-8", (err, data) => {
  if (err) throw err;
  else {
    fs.writeFile("./b.json", data, "utf-8", (err) => {
      if (err) throw err;
      fs.unlink("./a.json", (err) => {
        if (err) throw err;
        else {
          fs.unlink("./b.json", (err) => {
            if (err) throw err;
            else console.log("deleted successfully");
          });
        }
      });
    });
  }
});
