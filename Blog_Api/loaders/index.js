const http = require("http");
const app = require("./server");

const db = require("./db")

module.exports = () => {
  const server = http.createServer(app);
  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`Listening on ${port} ...`);
  });

  db();
};


