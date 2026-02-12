import styled from "styled-components";

const Wrapper = styled.footer`
  width: 100%;
  padding: 20px 10px;
  margin-top: 60px;
  background: #f9fafb;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: center;
  align-items: center;
  position:absolute;
  bottom:0;
`;

const Text = styled.span`
  font-size: 14px;
  color: #6b7280;
`;

export default function Footer() {
  return (
    <Wrapper>
      <Text>© {new Date().getFullYear()} jvmendes — Todos os direitos reservados</Text>
    </Wrapper>
  );
}
