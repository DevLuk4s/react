import React, { useState } from 'react'
import Nota from './componentes/Nota'

function App() {

    const [nota1,setNota1]=useState(0)
    const [nota2,setNota2]=useState(0)
    const [nota3,setNota3]=useState(0)
    const [nota4,setNota4]=useState(0)

    return (
      <>
        <Nota />
        <Nota />
        <Nota />
        <Nota />
      </>
    )
}

export default App