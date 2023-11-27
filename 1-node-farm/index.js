const fs = require('fs');

fs.readFile("./starter/txt/start.txt", "utf-8", (err, data) => {
  console.log(data);
});

