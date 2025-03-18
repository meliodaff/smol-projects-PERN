import axios from "axios";

const API_URL = "http://localhost:3000";

function usePatchTask() {
  async function patchTask(id, task) {
    try {
      const result = await axios.patch(`${API_URL}/datas`, {
        id,
        task,
      });
      console.log(result);
    } catch (err) {
      console.log(err.stack);
    }
  }
  return { patchTask };
}

export default usePatchTask;
