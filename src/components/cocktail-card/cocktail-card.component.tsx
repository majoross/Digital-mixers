import "./cocktail-card.styles.scss";

interface Iprops {
  imgUrl: string;
  title: string;
  description: string;
  handleClick: () => void;
}

const CocktailCard = ({ imgUrl, description, title, handleClick }: Iprops) => {
  return (
    <>
      <div className="card" onClick={handleClick}>
        <div className="img-wrapper">
          <img className="featured-image" src={imgUrl}></img>
        </div>
        <div className="content-wrapper">
          <h2 className="title">{title}</h2>
          <div className="description">{description}</div>
        </div>
      </div>
    </>
  );
};
export default CocktailCard;
