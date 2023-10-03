import { useRouter } from "next/router";
import style from "../styles/Header.module.scss";
import Input from "./app/Input";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Profile from "./helper/Profile";
export default function Header() {
  const router = useRouter();
  const { pathname } = router;
  return (
    <header className={style.header}>
      <div className={style.header_container}>
        <div className={style.navigate_translate}>
          <Link href={""}>
            <FontAwesomeIcon icon={faAngleLeft} size="xl" />
          </Link>
          <Link href={""}>
            <FontAwesomeIcon icon={faAngleRight} size="xl" />
          </Link>
        </div>
        {pathname == "/search" ? <Input /> : ""}
        <div className={style.profile}>
          <Profile  name={"Sayyid"} image={"logo.png"}/>
        </div>
      </div>
    </header>
  );
}
