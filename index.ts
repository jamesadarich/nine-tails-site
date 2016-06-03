import * as Express from "express";
import http = require("http");

let app = Express();

app.set("port", process.env.PORT || 3000);

app.use(Express.static("public"));

app.use("/scripts/vendor", Express.static("node_modules"));

http.createServer(app).listen(app.get("port"), () => {
  console.log("Express server listening on port " + app.get("port"));
});

app.use(function(req: any, res: any, next: any) {
  res.status(200).sendFile("/public/index.html", { root: "./" });
});
