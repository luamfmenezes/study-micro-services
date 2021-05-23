const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());

app.use(cors());

const posts = {};

const events = {
  CommentCreated: (data) => {
    if (posts[data.postId]) {
      posts[data.postId].comments.push({ id: data.id, content: data.content });
    }
  },
  PostCreated: (data) => {
    posts[data.id] = { id: data.id, title: data.title, comments: [] };
  },
};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  if (!events[type]) return res.status(404).send();

  events[type](data);

  res.send({});
});

app.listen(4002, () => {
  console.log("query listening on port 4002 🚀");
});
