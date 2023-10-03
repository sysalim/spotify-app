import style from "../../styles/app/cardContentTwo.module.scss";
const CardContentTwo = ({ image, children, artist }) => {
  return (
    <div className={style.card}>
      <div className={style.container}>
        <img className={style.image} src={image} alt="gambar card" width={191} height={191} />
        <h2 className={style.children}>{children}</h2>
        <p className={style.paragraf}>{artist}</p>
      </div>
    </div>
  );
};
export default CardContentTwo;
