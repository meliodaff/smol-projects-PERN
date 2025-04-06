import { useState } from "react";

function Input(props) {
  const [value, setValue] = useState("");
  return (
    <>
      <div className="input-container">
        <input
          className="input-area"
          disabled
          placeholder="Account"
          value={props.accountValue || ""}
        />
        {/* ITS SAYING THAT ITS UNTCONTROLLED COMPONENT LOL */}
        <input
          className="input-area"
          disabled
          placeholder="Category"
          value={props.categoryValue || ""}
        />
      </div>
      <textarea
        className="text-area"
        placeholder="add notes"
        value={props.notesValue}
        onChange={(event) => props.setNotesValue(event.target.value)}
      ></textarea>
      <div className="input-money-container">
        <input
          type="number"
          className="input input-money"
          placeholder="₱0"
          required
          value={props.expenseValue}
          onChange={(event) => props.setExpenseValue(event.target.value)}
        />
      </div>
    </>
  );
}

export default Input;
