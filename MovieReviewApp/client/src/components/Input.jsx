function Input(props) {
  return (
    <>
      <input
        type="search"
        className="form-control form-control-dark text-bg-dark"
        placeholder={props.placeholder}
        aria-label="Search"
        value={props.input}
        onChange={props.getUserInput}
      />
    </>
  );
}

export default Input;
