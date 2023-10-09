import React, { useState } from "react";

export default function App() {
  const [form, setform] = useState({ nome: "", curso: "", ano: "" });
  const HandlonChangeValue = (e) => {
    if (e.target.getAttribute("name") == "fnome") {
      setform({ nome: e.target.value, curso: form.curso, ano: form.ano });
    } else if (e.target.getAttribute("name") == "fcurso") {
      setform({ nome: form.nome, curso: e.target.value, ano: form.ano });
    } else {
      setform({ nome: form.nome, curso: form.curso, ano: e.target.value });
    }
  };

  return (
    <>
      <label>Digite seu nome</label>
      <input
        type="text"
        name="fnome"
        value={form.nome}
        onChange={(e) => HandlonChangeValue(e)}
      ></input>
      <label>Digite seu curso</label>
      <input
        type="text"
        name="fcurso"
        value={form.curso}
        onChange={(e) => HandlonChangeValue(e)}
      ></input>
      <label>Digite seu ano</label>
      <input
        type="text"
        name="fano"
        value={form.ano}
        onChange={(e) => HandlonChangeValue(e)}
      ></input>
      <p>Ano digitado: {form.ano}</p>
      <p>Nome digitado: {form.nome}</p>
      <p>Curso digitado: {form.curso}</p>
    </>
  );
}
