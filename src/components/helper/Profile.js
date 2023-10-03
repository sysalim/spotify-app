import Link from "next/link";
import style from "../../styles/helper/profile.module.scss";
import ImageProfile from "./img/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
const Profile = ({ name, image }) => {
  const navigate = ["Account", "profile", "Lug Out"];
  return (
    <section className={style.container}>
      <ul>
        <li>
          <div className={style.upDown}>
            <ImageProfile image={image} />
            <span>{name}</span>
            <FontAwesomeIcon className={style.icon} icon={faAngleDown} size="sm"/>
          </div>
          <ul className={style.dropDown}>
            {navigate.map((value) => (
              <li key={value}>
                <Link href={value.replace(/\s+/g, "").toLocaleLowerCase()}>
                  {value}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </section>
  );
};
export default Profile;
