import style from "../styles/Sidebar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMagnifyingGlass,
  faFile,
  faPlus,
  faHeart,
  faFingerprint,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
export default function HeaderSidebar() {
  return (
    <aside className={style.sidebar}>
      <div className={style.container_sidebar}>
        <Link href={"/"} className={style.href}>
          <div className={style.logo}>
            <Image src={"/logo.png"} width={30} height={30} />
            <h1>Spotify</h1>
          </div>
        </Link>
        {/* akhir logo */}

        <div className={style.list_navigation}>
          <ul>
            <li>
              <Link href={"/"}>
                <FontAwesomeIcon icon={faHome} size="xl" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href={"/search"}>
                <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
                <span>Search</span>
              </Link>
            </li>
            <li>
              <Link href={""}>
                <FontAwesomeIcon icon={faFile} size="xl" />
                <span>Your Library</span>
              </Link>
            </li>

            <div className={style.batas}>
              <li>
                <Link href={""}>
                  <FontAwesomeIcon icon={faPlus} size="xl" />
                  <span>Create Playlist</span>
                </Link>
              </li>
              <li>
                <Link href={""}>
                  <FontAwesomeIcon icon={faHeart} size="xl" />
                  <span>Liked Songs</span>
                </Link>
              </li>
              <li>
                <Link href={""}>
                  <FontAwesomeIcon icon={faFingerprint} size="xl" />
                  <span>Your Eposodies</span>
                </Link>
              </li>
            </div>
          </ul>
          <div className={style.fav}>
            <h4>FAV</h4>
            <ul>
              <li>
                <Link href={""}>
                  <span>Daily Mix 1</span>
                </Link>
              </li>
              <li>
                <Link href={""}>
                  <span>Discover Weekly</span>
                </Link>
              </li>
              <li>
                <Link href={""}>
                  <span>Malayalam</span>
                </Link>
              </li>
              <li>
                <Link href={""}>
                  <span>Dance Electronix/Mix</span>
                </Link>
              </li>
              <li>
                <Link href={""}>
                  <span>EDM/Populer</span>
                </Link>
              </li>
            </ul>
          </div>
          {/* akhir fav */}
        </div>
        {/* akhir list navigation */}

        <div className={style.install_config}>
          <Link href={""}>
            <FontAwesomeIcon icon={faArrowDown} />
            <span>Install</span>
          </Link>
        </div>
      </div>
      {/* akhir container sidebar */}
    </aside>
  );
}
