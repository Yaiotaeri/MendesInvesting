import Menu from '../../components/MenuClean'
import Graphic from '../../components/Graphic'
import { useEffect, useState } from 'react'
import { supabase } from '../../supabaseClient'
import {
  FilterWrapper,
  FilterButton,
  DateInput,
  TotalWrapper,
  TableWrapper,
  Table,
  MobileCard,
} from './styles'

export default function Dashboard() {
  const [gastos, setGastos] = useState([])
  const [filtro, setFiltro] = useState({
    situacion: '',
    startDate: '',
    endDate: '',
  })

  useEffect(() => {
    fetchGastos()
  }, [filtro])

  async function fetchGastos() {
    const { data: auth } = await supabase.auth.getUser()
    if (!auth.user) return

    let query = supabase
      .from('controlegastos')
      .select('*')
      .eq('user_id', auth.user.id)

    if (filtro.situacion) {
      query = query.eq('situacion', filtro.situacion)
    }

    if (filtro.startDate && filtro.endDate) {
      query = query.gte('data', filtro.startDate).lte('data', filtro.endDate)
    }

    const { data } = await query.order('data', { ascending: true })
    setGastos(data || [])
  }

  const total = gastos.reduce((acc, g) => {
    return g.situacion === 'Entrada' ? acc + g.valor : acc - g.valor
  }, 0)

 
  // DELETE
  async function handleDelete(id) {
    const confirmDelete = window.confirm('Deseja realmente excluir?')
    if (!confirmDelete) return

    const { error } = await supabase
      .from('controlegastos') // <<< TABELA CORRETA
      .delete()
      .eq('id', id)

    if (error) {
      alert('Erro ao excluir: ' + error.message)
      return
    }

    setGastos((prev) => prev.filter((i) => i.id !== id))
  }

  return (
    <>
      <Menu />
      <Graphic gastos={gastos} />

      <FilterWrapper>
        <DateInput
          type="date"
          onChange={(e) => setFiltro({ ...filtro, startDate: e.target.value })}
        />
        <DateInput
          type="date"
          onChange={(e) => setFiltro({ ...filtro, endDate: e.target.value })}
        />

        <FilterButton
          onClick={() => setFiltro({ ...filtro, situacion: 'Entrada' })}
        >
          Entrada
        </FilterButton>
        <FilterButton
          onClick={() => setFiltro({ ...filtro, situacion: 'Saida' })}
        >
          Saida
        </FilterButton>
        <FilterButton
          onClick={() =>
            setFiltro({ situacion: '', startDate: '', endDate: '' })
          }
        >
          Todos
        </FilterButton>
      </FilterWrapper>

      <TotalWrapper>Total: R$ {total.toFixed(2)}</TotalWrapper>

      {/* TABELA DESKTOp  */}
      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Situação</th>
              <th>Valor</th>
              <th>Obs</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {gastos.map((g) => (
              <tr key={g.id}>
                <td>{new Date(g.data + 'T00:00').toLocaleDateString()}</td>
                <td>{g.situacion}</td>
                <td>R$ {g.valor.toFixed(2)}</td>
                <td>{g.observacao}</td>
                <td>
                  <button
                    onClick={() => handleDelete(g.id)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '18px',
                      color: '#ef4444',
                    }}
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableWrapper>

      {/* MOBILE  */}
      {gastos.map((g) => (
        <MobileCard key={g.id} style={{ position: 'relative' }}>
          <button
            onClick={() => handleDelete(g.id)}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '18px',
              color: '#ef4444',
            }}
          >
            🗑️
          </button>

          <div>
            <strong>Data:</strong>{' '}
            {new Date(g.data + 'T00:00').toLocaleDateString()}
          </div>
          <div>
            <strong>Situação:</strong> {g.situacion}
          </div>
          <div>
            <strong>Valor:</strong>{' '}
            <span
              style={{ color: g.situacion === 'Entrada' ? 'green' : 'red' }}
            >
              R$ {g.valor.toFixed(2)}
            </span>
          </div>
          <div>
            <strong>Obs:</strong> {g.observacao || '—'}
          </div>
        </MobileCard>
      ))}
    </>
  )
}
