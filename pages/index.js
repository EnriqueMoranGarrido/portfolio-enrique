import Head from "next/head";
import Image from "next/image";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Enrique | Mechatronics Engineer</title>
      </Head>
      <Navbar />
      <Main />
    </div>
  );
}
