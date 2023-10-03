import style from "../../styles/content/Content.module.scss";
const ContainerContent = ({ id, judul, children }) => {
  return (
    <div className={style.content} id={id}>
      <h1 className={style.judul}>{judul}</h1>
      <div className={style.container}>{children}</div>
    </div>
  );
};

export { ContainerContent };
