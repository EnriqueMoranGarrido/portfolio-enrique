import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className=" text-2xl tracking-widest uppercase text-[#039898] mt-5">
          Skills
        </p>
        <h2 className="py-4 mt-6 mb-4">Programming Languages</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <a href="https://www.python.org" target="_blank">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/../public/assets/skills/Python.png"
                    width="64px"
                    height="64px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Python</h3>
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
          >
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/../public/assets/skills/javascript.png"
                    width="64px"
                    height="64px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>JavaScript</h3>
                </div>
              </div>
            </div>
          </a>
          <a href=" https://dev.java" target="_blank">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/../public/assets/skills/java.png"
                    width="80px"
                    height="64px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Java</h3>
                </div>
              </div>
            </div>
          </a>
          <a
            href=" https://support.microsoft.com/en-us/office/access-sql-basic-concepts-vocabulary-and-syntax-444d0303-cde1-424e-9a74-e8dc3e460671#:~:text=SQL%20es%20un%20lenguaje%20de%20computación%20para%20trabajar%20con%20conjuntos,SQL%20para%20trabajar%20con%20datos."
            target="_blank"
          >
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/../public/assets/skills/sql.png"
                    width="64px"
                    height="60px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>SQL</h3>
                </div>
              </div>
            </div>
          </a>
        </div>

        <h2 className="py-4 mt-6 mb-4">Technologies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <a
            href=" https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"
            target="_blank"
          >
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/../public/assets/skills/html.png"
                    width="64px"
                    height="64px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>HTML</h3>
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
          >
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/../public/assets/skills/css.png"
                    width="64px"
                    height="64px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>CSS</h3>
                </div>
              </div>
            </div>
          </a>

          <a href="https://en.reactjs.org" target="_blank">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/../public/assets/skills/react.png"
                    width="64px"
                    height="64px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>React / React Native</h3>
                </div>
              </div>
            </div>
          </a>
          <a href="https://docs.expo.dev" target="_blank">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/../public/assets/skills/expo.png"
                    width="64px"
                    height="64px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Expo</h3>
                </div>
              </div>
            </div>
          </a>

          <a href="https://aws.amazon.com/amplify/" target="_blank">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/../public/assets/skills/amplify.png"
                    width="64px"
                    height="64px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>AWS: Amplify</h3>
                </div>
              </div>
            </div>
          </a>
          <a href="https://github.com" target="_blank">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/../public/assets/skills/github1.png"
                    width="64px"
                    height="64px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Github</h3>
                </div>
              </div>
            </div>
          </a>
        </div>
        <h2 className="py-4 mt-6 mb-4">Softwares</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <a
            href=" https://www.autodesk.com/products/autocad/overview?panel=buy&AID=12741901&PID=8299320&SID=jkp_CjwKCAjwy_aUBhACEiwA2IHHQGYtQi4gkl10b_54hNxKYU4nwsuRGE5U2Z6l4T5TNn-hK_IR7SHqThoCU_EQAvD_BwE&cjevent=5f59e5dae5e011ec82054f9a0a1c0e14&mktvar002=afc_mx_deeplink&affname=8299320_12741901&term=1-YEAR&tab=subscription&plc=ACDIST"
            target="_blank"
          >
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/../public/assets/skills/autocad.png"
                    width="64px"
                    height="64px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>AutoCAD</h3>
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://www.autodesk.com/products/fusion-360/overview?mktvar002=4424517|SEM|13036149246|133509004999|aud-442447752699:kwd-11029869505&ef_id=CjwKCAjwy_aUBhACEiwA2IHHQHf3ud50BCqhxr653pFZoEYnhqqvOxYuC0LNNZldH8doKr4UD2eNCBoCTrYQAvD_BwE:G:s&s_kwcid=AL!11172!3!586632260379!e!!g!!fusion%20360!13036149246!133509004999&mkwid=s|pcrid|586632260379|pkw|fusion%20360|pmt|e|pdv|c|slid||pgrid|133509004999|ptaid|aud-442447752699:kwd-11029869505|pid|&utm_medium=cpc&utm_source=google&utm_campaign=GGL_DEC_AutoCAD_AMER_MX_eComm_SEM_BR_New_EX_ADSK_3360535_General&utm_term=fusion%20360&utm_content=s|pcrid|586632260379|pkw|fusion%20360|pmt|e|pdv|c|slid||pgrid|133509004999|ptaid|aud-442447752699:kwd-11029869505|&gclid=CjwKCAjwy_aUBhACEiwA2IHHQHf3ud50BCqhxr653pFZoEYnhqqvOxYuC0LNNZldH8doKr4UD2eNCBoCTrYQAvD_BwE&term=1-YEAR&tab=subscription"
            target="_blank"
          >
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/../public/assets/skills/fusion.png"
                    width="64px"
                    height="60px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Fusion 360</h3>
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://www.mathworks.com/products/matlab.html"
            target="_blank"
          >
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/../public/assets/skills/matlab.png"
                    width="64px"
                    height="64px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>MATLAB & Simulink</h3>
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://new.siemens.com/global/en/products/automation/industry-software/automation-software/tia-portal/software.html"
            target="_blank"
          >
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/../public/assets/skills/tia.png"
                    width="64px"
                    height="64px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>TIA PORTAL</h3>
                </div>
              </div>
            </div>
          </a>

          <a href="https://www.labcenter.com" target="_blank">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/../public/assets/skills/proteus.png"
                    width="70px"
                    height="64px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Proteus Design Suite</h3>
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://www.ni.com/es-mx/shop/software/products/multisim.html"
            target="_blank"
          >
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/../public/assets/skills/multisim.png"
                    width="70px"
                    height="64px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>NI MultiSIM</h3>
                </div>
              </div>
            </div>
          </a>
          <a href="https://code.visualstudio.com" target="_blank">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/../public/assets/skills/visualsc.png"
                    width="70px"
                    height="64px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Visual Studio Code</h3>
                </div>
              </div>
            </div>
          </a>
          <a href="https://atom.io" target="_blank">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/../public/assets/skills/atom.png"
                    width="70px"
                    height="64px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Atom</h3>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skills;
