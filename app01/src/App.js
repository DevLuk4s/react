import React, { useState } from 'react'

function App() {

    const [nome,setNome] = useState()

    return (
      <>
        <label>Seu nome:</label>
        <input 
          type="text" 
          name="nome"
          value={nome} 
          onChange={(e)=> setNome(e.target.value)}
        />
        <p>Nome digitado: {nome}</p>
      </>
    )
}

export default App