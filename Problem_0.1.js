const fs = require('fs')
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