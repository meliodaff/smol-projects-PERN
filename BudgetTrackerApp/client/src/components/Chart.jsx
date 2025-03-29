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
  RadialLinearScale,
} from "chart.js";
import sourceData from "../data/sourceData.json";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  RadialLinearScale
);
function Chart(props) {
  // console.log(sourceData[0].data);
  return (
    <>
      <div>
        <props.type
          data={{
            labels: sourceData.map((value) => value.source),
            datasets: [
              {
                label: "Income",
                data: sourceData.map((value) => value.income),
                // data: [10000, 5000, 2000],
                backgroundColor: ["rgba(0, 0, 255, .2)"],
                borderColor: "rgb(0, 0, 255)",
                borderRadius: 5,
                borderWidth: 1,
              },
              {
                label: "Expenses",
                data: sourceData.map((value) => value.expenses),
                backgroundColor: ["rgba(255, 0, 0, .1)"],
                borderColor: "rgb(255, 0, 0)",
                borderWidth: 1,
                borderRadius: 5,
              },
            ],
          }}
        />
      </div>
    </>
  );
}

export default Chart;
