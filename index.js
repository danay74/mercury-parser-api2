const express = require("express");
const Mercury = require("@postlight/mercury-parser");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/parser", async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: "Missing ?url=" });

  try {
    const result = await Mercury.parse(url);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to parse article", detail: err.message });
  }
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
