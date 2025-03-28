import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);
function Chart(props) {
  return (
    <>
      <div>
        <props.type
          data={{
            labels: ["A", "B", "C"],
            datasets: [
              {
                label: "Salary",
                data: [200, 300, 400],
                backgroundColor: ["rgba(0, 0, 255, 1)"],
              },
              {
                label: "Expenses",
                data: [50, 400, 80],
                backgroundColor: ["rgba(255, 0, 0, 1)"],
              },
            ],
          }}
        />
      </div>
    </>
  );
}

export default Chart;
