import React from 'react'
import Dados from './Dados.js'

export default function Corpo() {
    const cnl = () => {
        return 'CFB'
    }
    const somar = (v1,v2) => {
        return v1 + v2
    }
    const yt = 'youtube/CBF.com'
    const crs = 'React'
    return (
        <section>
          <h1>Ola Mundo</h1>
          <Dados 
              canal={cnl} 
              youtube={yt} 
              cursos={crs}
              somar={somar}
          />
        </section>
    )
}