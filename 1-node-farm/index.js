const fs = require('fs');

fs.readFile("./starter/txt/start.txt", "utf-8", (err, data) => {
  fs.writeFile(`./starter/txt/output.txt`, `${data}`, "utf-8", err => {
    console.log("DONE!!!!!!!!!!!");
  });
  
});


