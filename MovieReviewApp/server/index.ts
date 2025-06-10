import express from "express";
import dotenv from "dotenv";
import axios from "axios";
import cors from "cors";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://movie-app-review-jeyv.netlify.app",
    ],
  })
);

app.get("/", (req, res) => {
  res.send("Server is up");
});

app.post("/movies", async (req, res) => {
  const { userInput } = req.body;
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${userInput}`
    );

    res.status(200).json({ message: response.data });
    return;
  } catch (error) {
    res.status(500).json({ message: "there was an error in fetching api" });
  }
});

app.post("/movie", async (req, res) => {
  const { certainMovie } = req.body;
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${certainMovie}`
    );

    res.status(200).json({ message: response.data });
    return;
  } catch (error) {
    res.status(500).json({ message: "there was an error in fetching api" });
  }
});

app.listen(port, (error) => {
  if (error) throw error;
  console.log(`server running at port ${port}`);
});
