const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();

const port = process.env.PORT || 3500;

const publicDirPath = path.join(__dirname, "../public");
const viewspath = path.join(__dirname, "../templates/views");
const partialpath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");

app.set("views", viewspath);

hbs.registerPartials(partialpath);
app.use(express.static(publicDirPath));

app.get("", (req, res) => {
  res.render("index", {
    name: "Xiaoming Jin",
    title: "Weather App",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    name: "Xiaoming Jin",
    title: "Help Page",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    name: "Xiaoming Jin",
    title: "About US",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address!",
    });
  }
  res.send({
    forcast: "It is snowing",
    location: "New York",
    address: req.query.address,
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    name: "Xiaoming Jin",
    title: "404 error",
    errorMessage: "Help artical not found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    name: "Xiaoming Jin",
    title: "404 error",
    errorMessage: "My 404 page",
  });
});

app.listen(port, () => {
  console.log("Server start up on port " + port);
});
