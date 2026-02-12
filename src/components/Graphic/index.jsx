import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Graphic({ gastos }) {
  const entradas = gastos
    .filter(g => g.situacion === "Entrada")
    .reduce((acc, g) => acc + g.valor, 0);

  const saidas = gastos
    .filter(g => g.situacion === "Saida")
    .reduce((acc, g) => acc + g.valor, 0);

  const data = {
    labels: ["Entradas", "Saídas"],
    datasets: [
      {
        data: [entradas, saidas],
        backgroundColor: ["#22c55e", "#ef4444"],
      },
    ],
  };

  return (
    <div style={{ width: "350px", margin: "30px auto" }}>
      <Pie data={data} />
    </div>
  );
}
