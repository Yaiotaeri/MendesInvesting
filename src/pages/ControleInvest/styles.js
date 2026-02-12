import styled from "styled-components";

export const PageWrapper = styled.div`
  min-height: calc(100vh - 64px);
  background: radial-gradient(circle at top, #0b1d4a, #000b24);
  display: flex;
  justify-content: center;
  padding: 30px 15px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 520px;
`;

export const FormCard = styled.form`
  background: linear-gradient(180deg, #0a1f4f, #081633);
  border-radius: 16px;
  padding: 28px 26px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px 16px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.6);
  border: 1px solid rgba(0, 255, 150, 0.15);

  /* Labels */
  label {
    grid-column: span 2;
    color: #9ad7ff;
    font-size: 13px;
    letter-spacing: 0.5px;
    margin-top: 6px;
  }

  /* Inputs */
  input, select, textarea {
    grid-column: span 2;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(0,255,153,0.15);
    border-radius: 10px;
    padding: 12px 14px;
    font-size: 14px;
    color: white;
    outline: none;
    transition: 0.2s;
  }

  input::placeholder {
    color: #6ea2c7;
  }

  input:focus, select:focus, textarea:focus {
    border-color: #00ff99;
    box-shadow: 0 0 10px rgba(0,255,153,0.4);
  }

  textarea {
    resize: none;
    min-height: 90px;
  }

  /* Layout em colunas para campos que combinam */
  select:nth-of-type(1),
  select:nth-of-type(2),
  input:nth-of-type(2),
  input:nth-of-type(3) {
    grid-column: span 1;
  }

  /* Botão */
  button {
    grid-column: span 2;
    margin-top: 16px;
    padding: 14px;
    border-radius: 12px;
    border: none;
    background: linear-gradient(90deg, #00ff99, #00cc77);
    color: #002b1a;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    letter-spacing: 1px;
    box-shadow: 0 0 20px rgba(0,255,153,0.6);
    transition: 0.25s;
  }

  button:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 30px rgba(0,255,153,0.9);
  }

  option{
    color:black;
  }
`;
