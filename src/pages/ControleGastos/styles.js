import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 500px;
  margin: 40px auto;
  background: #1e1e2f;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
`;

export const Title = styled.h2`
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  color: #ccc;
  font-size: 14px;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 6px;
  border: none;
  background: #2b2b3c;
  color: #fff;
`;

export const Select = styled.select`
  padding: 10px;
  border-radius: 6px;
  border: none;
  background: #2b2b3c;
  color: #fff;
`;

export const Textarea = styled.textarea`
  padding: 10px;
  border-radius: 6px;
  border: none;
  background: #2b2b3c;
  color: #fff;
`;

export const Button = styled.button`
  margin-top: 15px;
  padding: 12px;
  border-radius: 6px;
  border: none;
  background: #00ff99;
  color: #000;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #00cc77;
  }
`;
