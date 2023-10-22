import { useState } from "react";

const carro = [
  { categoria: "Esporte", preco: "250000", medelo: "BMW" },
  { categoria: "Esporte", preco: "170000", medelo: "Camaro" },
  { categoria: "Utilitario", preco: "140000", medelo: "Hillux" },
  { categoria: "Utilitario", preco: "150000", medelo: "Ranger" },
  { categoria: "Suv", preco: "800000", medelo: "HRV" },
  { categoria: "Suv", preco: "900000", medelo: "T Cross" },
];

const linha = (cat) => {
  const li =[]
  carro.forEach(
    (carro) => {
      if(carro.categoria.toUpperCase()==cat.toUpperCase() || cat.)
    }
  )
  return li
}

const TabelaCarro = (cat) => {
  return (
    <table border={1} style={{ borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>Categoria</th>
          <th>Preço</th>
          <th>Modelo</th>
        </tr>
      </thead>
      <tbody>
        {}
      </tbody>
    </table>
  );
};

export default function App() {
  const [categoria, setCategoria] = useState("");
  return <>{TabelaCarro(categoria)}</>;
}
