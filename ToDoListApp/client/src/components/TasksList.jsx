import TableHeader from "./TableHeader";
import Tasks from "./TableRows";
import useFetchTasks from "../services/fetchTasks";
import { useEffect, useState } from "react";
import EditModal from "./EditModal";
import useDoneTask from "../services/doneTask";
import TasksDoneModal from "./TasksDoneModal";

function TasksList() {
  const { tasks, fetchTasks } = useFetchTasks();
  const [showEditModal, setShowEditModal] = useState(false);
  const [task, setTask] = useState("");
  const [idTask, setIdTask] = useState("");
  const { doneTask } = useDoneTask();
  useEffect(() => {
    fetchTasks();
    console.log("fetching tasks");
  }, [tasks]);
  return (
    <>
      <table className="table table-success table-bordered table-l">
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
              doneTask(task.id);
            }}
            secondOnClick={() => {
              console.log("second button has been clicked");
              setShowEditModal(true);
              setIdTask(task.id);
              setTask(task.task);
            }}
            thirdOnClick={() => {}}
          />
        ))}
      </table>
      {showEditModal && (
        <EditModal
          idTask={idTask}
          task={task}
          onClose={() => setShowEditModal(false)}
        />
      )}
    </>
  );
}

export default TasksList;
