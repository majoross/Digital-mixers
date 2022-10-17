import "./cocktail-card.styles.scss";

interface Iprops {
  imgUrl: string;
  title: string;
  description: string;
}

const CocktailCard = ({ imgUrl, description, title }: Iprops) => {
  return (
    <>
      <div className="card">
        <img className="featured-image" src={imgUrl}></img>
        <div className="content-wrapper">
          <h2 className="title">{title}</h2>
          <div className="description">{description}</div>
        </div>
      </div>
    </>
  );
};
export default CocktailCard;
