import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send([
    { id: 1, firstName: "Jay" },
    { id: 2, firstName: "Nea" },
  ]);
});

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`server running at port ${port}`);
});
