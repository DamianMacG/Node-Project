const fs = require("fs");
const http = require("http");
const url = require("url");

// fs.readFile("./starter/txt/start.txt", "utf-8", (err, data) => {
//   fs.writeFile(`./starter/txt/output.txt`, `${data}`, "utf-8", err => {
//     console.log("DONE!!!!!!!!!!!");
//   });
// });

// const server = http.createServer((req, res) => {
//   res.end("HIIIIIIIIIIIIIII");
// });

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the OVERVIEW!");
  } else if (pathName === "/api") {
    fs.readFile(
      `${__dirname}/starter/dev-data/data.json`,
      "utf-8",
      (err, data) => {
        const productData = JSON.parse(data);
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(data);
      }
    );
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening on port 8000...");
});
