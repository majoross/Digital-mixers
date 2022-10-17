import { Cocktail } from "../../types/cocktail";

export const fetchCocktails = (): Promise<Cocktail[]> => {
  const result = fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((cocktails: { drinks: Cocktail[] }) => {
      return cocktails.drinks.slice(0, 8);
    })
    .catch((error) => error.message);
  return result;
};
