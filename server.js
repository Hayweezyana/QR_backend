const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(express.static(path.join(__dirname, "public")));

let visitorCount = 0;

const COLORS = ["RED-1", "BLUE-2", "GREEN-3", "ORANGE-4"];

app.use(cors());

app.get("/get-color", (req, res) => {
  visitorCount++;
  const index = Math.floor((visitorCount - 1) / 7) % COLORS.length;
  const color = COLORS[index];
  res.json({ color, visitorCount });
});

app.listen(port, () => {
  console.log(`Server running at https://qr-server-uxza.onrender.com`);
});
