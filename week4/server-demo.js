const http = require("http");

function onRequest(request, response) {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("Hello Node.js");
  response.end();
}

http.createServer(onRequest).listen(8888, () => {
  console.log("🚀 서버 실행 중: http://localhost:8888");
});