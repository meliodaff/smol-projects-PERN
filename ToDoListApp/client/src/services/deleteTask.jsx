import axios from "axios";
import { useState } from "react";

const API_URL = "http://localhost:3000";
function useDeleteTask() {
  const [result, setResult] = useState("");
  async function deleteTask1(id) {
    try {
      const response = await axios.delete(`${API_URL}/datas`, {
        data: { id },
      });
      setResult(response.data);
    } catch (err) {
      console.log(err.stack);
    }
  }
  return { result, deleteTask1 };
}

export default useDeleteTask;
