const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const app = express();
const port = process.env.PORT || 9000;
const blogs = require("./blogs.json");
const comment = require("./data");

app.use(cors());
app.use(bodyparser.json());

app.get("/getBlogs", (req, res) => {
  res.status(200).send(blogs);
});

app.get("/getComments", (req, res) => {
  res.status(200).send(comment);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
