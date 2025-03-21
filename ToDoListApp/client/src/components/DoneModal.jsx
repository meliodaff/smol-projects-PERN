function DoneModal(props) {
  return (
    <div
      className="modal show"
      tabIndex="-1"
      style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Mark task as done</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={props.onClick}
            ></button>
          </div>
          <div className="modal-body">
            <p>
              Are you sure you want to mark as done the task{" "}
              <b>'{props.task}'</b>?
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={props.onClick}
            >
              No
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                props.handleDone();
                props.onClick();
              }}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoneModal;
