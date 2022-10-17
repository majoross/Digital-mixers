import React, { useEffect, useState } from "react";
import "./App.scss";
import CocktailCard from "./components/cocktail-card/cocktail-card.component";
import { fetchCocktails } from "./components/services/cocktailService";
import { Cocktail } from "./types/cocktail";

const App = () => {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);

  useEffect(() => {
    fetchCocktails().then((cocktails: Cocktail[]) => {
      setCocktails(cocktails);
    });
  }, []);

  return (
    <div className="App">
      <p>Welcome to</p>
      <h1>Digital Mixers</h1>
      <div className="cocktails-wrapper">
        {cocktails.map((cocktail) => (
          <CocktailCard
            key={cocktail.idDrink}
            title={cocktail.strDrink}
            description={cocktail.strInstructions}
            imgUrl={cocktail.strDrinkThumb}
          ></CocktailCard>
        ))}
      </div>
    </div>
  );
};

export default App;
