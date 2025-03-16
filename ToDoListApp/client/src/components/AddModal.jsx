import { useEffect, useState } from "react";
import usePostTask from "../services/postTask";
import useFetchTasks from "../services/fetchTasks";

function AddModal(props) {
  const [task, setTask] = useState("");
  const { postTask, result } = usePostTask();
  const { tasks, fetchTasks } = useFetchTasks();
  function handleClick() {
    // console.log("saved");

    postTask(task).then(() => {
      fetchTasks();
    });
  }

  function handleChange(event) {
    setTask(event.target.value);
  }
  return (
    <div
      className="modal show"
      tabIndex="-1"
      style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Task</h5>
            <button
              type="button"
              className="btn-close"
              onClick={props.onClose}
              aria-label="Close"
            ></button>
          </div>
          <form>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                style={{ fontSize: "24px", padding: "12px 16px" }}
                placeholder="Task"
                value={task}
                onChange={handleChange}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={props.onClose}
              >
                Close
              </button>
              <button
                onClick={() => {
                  handleClick();
                  props.onClose();
                }}
                type="button"
                className="btn btn-primary"
              >
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddModal;
