import React, { useState } from "react";
import { supabase } from "../../supabaseClient";
import MenuClean from "../../components/MenuClean";
import {
  FormContainer,
  Title,
  Form,
  Label,
  Input,
  Select,
  Textarea,
  Button,
} from "./styles";

export default function GastoForm() {
  const [formData, setFormData] = useState({
    data: "",
    situacion: "Entrada",
    valor: "",
    observacao: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const { data: auth } = await supabase.auth.getUser();
    if (!auth.user) {
      alert("Usuário não logado");
      return;
    }

    const { error } = await supabase.from("controlegastos").insert([
      {
        user_id: auth.user.id,
        data: formData.data,
        situacion: formData.situacion,
        valor: Number(formData.valor),
        observacao: formData.observacao,
      },
    ]);

    if (error) {
      alert(error.message);
    } else {
      alert("Gasto salvo");
      setFormData({
        data: "",
        situacion: "Entrada",
        valor: "",
        observacao: "",
      });
    }
  }

  return (
    <>
      <MenuClean />
      <FormContainer>
        <Title>Novo Gasto</Title>

        <Form onSubmit={handleSubmit}>
          <Label>Data</Label>
          <Input type="date" name="data" value={formData.data} onChange={handleChange} required />

          <Label>Situação</Label>
          <Select name="situacion" value={formData.situacion} onChange={handleChange}>
            <option value="Entrada">Entrada</option>
            <option value="Saida">Saida</option>
          </Select>

          <Label>Valor</Label>
          <Input type="number" name="valor" step="0.01" value={formData.valor} onChange={handleChange} required />

          <Label>Observação</Label>
          <Textarea name="observacao" value={formData.observacao} onChange={handleChange} />

          <Button>Salvar</Button>
        </Form>
      </FormContainer>
    </>
  );
}
