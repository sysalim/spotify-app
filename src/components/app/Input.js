import style from "../../styles/app/input.module.scss";
const Input = (props) => {
  return (
    <input
      name={props.name}
      id={props.id}
      className={style.myInput}
      type="text"
      placeholder="Artist, songs or podcast"
    />
  );
};
export default Input;
