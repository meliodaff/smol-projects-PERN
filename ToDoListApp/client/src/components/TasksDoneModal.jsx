import { useEffect, useState } from "react";
import useFetchDoneTasks from "../services/fetchDoneTasks";
import TaskDone from "./TasksDone";

function TasksDoneModal(props) {
  const { doneTasks, fetchDoneTasks } = useFetchDoneTasks();

  useEffect(() => {
    fetchDoneTasks();
  }, []);
  return (
    <>
      <div
        className="modal show"
        tabIndex="-1"
        style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Done Tasks</h5>
              <button
                type="button"
                className="btn-close"
                onClick={props.onClose}
                aria-label="Close"
              ></button>
            </div>
            <form>
              <div className="modal-body">
                <table className="table table-info">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Unique ID</th>
                      <th scope="col">Task</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  {doneTasks.map((doneTask, index) => {
                    return (
                      <TaskDone
                        key={index}
                        count={index + 1}
                        uniqueID={doneTask.id}
                        task={doneTask.task}
                        status={doneTask.status}
                      />
                    );
                  })}
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={props.onClose}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default TasksDoneModal;

// i think kailangang gawing TasksDone to then create separate Modal for it
