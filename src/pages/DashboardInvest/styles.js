import styled from "styled-components";

export const Page = styled.div`
  padding: 30px;
  color: white;
`;

export const Title = styled.h1`
  font-size: 26px;
  margin-bottom: 20px;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

export const Card = styled.div`
  background: #1f1f1f;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 0 20px rgba(0,0,0,0.4);
`;

export const CardTitle = styled.div`
  font-size: 14px;
  opacity: 0.7;
`;

export const CardValue = styled.div`
  font-size: 26px;
  margin-top: 8px;
  font-weight: bold;
`;

export const Charts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media(max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const ChartCard = styled.div`
  background: #1f1f1f;
  padding: 20px;
  border-radius: 16px;
`;
