import { useEffect, useState } from "react";
import AccountModal from "./AccountModal";
import CategoryModal from "./CategoryModal";
import Input from "./Input";
import useInsertExpense from "../services/useInsertExpense";

function IncomeModal(props) {
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [accountValue, setAccountValue] = useState("Account");
  const [categoryValue, setCategoryValue] = useState("Category");
  const [notesValue, setNotesValue] = useState("");
  const [expenseValue, setExpenseValue] = useState("");
  const [save, setSave] = useState(false);
  const { response, insertExpense } = useInsertExpense();

  async function handleInsertExpense() {
    console.log("clicked");
    const data = {
      account: accountValue,
      category: categoryValue,
      notes: notesValue,
      expense: expenseValue,
    };
    await insertExpense(data).then(() => {
      console.log(response); // LAGING UNDEFINED TO BASED DUN SA USEINSERTEXPENSE STATE NYA
      if (response) {
        console.log("successfully inserted");
      } else {
        console.log("something went wrong");
      }
      props.onClose();
    });
  }

  // fix this at home
  useEffect(() => {
    console.log(accountValue);
    console.log(categoryValue);
    if (accountValue !== "Account" && categoryValue !== "Category") {
      console.log(accountValue);
      console.log(categoryValue);
      setSave(true);
    } else if (!accountValue && !categoryValue) {
      setSave(false);
    }
    console.log(response);
  }, [response]);

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
              <div className="category-container">
                <button
                  className="btn category-btn"
                  onClick={() => setShowCategoryModal(true)}
                >
                  <img src="/images/table-list-solid.svg" />
                  Category
                </button>
              </div>
            </div>
            <Input
              accountValue={accountValue}
              categoryValue={categoryValue}
              notesValue={notesValue}
              expenseValue={expenseValue}
              setNotesValue={setNotesValue}
              setExpenseValue={setExpenseValue}
            />
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={props.onClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleInsertExpense}
              >
                Save changes
              </button>
              {/* {save ? (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleInsertExpense}
                >
                  Save changes
                </button>
              ) : (
                <button type="button" className="btn btn-primary" disabled>
                  Save changes
                </button>
              )} */}
            </div>
          </div>
        </div>
      </div>
      {showAccountModal && (
        <AccountModal
          setAccountValue={setAccountValue}
          onClose={() => setShowAccountModal(false)}
        />
      )}
      {showCategoryModal && (
        <CategoryModal
          setCategoryValue={setCategoryValue}
          onClose={() => setShowCategoryModal(false)}
        />
      )}
    </>
  );
}

export default IncomeModal;
// LAGYAN NG VALIDATION NA DAPAT REQUIRED LAGYAN NG EXPENSE OR DAPAT MORE THAN OR EQUAL 1 YUNG VALUE. LAGYAN DIN NG MODAL KUNG SUCCESSFULLY INSERTED BA YUNG DATAS NATIN AND KUNG HINDI
