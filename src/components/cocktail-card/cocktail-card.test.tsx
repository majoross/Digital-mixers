import React from "react";
import { render, screen } from "@testing-library/react";
import CocktailCard from "./cocktail-card.component";

test("renders learn react link", () => {
  render(
    <CocktailCard
      handleClick={() => {}}
      key={1}
      cocktail={{
        idDrink: "1",
        strDrink: "cocktail",
        strDrinkThumb: "#",
        strIngredient1: "ingredient",
        strIngredient2: "ingredient2",
        strIngredient3: null,
        strIngredient4: null,
        strIngredient5: null,
        strInstructions: "instructions",
      }}
    />
  );
  const title = screen.getByText("cocktail");
  const intructions = screen.getByText("instructions");
  expect(title).toBeInTheDocument();
  expect(intructions).toBeInTheDocument();
});
