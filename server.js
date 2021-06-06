// Module that deals with routing and
// "require" loads an additional library
var express = require("express");
var path = require("path");

// Express handlebars module
var exphbs = require("express-handlebars");

// An instance of the express app
var app = express();


app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.set("port", process.env.PORT || 3000);

app.get("/", function (req, res) {
  res.render("home");
});

app.use(express.static("public"));

app.listen(app.get("port"), function () {
  console.log("Server started on port" + app.get("port"));
});
