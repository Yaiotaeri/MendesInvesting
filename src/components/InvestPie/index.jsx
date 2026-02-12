import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

const COLORS = ['#4ade80', '#60a5fa', '#f472b6', '#facc15', '#a78bfa']

export default function InvestPie({ data }) {
  if (!data || Object.keys(data).length === 0) {
    return <p style={{ opacity: 0.6 }}>Sem dados</p>
  }

  const chartData = Object.entries(data).map(([name, value]) => ({
    name,
    value,
  }))

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={chartData} dataKey="value" nameKey="name" label>
          {chartData.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )
}
