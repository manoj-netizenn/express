const express = require("express");
const path = require("path");
const app = express();
const port = 8082;


app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/home", (req, res) => {
  res.render("home.ejs");
});
//about page
app.get("/about", (req, res) => {
  res.render("about.ejs");
});

//gallery
app.get("/gallery", (req, res) => {
  res.render("gallery.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/product", (req, res) => {
    const products=[{name:'laptop',price:100000},{name:'phone',price:10000}]
  res.render("product.ejs",{products});
});

app.get("/users", (req, res) => {
  const usersdata = {};
  res.render("users", {
    username: "alice",
    age: 25,
    isPremiumUser: true,
    email: "alice@gmail.com",
    isLogin: false,
  });
});

app.get("/", (req, res) => {
  res.json({
    message: "hello  world",
    status: "ok",
  });
});


app.use((req, res, next) => {
  const error = new Error("Page Not Found");
  next(error);
});

app.use((err, req, res, next) => {
  console.log(err.message);
  res.render("error", { error: err.message });
});

app.listen(port, () => {
  console.log(`server is listening on this ${port}`);
});

