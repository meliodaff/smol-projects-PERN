import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000";

function useFetchTasks() {
  const [tasks, setTasks] = useState([]);

  async function fetchTasks() {
    try {
      const response = await axios.get(`${API_URL}/datas`);
      setTasks(response.data);
      //   console.log(response.data);
    } catch (err) {
      console.log(err.stack);
    }
  }
  return { tasks, fetchTasks };
}

export default useFetchTasks;
