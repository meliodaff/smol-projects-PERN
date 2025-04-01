function AccountModal(props) {
  return (
    <div
      className="modal"
      tabIndex="-1"
      style={{ display: "block", backgroundColor: "rgba(0, 0, 0, .5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Im the Account modal</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={props.onClose}
            ></button>
          </div>
          <div className="modal-body">
            <button className="btn card-btn">
              <img src="/images/credit-card-solid.svg" className="icons" />
              Card
            </button>
            <button className="btn cash-btn">
              <img src="/images/money-bills-solid.svg" className="icons" />
              Cash
            </button>
            <button className="btn savings-btn">
              <img src="/images/piggy-bank-solid.svg" className="icons" />
              Savings
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
  );
}

export default AccountModal;
