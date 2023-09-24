import React, { useState } from "react";

export default function App() {

  const [nome,setNome] = useState()

  const adicionar = (chave,valor) => {
    localStorage.setItem(chave, valor)
  }

  const VerNome = (chave) => {
    alert(localStorage.getItem(chave))
  }

  const remover = (chave) => {
    localStorage.removeItem(chave)
  }

  return (

    <>
      <label>Digite um nome</label><br />
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}></input>
      <button onClick={() => adicionar("is_nome", nome)}>adicionar</button>
      <button onClick={() => VerNome("is_nome")}>Ver Nome</button>
      <button onClick={() => remover("is_nome")}>remover Nome</button>
    </>

  )
}