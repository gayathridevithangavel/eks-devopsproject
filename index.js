const http = require("http");

http.createServer((req, res) => {
  res.end("eks-devops-project is running on EKS!");
}).listen(3000);
