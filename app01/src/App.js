import React, { useState } from "react";

export default function App() {

  const [nome,setNome] = useState()

  const adicionar = () => {
    localStorage.setItem("nome", "Bruno")
  }

  const VerNome = () => {
    localStorage.getItem("nome")
    alert()
  }

  const remover = () => {
    localStorage.removeItem("nome")
  }

  return (

    <>
      <input type="text" ></input>
      <button onClick={adicionar}>adicionar</button>
      <button onClick={VerNome}>VerNome</button>
      <button onClick={remover}>remover</button>
    </>

  )
}