import { useState } from "react";

const carro = [
  { categoria: "Esporte", preco: "250000", medelo: "BMW" },
  { categoria: "Esporte", preco: "170000", medelo: "Camaro" },
  { categoria: "Utilitario", preco: "140000", medelo: "Hillux" },
  { categoria: "Utilitario", preco: "150000", medelo: "Ranger" },
  { categoria: "Suv", preco: "800000", medelo: "HRV" },
  { categoria: "Suv", preco: "900000", medelo: "T Cross" },
];

const TabelaCarros = (car) => {};

export default function App() {
  const [car, setCar] = useState("");
  return;
  <>{TabelaCarros()}</>;
}
