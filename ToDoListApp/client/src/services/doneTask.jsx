import axios from "axios";
const API_URL = "http://localhost:3000";
function useDoneTask() {
  async function doneTask(id) {
    try {
      const result = await axios.patch(`${API_URL}/done`, {
        id,
      });
      return result;
    } catch (err) {
      console.log(err.stack);
    }
  }
  return { doneTask };
}

export default useDoneTask;
