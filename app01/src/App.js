import React, { useState } from "react";
import Nota from "./componentes/Nota"
import Resultado from "./componentes/Resultado"

export default function App() {

  const [notas,setNotas] = useState({"nota1":"0","notas2":"0","notas3":"0","notas4":"0"})
  const handleSetNotas =(e)=> {
      if(e.target.getAttribute('name') == 'nota1') {
        setNotas({"nota1":notas.nota1,"notas2":notas.notas2,"notas3":notas.notas3,"notas4":notas.notas4})
      }
  }

  return (

    <>
      <Nota Num={1} Nota={notas.nota1} setNota={handleSetNotas} />
      <Nota Num={2} Nota={notas.notas2} setNota={handleSetNotas} />
      <Nota Num={3} Nota={notas.notas3} setNota={handleSetNotas} />
      <Nota Num={4} Nota={notas.notas4} setNota={handleSetNotas} />
      <Resultado SomaNotas={parseFloat(notas.nota1)+parseFloat(notas.nota2)+parseFloat(notas.nota3)+parseFloat(notas.nota4)}/>
    </>

  )
}