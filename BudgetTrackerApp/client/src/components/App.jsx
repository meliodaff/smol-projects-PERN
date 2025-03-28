import Sidebar from "./Sidebar";
import Chart from "./Chart";
import { Bar, Doughnut, Line, Pie, Bubble, PolarArea } from "react-chartjs-2";
function App() {
  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="d-flex flex-wrap p-4 gap-4 flex-grow-1">
          <div className="chart-container">
            <Chart type={Bar} />
          </div>
          <div className="chart-container">
            <Chart type={Doughnut} />
          </div>
          <div className="chart-container">
            <Chart type={Line} />
          </div>
          <div className="chart-container">
            <Chart type={Pie} />
          </div>
          <div className="chart-container">
            <Chart type={Bubble} />
          </div>
          <div className="chart-container">
            <Chart type={PolarArea} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
