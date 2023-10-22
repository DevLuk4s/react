export default function Dados(promp) {
  const n1 = 10;
  const n2 = 5;
  return (
    <section>
      <p>Canal:{promp.canal()}</p>
      <p>YouTube:{promp.youtube}</p>
      <p>Cursos:{promp.cursos}</p>
      <p>
        {"A soma de " + n1 + " com " + n2 + " é igual " + promp.somar(n1, n2)}
      </p>
    </section>
  );
}
