const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "myapp-backend"
  });
});

app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello from backend"
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
