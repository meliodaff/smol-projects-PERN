import { useState } from "react";
import IncomeModal from "./IncomeModal";
import ExpensesModal from "./ExpensesModal";
import TransferModal from "./TransferModal";
function AddModal(props) {
  const [showIncomeModal, setShowIncomeModal] = useState(false);
  const [showExpensesModal, setShowExpensesModal] = useState(false);
  const [showTransferModal, setShowTransferModal] = useState(false);
  return (
    <>
      <div
        className="modal"
        tabIndex="-1"
        style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <p>im the add modal</p>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={props.onClose}
              ></button>
            </div>
            <div className="modal-body body-container">
              <button
                className="btn btn-success icon-btn"
                onClick={() => setShowIncomeModal(true)}
              >
                Income
              </button>
              <button
                className="btn btn-danger icon-btn"
                onClick={() => setShowExpensesModal(true)}
              >
                Expenses
              </button>
              <button
                className="btn btn-warning icon-btn"
                onClick={() => setShowTransferModal(true)}
              >
                Transfer
              </button>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={props.onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {showIncomeModal && (
        <IncomeModal onClose={() => setShowIncomeModal(false)} />
      )}
      {showExpensesModal && (
        <ExpensesModal onClose={() => setShowExpensesModal(false)} />
      )}
      {showTransferModal && (
        <TransferModal onClose={() => setShowTransferModal(false)} />
      )}
    </>
  );
}

export default AddModal;
