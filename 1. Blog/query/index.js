const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());

app.use(cors());

const posts = {};

const events = {
  CommentCreated: (data) => {
    const { postId, status, id } = data;
    if (!posts[postId]) return;

    const comments = posts[postId].comments;

    comments.push({ postId, status, id });
  },
  PostCreated: (data) => {
    posts[data.id] = { id: data.id, title: data.title, comments: [] };
  },
  CommentUpdated: (data) => {
    const { id, postId, content, status } = data;
    console.log("Updated");

    if (!posts[postId]) return;

    const comment = posts[postId].comments.find(
      (currentComment) => currentComment.id === id
    );

    Object.assign(comment, { status, content });
  },
};

app.get("/query/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  if (!events[type]) return res.status(404).send();

  events[type](data);

  res.send({});
});

app.listen(4002, async () => {
  const { data: events } = await axios.get("http://event-bus-srv:4005/events");

  events.forEach((event) => {
    events[event.type](event.data);
  });

  console.log("query listening on port 4002 🚀");
});
