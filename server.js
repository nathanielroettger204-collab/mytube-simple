const express = require("express");
const app = express();

app.use(express.json());

let videos = [];

app.get("/", (req, res) => {
  res.send("MyTube is running!");
});

app.get("/videos", (req, res) => {
  res.json(videos);
});

app.post("/add", (req, res) => {
  videos.push(req.body);
  res.json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
