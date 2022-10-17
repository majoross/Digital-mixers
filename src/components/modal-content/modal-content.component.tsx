import { Cocktail } from "../../types/cocktail";
import "./modal-content.styles.scss";

interface Iprops {
  cocktail: Cocktail;
  onClose: () => void;
}

const ModalContent = ({ cocktail, onClose }: Iprops) => {
  return (
    <div className="modal-content-wrapper">
      <div className="close-button" onClick={onClose}>
        X
      </div>
      <div className="cover-img-wrapper">
        <img className="cover-img" src={cocktail.strDrinkThumb}></img>
      </div>
      <div className="modal-content">
        <h2>{cocktail.strDrink}</h2>
        <div className="description">{cocktail.strInstructions}</div>
        <div className="ingredients">
          <ul>
            {cocktail.strIngredient1 && <li>{cocktail.strIngredient1}</li>}
            {cocktail.strIngredient2 && <li>{cocktail.strIngredient2}</li>}
            {cocktail.strIngredient3 && <li>{cocktail.strIngredient3}</li>}
            {cocktail.strIngredient4 && <li>{cocktail.strIngredient4}</li>}
            {cocktail.strIngredient5 && <li>{cocktail.strIngredient5}</li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
