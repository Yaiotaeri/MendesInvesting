import { useEffect, useState } from 'react'
import Menu from '../../components/MenuClean'
import { PageWrapper, Content, FormCard } from './styles'
import { supabase } from '../../supabaseClient'

export default function PageMain() {
  const [date, setDate] = useState('')
  const [assetClass, setAssetClass] = useState('')
  const [assetType, setAssetType] = useState('')
  const [product, setProduct] = useState('')
  const [amount, setAmount] = useState('')
  const [currency, setCurrency] = useState('')
  const [broker, setBroker] = useState('')
  const [notes, setNotes] = useState('')

  async function handleSetData(e) {
    e.preventDefault()

    const { data: userData } = await supabase.auth.getUser()
    const user = userData.user

    const { data, error } = await supabase.from('investments').insert([
      {
        user_id: user.id,
        date: date,
        asset_class: assetClass,
        asset_type: assetType,
        product: product,
        amount: amount,
        currency: currency,
        broker: broker,
        notes: notes,
      },
    ])

    if (error) {
      alert('Erro:', error.message)
      console.log(error)
      return
    } else {
      alert('sucesso')
    }
  }

  return (
    <>
      <Menu />

      <PageWrapper>
        <Content>
          <FormCard onSubmit={handleSetData}>
            <label>Data</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <label>Classe</label>
            <select
              value={assetClass}
              onChange={(e) => setAssetClass(e.target.value)}
            >
              <option value="">Selecione</option>
              <option value="Renda Fixa">Renda Fixa</option>
              <option value="Renda Variável">Renda Variável</option>
              <option value="Previdência">Previdência</option>
              <option value="Cripto">Cripto</option>
              <option value="Caixa">Caixa</option>
            </select>

            <label>Tipo</label>
            <select
              value={assetType}
              onChange={(e) => setAssetType(e.target.value)}
            >
              <option value="">Selecione</option>
              <option value="CDB">CDB</option>
              <option value="Ação">Ação</option>
              <option value="ETF">ETF</option>
              <option value="FII">FII</option>
              <option value="LCI">LCI</option>
              <option value="Cripto">Cripto</option>
            </select>

            <label>Produto</label>
            <input
              placeholder="Ex: IVV, PETR4, CDB Nubank"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            />

            <label>Valor Investido</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <label>Moeda</label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="">Selecione</option>
              <option value={"BRL"}>BRL</option>
              <option value={"USD"}>USD</option>
              <option value={"EUR"}>EUR</option>
            </select>

            <label>Corretora</label>
            <select value={broker} onChange={(e) => setBroker(e.target.value)}>
              <option value="">Selecione</option>
              <option value={"XP"}>XP</option>
              <option value={"Nubank"}>Nubank</option>
              <option value={"BTG"}>BTG</option>
              <option value={"Rico"}>Rico</option>
              <option value={"Binance"}>Binance</option>
            </select>

            <label>Observação</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />

            <button type="submit">Salvar Investimento</button>
          </FormCard>
        </Content>
      </PageWrapper>
    </>
  )
}
