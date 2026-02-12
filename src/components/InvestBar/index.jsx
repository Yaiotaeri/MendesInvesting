import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

export default function InvestBar({ portfolio }) {
  if (!portfolio || Object.keys(portfolio).length === 0) {
    return <p style={{ opacity: 0.6 }}>Sem dados</p>
  }

  const data = []

  Object.values(portfolio).forEach((types) => {
    Object.values(types).forEach((products) => {
      Object.entries(products).forEach(([product, info]) => {
        data.push({
          name: product,
          value: info.total,
        })
      })
    })
  })

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#60a5fa" />
      </BarChart>
    </ResponsiveContainer>
  )
}
