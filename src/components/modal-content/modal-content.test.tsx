import React from "react";
import { render, screen } from "@testing-library/react";
import ModalContent from "./modal-content.component";

test("renders learn react link", () => {
  render(
    <ModalContent
      onClose={() => {}}
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
  const ingredient = screen.getByText("ingredient");
  expect(title).toBeInTheDocument();
  expect(ingredient).toBeInTheDocument();
  expect(intructions).toBeInTheDocument();
});
