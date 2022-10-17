import Head from "next/head";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
//Smport styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>FoodieCrow: Chinese Restaurant in Taiwan</title>
        <meta name="description" content="Best Food Ever" />
        <meta property="og:image" content="/icons8-crow-30.png" />
      </Head>
      <Featured />
      <PizzaList />
    </div>
  );
}
