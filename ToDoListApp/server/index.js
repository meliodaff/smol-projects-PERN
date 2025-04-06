import express from "express";
import pg from "pg";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const db = new pg.Client({
  user: process.env.USERDB,
  host: process.env.HOSTDB,
  database: process.env.DB,
  password: process.env.PASSWORDDB,
  port: process.env.PORTDB,
});

db.connect();

const app = express();
const port = process.env.PORT;

const corsOptions = [
  {
    origin: "http://localhost:5173",
  },
];
app.use(cors(corsOptions));
// DI KO ALAM BAKIT GUMAGANA PA RIN KAHIT TINANGGAL KO NA CORS,,
// uncomment ko na lang, may time na nag nnetwork error eh
app.use(express.json());

async function getTasks() {
  try {
    const tasks = await db.query(
      "SELECT id, task, status, TO_CHAR(created_at, 'YYYY-MM-DD HH24:MI:SS') AS created_at FROM tasks WHERE status = 'Pending' ORDER BY id ASC;"
    );
    return tasks.rows;
  } catch (err) {
    console.log(err.stack);
  }
}

async function postTask(task) {
  try {
    const result = await db.query("INSERT INTO tasks (task) VALUES ($1)", [
      task,
    ]);
    return result.rowCount > 0;
  } catch (err) {
    console.log(err.stack);
  }
}

async function editTask(id, task) {
  try {
    const response = await db.query(
      "UPDATE tasks SET task = $1 WHERE id = $2",
      [task, id]
    );
    return response.rowCount > 0;
  } catch (err) {
    console.log(err.stack);
  }
}

async function doneTask(id) {
  try {
    const result = await db.query(
      "UPDATE tasks SET status = 'Completed' WHERE id = $1",
      [id]
    );
    return result.rowCount > 0;
  } catch (err) {
    console.log(err.stack);
  }
}

async function getDoneTasks() {
  try {
    const tasks = await db.query(
      "SELECT id, task, status, TO_CHAR(created_at, 'YYYY-MM-DD HH24:MI:SS') AS created_at FROM tasks WHERE status = 'Completed' ORDER BY id ASC;"
    );
    return tasks.rows;
  } catch (err) {
    console.log(err.stack);
  }
}

async function deleteTask(id) {
  try {
    const response = await db.query(
      "UPDATE tasks SET status = 'Removed' WHERE id = $1",
      [id]
    );
    return response.rowCount > 0;
  } catch (err) {
    console.log(err.stack);
  }
}

async function fetchDeletedTasks() {
  try {
    const response = await db.query(
      "SELECT id, task, status, TO_CHAR(created_at, 'YYYY-MM-DD HH24:MI:SS') AS created_at FROM tasks WHERE status = 'Removed' ORDER BY id ASC;"
    );
    return response.rows;
  } catch (err) {
    console.log(err.stack);
  }
}

app.get("/datas", async (req, res) => {
  const tasks = await getTasks();
  res.json(tasks);
});

app.post("/datas", async (req, res) => {
  const { task } = req.body;
  const result = await postTask(task);
  res.json(result);
});

app.patch("/datas", async (req, res) => {
  const { id, task } = req.body;
  const result = await editTask(id, task);
  res.json(result);
});

app.patch("/done", async (req, res) => {
  const { id } = req.body;
  const result = await doneTask(id);
  res.json(result);
});

app.delete("/datas", async (req, res) => {
  const { id } = req.body;
  const result = await deleteTask(id);
  res.json(result);
});

app.get("/DoneTasks", async (req, res) => {
  const result = await getDoneTasks();
  res.json(result);
});

app.get("/DeletedTasks", async (req, res) => {
  const result = await fetchDeletedTasks();
  res.json(result);
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`server running at port ${port}`);
});
