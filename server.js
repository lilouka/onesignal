const express = require("express");
const path = require("path");

const app = express();
const port = 8000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  if (req.url.endsWith(".js")) {
    res.setHeader("Content-Type", "text/javascript");
    res.setHeader("Cache-Control", "public, max-age=31536000"); // Cache for 1 year
  }
  next();
});

// Serve the index.html file at the root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Create HTTP server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
