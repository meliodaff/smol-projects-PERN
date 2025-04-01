function AddButton(props) {
  return (
    <>
      <div className="add-button-container">
        <button className="add-button" onClick={props.onClick}>
          +
        </button>
      </div>
    </>
  );
}

export default AddButton;
