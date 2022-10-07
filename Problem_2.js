const fs = require("fs");

fs.readFile("./file/lipsum.txt", "utf8", (err, data) => {
  if (err) throw err;
  else {
    fs.writeFile("./file/upperCase.txt", data.toUpperCase(), "utf8", (err) => {
      if (err) throw err;
      else {
        fs.readFile("./file/upperCase.txt", "utf8", (err, data) => {
          if (err) throw err;
          else {
            let d = data.toLowerCase().split(".").join("\n");
            fs.writeFile("./file/changes.txt", d, "utf8", (err, data) => {
              if (err) throw err;
              else {
                fs.readFile("./file/done.txt", "utf-8", (err, data) => {
                  if (err) throw err;
                  else {
                    let f = data.split("\n").sort().join(" ");
                    console.log(f);
                    fs.writeFile("./file/newFile.txt", f, "utf8", (err) => {
                      if (err) throw err;
                      else {
                        fs.readFile(
                          "./file/newFile.txt",
                          "utf8",
                          (err, data) => {
                            if (err) throw err;
                            else {
                              fs.readdir("./file", (err, files) => {
                                if (err) throw err;
                                else {
                                  files.forEach((a) => {
                                    files.forEach((a) => {
                                      fs.unlink(`./file/${a}`, (err) => {
                                        if (err) throw err;
                                        else
                                          console.log(
                                            "files deleted successfully"
                                          );
                                      });
                                    });
                                  });
                                }
                              });
                            }
                          }
                        );
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
  }
});
