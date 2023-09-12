import React, { useState } from 'react'

export default function App() {

    const [log, setlog] = useState(false)

    const logOn = () => {
      return 'Login com sucesso'
    }
    const logOff = () => {
      return 'Login com Erro'
    }

    const comprimento = () => {
      const hora = 18
      if(hora >= 0 && hora < 12) {
        return <p>Bom dia</p>
      } else if (hora >= 12 && hora < 18) {
        return <p>Bom tarde</p>
      } else {
        return <p>Bom noite</p>
      }

    }

    return (
      <>
        <h1>CBF Cursos</h1>
        {comprimento()}
        <p>{log?logOn():logOff()}</p>
        <button onClick={() => setlog(!log)}>
          {log?'On':'Off'}
        </button>
      </>
    )
}