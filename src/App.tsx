import { Box, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./App.scss";
import CocktailCard from "./components/cocktail-card/cocktail-card.component";
import { fetchCocktails } from "./components/services/cocktailService";
import { Cocktail } from "./types/cocktail";

const App = () => {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    fetchCocktails().then((cocktails: Cocktail[]) => {
      setCocktails(cocktails);
    });
  }, []);

  const handleClickOnCard = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="App">
      <p>Welcome to</p>
      <h1>Digital Mixers</h1>
      <div className="cocktails-wrapper">
        {cocktails.map(
          ({ idDrink, strDrink, strDrinkThumb, strInstructions }) => (
            <CocktailCard
              handleClick={handleClickOnCard}
              key={idDrink}
              title={strDrink}
              description={strInstructions}
              imgUrl={strDrinkThumb}
            ></CocktailCard>
          )
        )}
      </div>
      <Modal open={isOpen} onClose={handleClickOnCard}>
        <Box position="absolute" top="50%" left="50%">
          <div>modal</div>
        </Box>
      </Modal>
    </div>
  );
};

export default App;
