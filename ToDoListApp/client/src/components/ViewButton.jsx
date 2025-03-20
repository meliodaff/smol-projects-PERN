import { useState } from "react";
import useFetchDoneTasks from "../services/fetchDoneTasks";
import TasksDoneModal from "./TasksDoneModal";

function ViewButton() {
  const [showDoneModal, setShowDoneModal] = useState(false);

  function handleClick() {
    setShowDoneModal(true);
  }

  return (
    <>
      <button onClick={handleClick}>View Done Tasks</button>
      {showDoneModal && (
        <TasksDoneModal onClose={() => setShowDoneModal(false)} />
      )}
    </>
  );
}

export default ViewButton;
