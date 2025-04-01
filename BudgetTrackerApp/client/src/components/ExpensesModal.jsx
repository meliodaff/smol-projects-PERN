import { useState } from "react";
import AccountModal from "./AccountModal";
function IncomeModal(props) {
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);

  return (
    <>
      <div
        className="modal"
        tabIndex="-1"
        style={{ display: "block", backgroundColor: "rgba(0, 0, 0, .5)" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Im the expense modal</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={props.onClose}
              ></button>
            </div>
            <div className="modal-body body-container">
              {/* gawan ko naw lang siguro ng sariling modal pag pipili ng account and category */}
              <div className="account-container">
                <button
                  className="btn account-btn"
                  onClick={() => setShowAccountModal(true)}
                >
                  <img src="/images/wallet-solid.svg" />
                  Account
                </button>
              </div>
              <div className="category-container"></div>
              <button className="btn category-btn">
                <img src="/images/table-list-solid.svg" />
                Category
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
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {showAccountModal && (
        <AccountModal onClose={() => setShowAccountModal(false)} />
      )}
    </>
  );
}

export default IncomeModal;
