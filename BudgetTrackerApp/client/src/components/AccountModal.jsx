import { useState } from "react";

function AccountModal({ onClose, setAccountValue }) {
  const [account, setAccount] = useState("");

  function handleClick(event) {
    setAccount(event.target.value);
    setAccountValue(event.target.value);
    console.log(event.target.value);
    onClose();
  }
  return (
    <div
      className="modal"
      tabIndex="-1"
      style={{ display: "block", backgroundColor: "rgba(0, 0, 0, .5)" }}
    >
      <div className="modal-dialog" style={{ marginTop: "160px" }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Im the Account modal</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div
            className="modal-body"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <button
              className="btn card-btn"
              value="Card"
              onClick={handleClick}
              style={{ marginRight: "10px" }}
            >
              <img src="/images/credit-card-solid.svg" className="icons" />
              Card
            </button>
            <button
              className="btn cash-btn"
              value="Cash"
              onClick={handleClick}
              style={{ marginRight: "10px" }}
            >
              <img src="/images/money-bills-solid.svg" className="icons" />
              Cash
            </button>
            <button
              className="btn savings-btn"
              value="Savings"
              onClick={handleClick}
            >
              <img src="/images/piggy-bank-solid.svg" className="icons" />
              Savings
            </button>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountModal;
