const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = process.env.PORT || 5000;

const ips = [];

app.get("/", (req, res) => {
  if (ips.includes(req.ip)) {
    res.send({ success: false, error: "You have already used our service " });
  } else {
    res.send({ success: true, message: "You can try " });
    ips.push(req.ip);
  }
});

app.listen(port, (req, res) => {
  console.log("server running on port", port);
});
