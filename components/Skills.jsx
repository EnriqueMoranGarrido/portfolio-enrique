import Image from "next/image";
import React from "react";
import Link from "next/link";

const Skills = () => {
  return (
    <div
      id="skills"
      className=" w-[440px] nxs:w-full lg:h-screen p-2 justify-center "
    >
      <div className="max-w-[1240px] mx-auto flex flex-col h-full">
        <p className=" py-4 uppercase  text-2xl tracking-widest  text-[#039898]">
          Skills
        </p>
        <h2 className="py-4">My Set of Tools</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 max-h-[110px]">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <img
                    src="https://portfolio-enrique-images.s3.amazonaws.com/skills/javascript.png"
                    width="70px"
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

          <a href="https://www.typescriptlang.org">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 max-h-[120px]">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <img
                    src="https://portfolio-enrique-images.s3.amazonaws.com/skills/typescript.png"
                    width="64px"
                    height="64px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>TypeScript</h3>
                </div>
              </div>
            </div>
          </a>

          {/* <a href="https://www.python.org">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 max-h-[120px]">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <img
                    src="https://portfolio-enrique-images.s3.amazonaws.com/skills/python.png"
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
          </a> */}

          <a href=" https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 max-h-[110px]">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <img
                    src="https://portfolio-enrique-images.s3.amazonaws.com/skills/html.png"
                    width="70px"
                    height="64px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>HTML 5</h3>
                </div>
              </div>
            </div>
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 max-h-[110px]">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <img
                    src="https://portfolio-enrique-images.s3.amazonaws.com/skills/css.png"
                    width="70px"
                    height="64px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>CSS 3</h3>
                </div>
              </div>
            </div>
          </a>

          <a href="https://tailwindcss.com">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 max-h-[120px]">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <img
                    src="https://portfolio-enrique-images.s3.amazonaws.com/skills/tailwind.png"
                    width="64px"
                    height="64px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>TailwindCSS</h3>
                </div>
              </div>
            </div>
          </a>

          <a href="https://en.reactjs.org">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 max-h-[110px]">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <img
                    src="https://portfolio-enrique-images.s3.amazonaws.com/skills/react.png"
                    width="70px"
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

          <a href="https://nextjs.org">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 max-h-[120px]">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <img
                    src="https://portfolio-enrique-images.s3.amazonaws.com/skills/nextjs.png"
                    width="64px"
                    height="64px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Next JS</h3>
                </div>
              </div>
            </div>
          </a>

          <a href="https://docs.expo.dev">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 max-h-[110px]">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <img
                    src="https://portfolio-enrique-images.s3.amazonaws.com/skills/expo.png"
                    width="70px"
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
          <a href="https://aws.amazon.com/amplify/">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 max-h-[110px]">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <img
                    src="https://portfolio-enrique-images.s3.amazonaws.com/skills/amplify.png"
                    alt="/"
                    width="85px"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>AWS: Amplify</h3>
                </div>
              </div>
            </div>
          </a>

          <a href="https://aws.amazon.com/s3/?trk=5970b1e9-218b-48cc-9862-f23c151d81b2&sc_channel=ps&sc_campaign=acquisition&sc_medium=ACQ-P|PS-GO|Brand|Desktop|SU|Storage|S3|LATAMO|ES|Text&s_kwcid=AL!4422!3!590443989054!e!!g!!amazon%20s3&ef_id=Cj0KCQjwn4qWBhCvARIsAFNAMij5HINSEucAdVejWXZo1s8fuwFzkhzlbq22mh7Na0jzWJF3jW0df0UaArzlEALw_wcB:G:s&s_kwcid=AL!4422!3!590443989054!e!!g!!amazon%20s3">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 max-h-[110px]">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <img
                    src="https://portfolio-enrique-images.s3.amazonaws.com/skills/aws-s3-logo.png"
                    alt="/"
                    width="85px"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>AWS: S3</h3>
                </div>
              </div>
            </div>
          </a>

          <a href="https://github.com">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 max-h-[110px]">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <img
                    src="https://portfolio-enrique-images.s3.amazonaws.com/skills/github1.png"
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
          {/* <a href=" https://www.autodesk.com/products/autocad/overview?panel=buy&AID=12741901&PID=8299320&SID=jkp_CjwKCAjwy_aUBhACEiwA2IHHQGYtQi4gkl10b_54hNxKYU4nwsuRGE5U2Z6l4T5TNn-hK_IR7SHqThoCU_EQAvD_BwE&cjevent=5f59e5dae5e011ec82054f9a0a1c0e14&mktvar002=afc_mx_deeplink&affname=8299320_12741901&term=1-YEAR&tab=subscription&plc=ACDIST">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 max-h-[110px]">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <img
                    src="https://portfolio-enrique-images.s3.amazonaws.com/skills/autocad.png"
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
          <a href="https://www.autodesk.com/products/fusion-360/overview?mktvar002=4424517|SEM|13036149246|133509004999|aud-442447752699:kwd-11029869505&ef_id=CjwKCAjwy_aUBhACEiwA2IHHQHf3ud50BCqhxr653pFZoEYnhqqvOxYuC0LNNZldH8doKr4UD2eNCBoCTrYQAvD_BwE:G:s&s_kwcid=AL!11172!3!586632260379!e!!g!!fusion%20360!13036149246!133509004999&mkwid=s|pcrid|586632260379|pkw|fusion%20360|pmt|e|pdv|c|slid||pgrid|133509004999|ptaid|aud-442447752699:kwd-11029869505|pid|&utm_medium=cpc&utm_source=google&utm_campaign=GGL_DEC_AutoCAD_AMER_MX_eComm_SEM_BR_New_EX_ADSK_3360535_General&utm_term=fusion%20360&utm_content=s|pcrid|586632260379|pkw|fusion%20360|pmt|e|pdv|c|slid||pgrid|133509004999|ptaid|aud-442447752699:kwd-11029869505|&gclid=CjwKCAjwy_aUBhACEiwA2IHHQHf3ud50BCqhxr653pFZoEYnhqqvOxYuC0LNNZldH8doKr4UD2eNCBoCTrYQAvD_BwE&term=1-YEAR&tab=subscription">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 max-h-[110px]">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <img
                    src="https://portfolio-enrique-images.s3.amazonaws.com/skills/fusion.png"
                    width="64px"
                    height="64px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Fusion 360</h3>
                </div>
              </div>
            </div>
          </a>
          <a href="https://www.mathworks.com/products/matlab.html">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 max-h-[110px]">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <img
                    src="https://portfolio-enrique-images.s3.amazonaws.com/skills/matlab.png"
                    width="85px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>MATLAB & Simulink</h3>
                </div>
              </div>
            </div>
          </a>
          <a href="https://new.siemens.com/global/en/products/automation/industry-software/automation-software/tia-portal/software.html">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 max-h-[110px]">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <img
                    src="https://portfolio-enrique-images.s3.amazonaws.com/skills/tia.png"
                    width="70px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>TIA PORTAL</h3>
                </div>
              </div>
            </div>
          </a> */}
          {/* <a href="https://www.labcenter.com">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 max-h-[110px]">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <img
                    src="https://portfolio-enrique-images.s3.amazonaws.com/skills/proteus.png"
                    width="80px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Proteus Design Suite</h3>
                </div>
              </div>
            </div>
          </a>
          <a href="https://www.ni.com/es-mx/shop/software/products/multisim.html">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 max-h-[110px]">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <img
                    src="https://portfolio-enrique-images.s3.amazonaws.com/skills/multisim.png"
                    width="70px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>NI MultiSIM</h3>
                </div>
              </div>
            </div>
          </a> */}
          <a href="https://code.visualstudio.com">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 max-h-[110px]">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <img
                    src="https://portfolio-enrique-images.s3.amazonaws.com/skills/visualsc.png"
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
          {/* <a href="https://atom.io">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 max-h-[110px]">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <img
                    src="https://portfolio-enrique-images.s3.amazonaws.com/skills/atom.png"
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
          </a> */}
        </div>
        <div className="items-center flex justify-center mt-8">
          {/* <Link href="/tools">
            <button className="w-[50%] p-4 text-gray-100 mt-4  from-[#709dff]  to-[#039898] justify-center items-center">
              View Full Set of Tools
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
