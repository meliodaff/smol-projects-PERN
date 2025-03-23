import TableHeader from "./TableHeader";
import Tasks from "./TableRows";
import useFetchTasks from "../services/fetchTasks";
import { useEffect, useState } from "react";
import EditModal from "./EditModal";
import useDoneTask from "../services/doneTask";
import DoneModal from "./DoneModal";
import DeleteModal from "./DeleteModal";
import useDeleteTask from "../services/deleteTask";

function TasksList() {
  const { tasks, fetchTasks } = useFetchTasks();
  const [showEditModal, setShowEditModal] = useState(false);
  const [task, setTask] = useState("");
  const [idTask, setIdTask] = useState("");
  const { doneTask } = useDoneTask();
  const [showDoneModal, setShowDoneModal] = useState(false);
  const [markAsDoneID, setMarkAsDoneID] = useState();
  const [markAsDoneTask, setMarkAsDoneTask] = useState("");
  const [deleteId, setDeleteId] = useState();
  const [deleteTask, setDeleteTask] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { result, deleteTask1 } = useDeleteTask();
  useEffect(() => {
    fetchTasks();
    console.log("fetching tasks");
  }, [tasks]);

  function handleDone() {
    doneTask(markAsDoneID);
  }
  return (
    <>
      <table className="table table-bordered table-l">
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
              console.log("first button has been clicked");
              // doneTask(task.id);
              setShowDoneModal(true);
              setMarkAsDoneID(task.id);
              setMarkAsDoneTask(task.task);
            }}
            secondOnClick={() => {
              console.log("second button has been clicked");
              setShowEditModal(true);
              setIdTask(task.id);
              setTask(task.task);
            }}
            thirdOnClick={() => {
              console.log("third button has been clicked");
              setShowDeleteModal(true);
              setDeleteId(task.id);
              setDeleteTask(task.task);
            }}
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
      {showDoneModal && (
        <DoneModal
          task={markAsDoneTask}
          onClick={() => setShowDoneModal(false)}
          handleDone={handleDone}
        />
      )}
      {showDeleteModal && (
        <DeleteModal
          onClose={() => setShowDeleteModal(false)}
          deleteTask={deleteTask}
          handleDelete={() => {
            deleteTask1(deleteId);
            console.log("im here");
          }}
        />
      )}
    </>
  );
}

export default TasksList;
