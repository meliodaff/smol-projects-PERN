import axios from "axios";
import { useState } from "react";

const API_URL = "http://localhost:3000";
function useFetchDeletedTasks() {
  const [removedTasks, setRemovedTasks] = useState([]);
  async function fetchDeletedTasks() {
    try {
      const result = await axios.get(`${API_URL}/DeletedTasks`);
      setRemovedTasks(result.data);
    } catch (err) {
      console.log(err.stack);
    }
  }
  return { removedTasks, fetchDeletedTasks };
}

export default useFetchDeletedTasks;
