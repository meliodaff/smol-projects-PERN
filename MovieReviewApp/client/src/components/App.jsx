import Header from "./Header";
import Movies from "./Movies";
function App() {
  return (
    <>
      <Header />
      <div className="card-container">
        <Movies />
      </div>
    </>
  );
}

export default App;
