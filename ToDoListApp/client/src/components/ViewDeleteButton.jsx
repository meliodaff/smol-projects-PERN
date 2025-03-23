import { useState } from "react";
import ViewDeleteModal from "./ViewDeleteModal";
function ViewDeleteButton() {
  const [showRemovedTasks, setShowRemovedTasks] = useState(false);
  function handleClick() {
    setShowRemovedTasks(true);
  }
  function onClose() {
    setShowRemovedTasks(false);
    console.log("im here");
  }
  return (
    <>
      <button onClick={handleClick}>View Removed Tasks</button>
      {showRemovedTasks && <ViewDeleteModal onClose={onClose} />}
    </>
  );
}

export default ViewDeleteButton;
