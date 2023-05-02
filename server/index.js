const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
const cors = require("cors");

app.use(cors());

app.get("/api/books", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Körlük",
    },
    {
      id: 2,
      name: "Görmek",
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
