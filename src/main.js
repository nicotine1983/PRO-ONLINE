const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: [
    "https://pro-online-2.onrender.com",
    "https://pro-online.fr",
    "https://www.pro-online.fr"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.get("/", (req, res) => {
  res.send("API running");
});

app.get("/api/health", (req, res) => {
  res.json({ status: "OK", app: "PRO ONLINE" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
