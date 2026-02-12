import { FaPlusCircle, FaChartPie, FaCoins, FaChartLine } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 40px auto;
  max-width: 900px;
  padding: 0 16px;

  /* Mobile */
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }
`

const Card = styled.div`
  background: #111827;
  border-radius: 18px;
  padding: 22px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-align: center;
  cursor: pointer;
  color: #facc15;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    background: #1f2937;
  }

  /* Mobile */
  @media (max-width: 768px) {
    padding: 18px 8px;
    gap: 8px;
  }
`

const IconWrap = styled.div`
  font-size: 42px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`

const Label = styled.span`
  font-size: 15px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`

export default function IconCards() {
  const navigate = useNavigate()

  return (
    <Wrapper>
      <Card onClick={() => navigate("/controleGastos")}>
        <IconWrap>
          <FaPlusCircle />
        </IconWrap>
        <Label>Gastos</Label>
      </Card>

      <Card onClick={() => navigate("/controleInvest")}>
        <IconWrap>
          <FaCoins />
        </IconWrap>
        <Label>Investimentos</Label>
      </Card>

      <Card onClick={() => navigate("/dashboard")}>
        <IconWrap>
          <FaChartPie />
        </IconWrap>
        <Label>Dashboard</Label>
      </Card>

      <Card onClick={() => navigate("/dashboard-invest")}>
        <IconWrap>
          <FaChartLine />
        </IconWrap>
        <Label>Dashboard Invest</Label>
      </Card>
    </Wrapper>
  )
}
