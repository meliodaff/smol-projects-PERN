import axios from "axios";
import { useState } from "react";

const API_URL = "http://localhost:3000";
function usePostTask() {
  const [result, setResult] = useState("");
  async function postTask(task) {
    try {
      const response = await axios.post(`${API_URL}/datas`, {
        task,
      });
    } catch (err) {
      console.log(err.stack);
    }
  }
  return { postTask, result };
}

export default usePostTask;
