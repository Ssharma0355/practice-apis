import express from "express";
import bodyParser from "body-parser"; // Allows handling JSON data
import UserRoutes from "./routes/users.js"; // Ensure correct filename

const app = express();
const PORT = 5050;

app.use(bodyParser.json()); // Place this before routes

app.use("/users", UserRoutes); // Use the user route

app.get("/", (req, res) => {
  res.send("Routes are working");
  console.log("Routes are working on index.js");
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
