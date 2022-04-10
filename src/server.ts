import express from "express";
const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log(`Server is running 🚀`);
});
