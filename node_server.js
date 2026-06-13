import express from "express";

const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
  res.json({ message: "Server is Healthy v1 !!" });
});

app.listen(PORT, () => {
  console.log("Server Started Running !!");
});
