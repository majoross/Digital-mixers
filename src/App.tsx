import React from "react";
import "./App.scss";
import CocktailCard from "./components/cocktail-card/cocktail-card.component";

const App = () => {
  return (
    <div className="App">
      <p>Welcome to</p>
      <h1>Digital Mixers</h1>
      <div className="cocktails-wrapper">
        <CocktailCard
          title="Title"
          description="Description"
          imgUrl="#"
        ></CocktailCard>
        <CocktailCard
          title="Title"
          description="Description"
          imgUrl="#"
        ></CocktailCard>
        <CocktailCard
          title="Title"
          description="Description"
          imgUrl="#"
        ></CocktailCard>
        <CocktailCard
          title="Title"
          description="Description"
          imgUrl="#"
        ></CocktailCard>
      </div>
    </div>
  );
};

export default App;
