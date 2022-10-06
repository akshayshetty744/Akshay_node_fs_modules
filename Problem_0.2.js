const fs = require('fs')
// function dataDeleter() {
//     return Promise.all(
//       ['./a.json', './b.json', './c.json'].map(
//         file =>
//           new Promise((res, rej) => {
//             try {
//               fs.unlink(`./${file}`, err => {
//                 if (err) throw err;
//                 console.log(`${file}.json was deleted`);
//               });
//             }
//             catch (err) {
//                 console.log(err)
//             }
//           })//promiss
//     ))//map
//   };
//   dataDeleter();

function f1(){
   var data =  ['./a.json', './b.json'];
    data.map((e)=>{
        fs.unlink(`./${e}`, err => {
            if (err) throw err;
            console.log(`${data}.json was deleted`);
          });
    }
    )
}
f1();