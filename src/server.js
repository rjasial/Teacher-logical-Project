import express from "express";
import path from "path";

const app = express();
const PORT = 3000;

// Serve everything from project root
app.use(express.static(process.cwd()));

app.listen(PORT, () => {
  console.log(`✅ Dashboard running at http://localhost:${PORT}/dashboard.html`);
});
