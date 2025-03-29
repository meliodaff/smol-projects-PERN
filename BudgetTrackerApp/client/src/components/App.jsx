import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Analysis from "../pages/Analysis";
import Dashboard from "../pages/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Analysis" element={<Analysis />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
