import { Cocktail } from "../../types/cocktail";
import "./cocktail-card.styles.scss";

interface Iprops {
  cocktail: Cocktail;
  handleClick: (id: string) => void;
}

const CocktailCard = ({ cocktail, handleClick }: Iprops) => {
  return (
    <>
      <div className="card" onClick={() => handleClick(cocktail.idDrink)}>
        <div className="img-wrapper">
          <img className="featured-image" src={cocktail.strDrinkThumb}></img>
        </div>
        <div className="content-wrapper">
          <h2 className="title">{cocktail.strDrink}</h2>
          <div className="description">{cocktail.strInstructions}</div>
        </div>
      </div>
    </>
  );
};
export default CocktailCard;
