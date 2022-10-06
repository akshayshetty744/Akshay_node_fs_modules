const fs = require('fs')

// fs.readFile('./hello.txt', 'utf8' , (error, data) => {
//   if (error) {
//     console.error(error)
//     return
//   }

//   console.log(data)
// })
fs.readFile('./a.json', 'utf8' , (error, data) => {
    if (error) {
      console.error(error)
      return
    }else{
        fs.writeFile("./b.json",data,"utf8",(data)=>{
            if(data) console.log(data)
        })
    }
  })

//   fs.unlink("./b.json", function(error){
//     if(error) throw error
//     console.log("All files deleted")
//   })

  function dataDeleter() {
    return Promise.all(
      ['./a.json', './b.json', './c.json'].map(
        file =>
          new Promise((res, rej) => {
            try {
              fs.unlink(`./${file}`, err => {
                if (err) throw err;
                console.log(`${file}.json was deleted`);
              });
            }
            catch (err) {
                console.log(err)
            }
          })//promiss
    ))//map
  };
  dataDeleter();