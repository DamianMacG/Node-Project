const fs = require("fs");
const http = require("http");

// fs.readFile("./starter/txt/start.txt", "utf-8", (err, data) => {
//   fs.writeFile(`./starter/txt/output.txt`, `${data}`, "utf-8", err => {
//     console.log("DONE!!!!!!!!!!!");
//   });
// });

const server = http.createServer((req, res) => {
  res.end("HIIIIIIIIIIIIIII");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening on port 8000...");
});
