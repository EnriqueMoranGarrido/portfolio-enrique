import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Resume from "../components/Resume";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Enrique Morán | Portfolio</title>
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}
