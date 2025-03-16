import TableHeader from "./TableHeader";
import Tasks from "./TableRows";
import useFetchTasks from "../services/fetchTasks";
import { useEffect, useState } from "react";
function TasksList() {
  const { tasks, fetchTasks } = useFetchTasks();
  useEffect(() => {
    fetchTasks();
    console.log("fetching tasks");
  }, []);
  return (
    <table className="table">
      <TableHeader />
      {tasks.map((task, index) => (
        <Tasks
          key={index}
          count={index + 1}
          uniqueID={task.id}
          task={task.task}
          status={task.status}
          created_at={task.created_at}
          firstButton="Done"
          secondButton="Edit"
          thirdButton="Delete"
          firstOnClick={() => {
            //   console.log("first button has been clicked");
            console.log(task.id);
          }}
          secondOnClick={() => {
            console.log("second button has been clicked");
          }}
          thirdOnClick={() => {}}
        />
      ))}
    </table>
  );
}

export default TasksList;
