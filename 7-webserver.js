//const { read } = require('fs')
const http = require("http");
const PORT = 3000;
const server = http.createServer();

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {
//     "Content-Type": "application/json",
//   });
//   res.write(
//     JSON.stringify({
//       id: 1,
//       name: "Dear Hojat Fathpour",
//     })
//   );
//   res.end();
// });
// server.listen(PORT, () => {
//   console.log(`lisetning on port ${PORT}`);
// }); // 127.0.0.1 => localhosti
const friends = [
  {
    id: 0,
    name: "Dear Sina Fathpour",
  },
  {
    id: 1,
    name: "Dear Hojat Fathpour",
  },
  {
    id: 2,
    name: "Dear Javad Fathpour",
  },
];

server.on("request", function (req, res) {
  let item = req.url.split("/");
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("HHHHHHHHHHHHHHomePage");
  } else if (req.method === "POST" && item[1] == "friends") {
    req.on("data", function (data) {
      const friend = data.toString();
      console.log(`request:`, friend);
      friends.push(JSON.parse(friend));
    });
    req.pipe(res);
  } else if (req.method === "GET" && item[1] == "friends") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    if (!item[2]) {
      //item.length === 2
      res.end(JSON.stringify(friends));
    }
    const friend = friends[+item[2]]
    res.end(JSON.stringify(friend))
  } else if (req.url == "/messages") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("MMMMMMMMMMMMMMessageeeeeeee");
    res.write("MMMMMMMMMMMMMMessag");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});
server.listen(PORT, function () {
  console.log(`lisetning on port ${PORT}`);
});
