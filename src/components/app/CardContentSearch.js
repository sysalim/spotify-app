import style from "../../styles/app/cardContentSearchFirst.module.scss";
const CardContentSearch = ({ image, children, className }) => {
  return (
    <div className={`${style.card} ${className}`}>
      <div className={style.container}>
        <h1>{children}</h1>
        <img src={image} alt="image card" />
      </div>
    </div>
  );
};
export default CardContentSearch;
