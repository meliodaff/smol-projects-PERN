import axios from "axios";
import { useState } from "react";
function useInsertExpense() {
  const [response, setResponse] = useState();
  async function insertExpense(data) {
    try {
      const res = await axios.post("http://wwww.localhost:3000/api", data);
      setResponse(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err.stack);
    }
  }
  return { response, insertExpense };
}

export default useInsertExpense;
