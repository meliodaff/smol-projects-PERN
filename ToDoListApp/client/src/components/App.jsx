import TasksList from "./TasksList";
import AddButton from "./AddButton";
import ViewButton from "./ViewButton";
import ViewDeleteButton from "./ViewDeleteButton";

function App() {
  return (
    <>
      <h1>My To Do List App</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "20px",
        }}
      >
        <AddButton />
        <ViewButton />
        <ViewDeleteButton />
      </div>
      <TasksList />
    </>
  );
}

export default App;
