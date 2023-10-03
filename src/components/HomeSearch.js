import CardContentSearch from "./app/CardContentSearch";
import { ContainerContent } from "./content/Content";
import {
  dataCardContentSearch,
  dataCardContentSearchSmall,
  dataContentSearch,
} from "./data/dataContentSearch";
import style from "../styles/app/cardContentSearchFirst.module.scss";

export default function HomeSearch() {
  return (
    <section className="content">
      <ContainerContent
        judul={dataContentSearch.title}
        id={dataContentSearch.id}>
        {dataCardContentSearch.map((value) => (
          <CardContentSearch
            className={`${style.big} ${style.title_big}`}
            children={value.categori}
            image={value.image}
          />
        ))}
      </ContainerContent>
      <ContainerContent
        judul={dataContentSearch.title}
        id={dataContentSearch.id}>
        {dataCardContentSearchSmall.map((value) => (
          <CardContentSearch
            className={`${style.small} ${style.title_small}`}
            image={value.image}
            children={value.categori}
          />
        ))}
      </ContainerContent>
    </section>
  );
}
