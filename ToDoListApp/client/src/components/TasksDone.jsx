function TasksDone(props) {
  return (
    <>
      <tbody>
        <tr>
          <th scope="row">{props.count}</th>
          <td>{props.uniqueID}</td>
          <td>{props.task}</td>
          <td>{props.status}</td>
        </tr>
      </tbody>
    </>
  );
}

export default TasksDone;
