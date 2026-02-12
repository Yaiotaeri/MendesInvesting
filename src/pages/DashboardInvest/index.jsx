import { useEffect, useState, useMemo } from 'react'
import { supabase } from '../../supabaseClient'
import Menu from '../../components/MenuClean'
import InvestPie from '../../components/InvestPie'
import InvestBar from '../../components/InvestBar'
import {
  Page,
  Title,
  Cards,
  Card,
  CardTitle,
  CardValue,
  Charts,
  ChartCard,
} from './styles'

export default function DashboardInvest() {
  const [invests, setInvests] = useState([])

  const [filterType, setFilterType] = useState('')
  const [filterBroker, setFilterBroker] = useState('')
  const [filterFrom, setFilterFrom] = useState('')
  const [filterTo, setFilterTo] = useState('')

  useEffect(() => {
    fetchInvests()
  }, [])

  async function fetchInvests() {
    const { data: auth } = await supabase.auth.getUser()
    if (!auth.user) return

    const { data } = await supabase
      .from('investments')
      .select('*')
      .eq('user_id', auth.user.id)

    setInvests(data || [])
  }

  // ========================
  // FILTRO
  // ========================
  const filteredInvests = useMemo(() => {
    return invests.filter((i) => {
      if (filterType && i.asset_type !== filterType) return false
      if (filterBroker && i.broker !== filterBroker) return false

      if (filterFrom && new Date(i.date) < new Date(filterFrom)) return false
      if (filterTo && new Date(i.date) > new Date(filterTo)) return false

      return true
    })
  }, [invests, filterType, filterBroker, filterFrom, filterTo])

  // ========================
  // TOTAL
  // ========================
  const total = useMemo(() => {
    return filteredInvests.reduce((acc, i) => acc + Number(i.amount), 0)
  }, [filteredInvests])

  // ========================
  // AGRUPAMENTOS
  // ========================
  const byClass = {}
  const byCurrency = {}

  filteredInvests.forEach((i) => {
    const amount = Number(i.amount)
    if (!i.asset_class || !i.currency) return

    byClass[i.asset_class] = (byClass[i.asset_class] || 0) + amount
    byCurrency[i.currency] = (byCurrency[i.currency] || 0) + amount
  })

  // ========================
  // PORTFOLIO
  // ========================
  const portfolio = {}

  filteredInvests.forEach((i) => {
    const cls = i.asset_class || 'Outros'
    const type = i.asset_type || 'Outros'
    const product = i.product || 'Desconhecido'
    const currency = i.currency || 'BRL'
    const broker = i.broker || 'N/A'
    const amount = Number(i.amount)

    if (!portfolio[cls]) portfolio[cls] = {}
    if (!portfolio[cls][type]) portfolio[cls][type] = {}
    if (!portfolio[cls][type][product]) {
      portfolio[cls][type][product] = {
        total: 0,
        currencies: {},
        brokers: {},
      }
    }

    const p = portfolio[cls][type][product]
    p.total += amount
    p.currencies[currency] = (p.currencies[currency] || 0) + amount
    p.brokers[broker] = (p.brokers[broker] || 0) + amount
  })

  // opções dos filtros
  const types = [...new Set(invests.map((i) => i.asset_type).filter(Boolean))]
  const brokers = [...new Set(invests.map((i) => i.broker).filter(Boolean))]

  return (
    <>
      <Menu />

      <Page>
        <Title>Dashboard de Investimentos</Title>

        {/* ===== FILTROS ===== */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '12px',
            marginBottom: '30px',
          }}
        >
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            style={{ padding: '10px', borderRadius: '10px', border: '1px solid #ccc' }}
          >
            <option value="">Todos os Tipos</option>
            {types.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>

          <select
            value={filterBroker}
            onChange={(e) => setFilterBroker(e.target.value)}
            style={{ padding: '10px', borderRadius: '10px', border: '1px solid #ccc' }}
          >
            <option value="">Todas Corretoras</option>
            {brokers.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>

          <input
            type="date"
            value={filterFrom}
            onChange={(e) => setFilterFrom(e.target.value)}
            style={{ padding: '10px', borderRadius: '10px', border: '1px solid #ccc' }}
          />
          <input
            type="date"
            value={filterTo}
            onChange={(e) => setFilterTo(e.target.value)}
            style={{ padding: '10px', borderRadius: '10px', border: '1px solid #ccc' }}
          />
        </div>

        {/* ===== CARDS ===== */}
        <Cards>
          <Card>
            <CardTitle>Total investido</CardTitle>
            <CardValue>R$ {total.toFixed(2)}</CardValue>
          </Card>
        </Cards>

        {/* ===== GRAFICOS ===== */}
        <Charts>
          <ChartCard>
            <h3>Distribuição por Classe</h3>
            <InvestPie data={byClass} />
          </ChartCard>

          <ChartCard>
            <h3>Distribuição por Ativo</h3>
            <InvestBar portfolio={portfolio} />
          </ChartCard>
        </Charts>

        {/* ===== CARTEIRA ===== */}
        <div style={{ marginTop: '50px' }}>
          <h2 style={{ color: '#000' }}>Carteira Detalhada</h2>

          {Object.entries(portfolio).map(([cls, types]) => (
            <div key={cls}>
              <h3
                style={{
                  color: '#000',
                  marginTop: '30px',
                  marginBottom: '0.5rem',
                }}
              >
                {cls}
              </h3>

              {Object.entries(types).map(([type, products]) => (
                <div key={type}>
                  <h4 style={{ color: '#555' }}>{type}</h4>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns:
                        'repeat(auto-fill,minmax(260px,1fr))',
                      gap: '16px',
                    }}
                  >
                    {Object.entries(products).map(([product, data]) => (
                      <div
                        key={product}
                        style={{
                          background: '#ffffff',
                          border: '1px solid #e5e7eb',
                          borderRadius: '16px',
                          padding: '16px',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '10px',
                          color: '#111827',
                          marginBottom: '0.5rem',
                        }}
                      >
                        <strong>{product}</strong>
                        <span style={{ fontSize: '18px', fontWeight: 700 }}>
                          R$ {data.total.toFixed(2)}
                        </span>

                        <div
                          style={{
                            display: 'flex',
                            gap: '6px',
                            flexWrap: 'wrap',
                          }}
                        >
                          {Object.entries(data.currencies).map(([c, v]) => (
                            <span
                              key={c}
                              style={{
                                background: '#eff6ff',
                                color: '#1d4ed8',
                                border: '1px solid #bfdbfe',
                                padding: '4px 10px',
                                borderRadius: '999px',
                                fontSize: '12px',
                              }}
                            >
                              {c}: {v.toFixed(2)}
                            </span>
                          ))}
                        </div>

                        <div
                          style={{
                            display: 'flex',
                            gap: '6px',
                            flexWrap: 'wrap',
                          }}
                        >
                          {Object.entries(data.brokers).map(([b, v]) => (
                            <span
                              key={b}
                              style={{
                                background: '#f0fdf4',
                                color: '#166534',
                                border: '1px solid #bbf7d0',
                                padding: '4px 10px',
                                borderRadius: '999px',
                                fontSize: '12px',
                              }}
                            >
                              {b}: {v.toFixed(2)}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Page>
    </>
  )
}
