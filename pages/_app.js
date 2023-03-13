import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialAnimals = [
  { id: 1, name: "Dogs", count: 0 },
  { id: 2, name: "Cats", count: 0 },
  { id: 3, name: "Sheep", count: 0 },
  { id: 4, name: "Dragons", count: 0 },
];

export default function App({ Component, pageProps }) {
  const [animals, setAnimals] = useState(initialAnimals);
  const animalCounts = animals.map((animal) => animal.count);

  const countSum = animalCounts.reduce((a, b) => a + b);
  const countAverage = countSum / animals.length;
  const dragonCount = animals.find((animal) => animal.name === "Dragons").count;

  function handleAdd(animalId) {
    console.log(animalId);
    setAnimals(
      animals.map((animal) =>
        animal.id === animalId ? { ...animal, count: animal.count + 1 } : animal
      )
    );
  }

  function handleSubtract(animalId) {
    console.log(animalId);
    setAnimals(
      animals.map((animal) =>
        animal.id === animalId
          ? { ...animal, count: Math.max(0, animal.count - 1) }
          : animal
      )
    );
  }
  console.log(animals);
  return (
    <>
      <GlobalStyle />
      <Layout
        countSum={countSum}
        countAverage={countAverage}
        dragonCount={dragonCount}
      >
        <Component
          {...pageProps}
          animals={animals}
          handleAdd={handleAdd}
          handleSubtract={handleSubtract}
          countSum={countSum}
          countAverage={countAverage}
          dragonCount={dragonCount}
        />
      </Layout>
    </>
  );
}
