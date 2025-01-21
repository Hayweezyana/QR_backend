const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

let visitorCount = 0;

const COLORS = ["RED", "BLUE", "GREEN", "YELLOW", "ORANGE", "PURPLE"];

app.use(cors());

app.get("/get-color", (req, res) => {
  visitorCount++;
  const index = Math.floor((visitorCount - 1) / 5) % COLORS.length;
  const color = COLORS[index];
  res.json({ color, visitorCount });
});

app.listen(port, () => {
  console.log(`Server running at https://qr-server-uxza.onrender.com:${port}`);
});
