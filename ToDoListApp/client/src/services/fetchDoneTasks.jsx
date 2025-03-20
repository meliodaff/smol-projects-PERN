import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000";

function useFetchDoneTasks() {
  const [doneTasks, setDoneTasks] = useState([]);

  async function fetchDoneTasks() {
    try {
      const response = await axios.get(`${API_URL}/DoneTasks`);
      setDoneTasks(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err.stack);
    }
  }
  return { doneTasks, fetchDoneTasks };
}

export default useFetchDoneTasks;
