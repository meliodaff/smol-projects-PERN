import { useState } from "react";

function CategoryModal({ onClose, setCategoryValue }) {
  const [category, setCategory] = useState("");
  function handleClick(event) {
    setCategory(event.target.value);
    setCategoryValue(event.target.value);
    console.log(event.target.value);
    onClose();
  }
  return (
    <>
      <div
        className="modal"
        tabIndex="-1"
        style={{ display: "block", backgroundColor: "rgba(0, 0, 0, .5)" }}
      >
        <div className="modal-dialog" style={{ marginTop: "160px" }}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Im the Category modal</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <button
                className="btn card-btn"
                value="Bills"
                onClick={handleClick}
              >
                <img src="/images/dollar-sign-solid.svg" className="icons" />
                Bills
              </button>
              <button
                className="btn cash-btn"
                value="Education"
                onClick={handleClick}
              >
                <img src="/images/user-graduate-solid.svg" className="icons" />
                Education
              </button>
              <button
                className="btn savings-btn"
                value="Shopping"
                onClick={handleClick}
              >
                <img src="/images/cart-shopping-solid.svg" className="icons" />
                Shopping
              </button>
              <button
                className="btn savings-btn"
                value="Transportation"
                onClick={handleClick}
              >
                <img src="/images/train-subway-solid.svg" className="icons" />
                Transportation
              </button>
              <button
                className="btn savings-btn"
                value="Home"
                onClick={handleClick}
              >
                <img src="/images/house-solid (1).svg" className="icons" />
                Home
              </button>
              <button
                className="btn savings-btn"
                value="Food"
                onClick={handleClick}
              >
                <img src="/images/utensils-solid.svg" className="icons" />
                Food
              </button>
              <button
                className="btn savings-btn"
                value="Car"
                onClick={handleClick}
              >
                <img src="/images/car-solid.svg" className="icons" />
                Car
              </button>
              <button
                className="btn savings-btn"
                value="Health"
                onClick={handleClick}
              >
                <img src="/images/notes-medical-solid.svg" className="icons" />
                Health
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
    </>
  );
}

export default CategoryModal;
