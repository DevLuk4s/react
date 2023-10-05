import React, { useState } from "react";
import Numero from "./componentes/Numero";
import Nome from "./componentes/Nome"

export default function App() {
  const [num, setNum] = useState(10);
  const [nome, setNome] = useState("Lucas")

  return (
    <>
      <p>Valor do Num: {num}</p>
      <Numero num={num} setNum={setNum} />
      <Nome nome={nome} setNome={setNome} />
    </>
  );
}
