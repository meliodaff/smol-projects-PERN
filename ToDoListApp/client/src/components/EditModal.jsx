import { useState } from "react";
import usePatchTask from "../services/patchTask";
function EditModal(props) {
  const [editTask, setEditTask] = useState(props.task);
  const [idTask, setIdTask] = useState(props.idTask);
  const { patchTask } = usePatchTask();

  function handleChangeId(event) {
    setIdTask(event.target.value);
  }

  function handleChange(event) {
    setEditTask(event.target.value);
  }

  function handleClick() {
    patchTask(idTask, editTask);
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
            <h5 className="modal-title">Edit Task</h5>
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
                placeholder="Id"
                value={idTask}
                onChange={handleChangeId}
                disabled
              />
              <input
                type="text"
                className="form-control"
                style={{ fontSize: "24px", padding: "12px 16px" }}
                placeholder="Task"
                value={editTask}
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

export default EditModal;
