let fs = require("fs").promises;

var data = ["./a.json", "./b.json"];
data.map((e) => {
  let readpromise = fs.unlink(`./${e}`, "utf8");
  readpromise
    .then((data) => {
      let remove = fs.unlink(`./${data}`);
      return remove;
    })
    .then(() => {
      console.log("delete successfully");
    })
    .catch((err) => {
      console.log(err);
    });
});
