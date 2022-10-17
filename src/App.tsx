import { Box, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./App.scss";
import CocktailCard from "./components/cocktail-card/cocktail-card.component";
import ModalContent from "./components/modal-content/modal-content.component";
import { fetchCocktails } from "./components/services/cocktailService";
import { Cocktail } from "./types/cocktail";

const App = () => {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<string>("");

  useEffect(() => {
    fetchCocktails().then((cocktails: Cocktail[]) => {
      console.log(cocktails);
      setCocktails(cocktails);
    });
  }, []);

  const handleClickOnCard = (id: string) => {
    setIsOpen((prev) => !prev);
    setSelectedCard(id);
  };

  return (
    <div className="App">
      <p>Welcome to</p>
      <h1>Digital Mixers</h1>
      <div className="cocktails-wrapper">
        {cocktails.map((cocktail) => (
          <CocktailCard
            handleClick={handleClickOnCard}
            key={cocktail.idDrink}
            cocktail={cocktail}
          ></CocktailCard>
        ))}
      </div>
      <Modal
        data-testid="modal"
        open={isOpen}
        onClose={() => setIsOpen((prev) => !prev)}
      >
        <Box
          position="absolute"
          top="50%"
          left="50%"
          style={{ transform: "translate(-50%, -50%)" }}
          border="0px solid"
        >
          <ModalContent
            cocktail={
              cocktails.find((cocktail) => cocktail.idDrink === selectedCard)!
            }
            onClose={() => setIsOpen((prev) => !prev)}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default App;
