const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const servicePorts = [4000, 4001, 4002];

app.post("/events", (req, res) => {
  const event = req.body;

  console.log("Event recieved");

  servicePorts.forEach((port) => {
    axios
      .post(`http://localhost:${port}/events`, event)
      .catch((e) => console.log("Error port: ", port));
  });

  res.send({ sstatus: "ok" });
});

app.listen(4005, () => {
  console.log("event-bus listening on port 4005 🚀");
});
