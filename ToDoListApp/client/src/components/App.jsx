import TasksList from "./TasksList";
import AddButton from "./AddButton";

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
      </div>
      <TasksList />
    </>
  );
}

export default App;
