import { Inter } from "next/font/google";
import style from "../styles/Home.module.scss";
import HomeIndex from "@/components/HomeContent";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className={`${style.kontol} ${style.asu}`}>
      <HomeIndex />
    </section>
  );
}
