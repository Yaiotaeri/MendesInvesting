import styled from "styled-components";

export const FilterWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const FilterButton = styled.button`
  background: #4f46e5;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
`;

export const DateInput = styled.input`
  padding: 6px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

export const TotalWrapper = styled.div`
  margin: 20px;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
`;

export const TableWrapper = styled.div`
  margin: 20px;
  background: white;
  border-radius: 10px;
  overflow-x: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    background: #4f46e5;
    color: white;
    padding: 10px;
  }

  td {
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }
`;

/* ===== MOBILE ===== */

export const MobileCard = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    background: white;
    margin: 12px;
    padding: 14px;
    border-radius: 12px;
    box-shadow: 0 0 8px rgba(0,0,0,0.05);
    gap: 6px;
    font-size: 14px;
  }
`;
