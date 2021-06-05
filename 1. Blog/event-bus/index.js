const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const events = [];

const serviceURLs = [
  "http://posts-clusterip-srv:4000",
  "http://comment-srv:4001",
  "http://query-srv:4002",
  "http://moderation-srv:4003",
];

app.post("/events", (req, res) => {
  const event = req.body;

  console.log(`Event: ${event.type}`);

  events.push(event);

  serviceURLs.forEach((url) => {
    axios.post(url, event).catch((e) => console.log("Error: ", url));
  });

  res.send({ sstatus: "ok" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log("event-bus listening on port 4005 🚀");
});
