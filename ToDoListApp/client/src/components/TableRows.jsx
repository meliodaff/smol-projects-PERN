function Tasks(props) {
  return (
    <>
      <tbody>
        <tr>
          <th scope="row">{props.count}</th>
          <td>{props.uniqueID}</td>
          <td>{props.task}</td>
          <td>{props.status}</td>
          <td>{props.created_at}</td>
          <td>
            <button className="mx-1" onClick={props.firstOnClick}>
              {props.firstButton}
            </button>
            <button className="mx-1" onClick={props.secondOnClick}>
              {props.secondButton}
            </button>
            <button className="mx-1" onClick={props.thirdOnClick}>
              {props.thirdButton}
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
}

export default Tasks;
