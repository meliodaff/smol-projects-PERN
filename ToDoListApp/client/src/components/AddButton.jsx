import AddModal from "./AddModal";
import { useState } from "react";
import useFetchTasks from "../services/fetchTasks";

function AddButton() {
  const [showModal, setShowModal] = useState(false);
  const { tasks, fetchTasks } = useFetchTasks();

  function handleClick() {
    // console.log("added");
    setShowModal(true);
  }

  return (
    <>
      <button onClick={handleClick}>Add</button>
      {showModal && <AddModal onClose={() => setShowModal(false)} />}
    </>
  );
}

export default AddButton;
