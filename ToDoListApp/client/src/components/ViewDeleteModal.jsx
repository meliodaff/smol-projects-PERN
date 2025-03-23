import DeletedTasks from "./DeletedTasks";
import useFetchDeletedTasks from "../services/fetchDeletedTasks";
import { useEffect } from "react";
function ViewDeleteModal(props) {
  const { removedTasks, fetchDeletedTasks } = useFetchDeletedTasks();

  useEffect(() => {
    fetchDeletedTasks();
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
              <h5 className="modal-title">Removed Tasks</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={props.onClose}
              ></button>
            </div>
            <div className="modal-body">
              <table className="table table-danger">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">UniqueID</th>
                    <th scope="col">Task</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                {removedTasks.map((removedTasks, index) => (
                  <DeletedTasks
                    key={index}
                    count={index + 1}
                    uniqueID={removedTasks.id}
                    task={removedTasks.task}
                    status={removedTasks.status}
                  />
                ))}
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
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewDeleteModal;
