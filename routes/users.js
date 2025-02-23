import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();
const users = [];

// GET request to fetch users
router.get("/", (req, res) => {
  console.log(users);
  res.json(users);
});

// POST request to add a user
router.post("/", (req, res) => {
  console.log(req.body);
  const user = req.body;

  users.push({ ...user, id: uuidv4() }); // Ensure `user` is directly spread
  res.json({
    status: "success",
    message: "User added successfully",
    user,
  });
});


// GET request to fetch a user by ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);

  if (!foundUser) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(foundUser);
});

export default router;
