const fs = require("fs")
const path= require("path")

const mypath=path.join(__dirname, "pages","home.html")
console.log(mypath)

fs.readFile(path.join(__dirname, "pages","example.txt"),
 "utf8", (err, data) => {
    if (err) throw err; 
     
    console.log("File Content:", data);
 })
    fs.readdir(path.join(__dirname, "pages"),"utf8",(err, data) =>{
        if (err) throw err; 
        console.log(data);
        data.forEach(item => {
            console.log(item)

            fs.readFile(path.join(__dirname, "pages", item),"utf8",(err, data) =>{
                if (err) throw err; 
                console.log(data);
        })  
        })


  });

  // will get error because folder pages needs to be made 

// console.log("hellow world")

// node_modules
// try not to send the node modules 

//buffer 