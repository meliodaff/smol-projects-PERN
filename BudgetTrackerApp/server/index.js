import express from "express";
import pg from "pg";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
const port = 3000;

dotenv.config();
app.use(cors());
app.use(express.json());

const db = new pg.Client({
  user: process.env.USERDB,
  host: process.env.HOSTDB,
  database: process.env.DATABASE,
  password: process.env.PASSWORDDB,
  port: process.env.PORTDB,
});

db.connect();

async function insertExpense(data) {
  try {
    const response = await db.query(
      `INSERT INTO expenses (account, category, notes, expense, user_id) VALUES ($1, $2, $3, $4, 5)`,
      [data.account, data.category, data.notes, data.expense]
    );
    return response.rowCount > 0;
  } catch (err) {
    console.log(err.stack);
  }
}

async function getUserIncome() {
  try {
    const response = await db.query(
      `SELECT i.income_id, i.income, i.type, i.notes , u.first_name || ' ' || u.last_name as full_name FROM income i JOIN users u ON i.user_id = u.id`
    );
    return response.rows;
  } catch (err) {
    console.log(err.stack);
  }
}

app.get("/api", async (req, res) => {
  try {
    const response = await getUserIncome();
    res.status(200).json({
      message: "successfully fetched",
      data: response,
    });
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ message: "an error has occured on getUserIncome" });
  }
});

app.post("/api", async (req, res) => {
  try {
    const data = req.body;
    const response = await insertExpense(data);
    res.status(200).json(response);
  } catch (err) {
    console.log(err.stack);
    res.status(500).json(err.stack);
  }
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`server running at port ${port}`);
});
