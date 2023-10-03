import CardContentFirst from "./app/CardContentFirst";
import CardContentTwo from "./app/CardContentTwo";
import { ContainerContent } from "./content/Content";
import {
  dataCardContent,
  dataContent,
  dataContent2,
  dataCardContent2,
} from "./data/dataContent";
export default function HomeContent() {
  return (
    <section id="content">
      <ContainerContent id={dataContent.id} judul={dataContent.judul}>
        {dataCardContent.map((value) => (
          <CardContentFirst
            key={value.children}
            image={value.image}
            children={value.children}
          />
        ))}
      </ContainerContent>
      <ContainerContent id={dataContent2.id} judul={dataContent2.judul}>
        {dataCardContent2.map((value) => (
          <CardContentTwo
            key={value.children}
            image={value.image}
            children={value.children}
            artist={value.artist}
          />
        ))}
      </ContainerContent>
    </section>
  );
}
