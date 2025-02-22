import express from "express";

const router = express.Router();

const users = [
  {
    name: "Sachin Sharma",
    email: "ssharma0355@gmail.com",
    phoneNumber: "9113704388",
  },
  {
    name: "John Doe",
    email: "john@yahoo.com",
    phoneNumber: "1234567890",
  }
];

const  mesageForPost = [
    {
        status:"success",
        message:"User added successfully"
    }
]

// GET request to fetch users
router.get("/", (req, res) => {
  console.log(users);
  res.json(users); // Send actual users instead of a message
});

router.post("/", (req, res) => {

res.send("Post Route reached");

console.log(req.body);
const user = req.body;
users.push(user);
res.send(mesageForPost);

}
);

export default router;
