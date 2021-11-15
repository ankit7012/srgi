const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/btech", function (req, res) {
  res.render("btech.ejs");
});
app.get("/iii", function (req, res) {
  res.render("iii");
});

app.get("/computerscience", function (req, res) {
  res.render("cs");
});
app.get("/electricals", function (req, res) {
  res.render("electricals");
});
app.get("/electronics", function (req, res) {
  res.render("electronics");
});
app.get("/civil", function (req, res) {
  res.render("civil");
});
app.get("/mechanical", function (req, res) {
  res.render("mechanical");
});
app.get("/pharmacy", function (req, res) {
  res.render("pharmacy");
});
app.get("/Dpharma", function (req, res) {
  res.render("Dpharma");
});
app.get("/Bpharma", function (req, res) {
  res.render("Bpharma");
});
app.get("/campuslife", function (req, res) {
  res.render("campuslife");
});
app.get("/infrastructure", function (req, res) {
  res.render("infrastructure");
});
app.get("/industrialtour", function (req, res) {
  res.render("industrialtour");
});

app.get("/campusfacilities", function (req, res) {
  res.render("campusfacilities");
});
app.get("/academicfacilities", function (req, res) {
  res.render("academicfacilities");
});
app.get("/srconvocation", function (req, res) {
  res.render("srconvocation");
});
app.get("/velocity", function (req, res) {
  res.render("velocity");
});
app.get("/panache", function (req, res) {
  res.render("panache");
});
app.get("/test", function (req, res) {
  res.render("test");
});
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
