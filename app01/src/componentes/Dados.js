import React from "react";

export default function Dados(promp) {
    return (
        <section>
            <p>Canal:{promp.canal}</p>
            <p>YouTube:{promp.youtube}</p>
            <p>Cursos:{promp.cursos}</p>
        </section>
    )
}