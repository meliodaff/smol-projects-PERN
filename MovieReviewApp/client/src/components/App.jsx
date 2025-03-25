import { useState } from "react";
import Header from "./Header";
import Movies from "./Movies";
function App() {
  const [input, setInput] = useState("");
  return (
    <>
      <Header userInput={setInput} />{" "}
      {/* step 2: kung anu man yung value ng input natin from the step 1 is maipapasa sa input state natin dito sa taas kasi setState yung na sa arguments */}
      <div className="card-container">
        <Movies userInput={input} />{" "}
        {/* step 3: then yung value ng state natin is mapupunta rito */}
      </div>
    </>
  );
}

export default App;
