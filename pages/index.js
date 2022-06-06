import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Enrique | Mechatronics Engineer</title>
      </Head>
      <Navbar />
      <Main />
      <About />
    </div>
  );
}
