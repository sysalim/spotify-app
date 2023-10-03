import style from "../../styles/app/cardContentFirst.module.scss";
const CardContentFirst = ({ image, children }) => {
  return (
    <div className={style.card}>
      <div className={style.container}>
        <img src={image} alt={"image card"} width={100} height={100} />
        <h3 className={style.child}>{children}</h3>
      </div>
    </div>
  );
};
export default CardContentFirst;
