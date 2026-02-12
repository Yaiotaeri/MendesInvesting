import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

export default function GraphicRow({ gastos }) {
  const labels = gastos.map(g =>
    new Date(g.data + "T00:00").toLocaleDateString()
  );

  const values = gastos.map(g =>
    g.situacion === "Entrada" ? g.valor : -g.valor
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Fluxo de Caixa",
        data: values,
        backgroundColor: values.map(v =>
          v > 0 ? "#22c55e" : "#ef4444"
        ),
      },
    ],
  };

  return (
    <div style={{ width: "90%", margin: "40px auto" }}>
      <Bar data={data} />
    </div>
  );
}
