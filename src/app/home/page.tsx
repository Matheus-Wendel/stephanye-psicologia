"use client";
import { Playfair_Display, Roboto_Flex } from "next/font/google";
import { Button, Header } from "@/components";
import { useState } from "react";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"] });
const roboto = Roboto_Flex({ subsets: ["latin"] });

const Home = () => {
  const [externalActual, setExternalActual] = useState(1);
  const isMobile = () => {
    let check = false;
    (function (a) {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
          a,
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4),
        )
      )
        check = true;
    })(navigator?.userAgent || navigator?.vendor || window?.opera);
    return check;
  };

  const renderAbout = () => {
    return (
      <section
        id={"about"}
        className="bg-neutral p-4 rounded-md flex justify-center"
      >
        <div className="md:w-[70%] w-[85%] pt-[100px]">
          <h2 className="text-2xl md:text-3xl text-primary tracking-wider underline mb-4">
            Sobre
          </h2>
          <p className="tracking-wider leading-7 md:text-[20px]">
            Atuo como Psicóloga Clínica utilizando a abordagem da Psicanálise em
            atendimentos clínicos online.
            <br />
            Bacharelado em Psicologia - Universidade Cruzeiro do Sul (UNICSUL).
            <br />
            Pós Graduação em Psicanálise Clínica (FAMEESP).
            <br />
            Percurso em Psicanálise
            <br />
            Realizei o curso de Psicanálise de Orientação Freudiana.
            <br />
            Participei do curso “Psicanálise na Prática”.
            <br />
            Realizei Iniciação científica Sobre Mulheres negras e a interrupção
            voluntária da gravidez.
            <br />
            Fui palestrante no ENIC e SEMESP.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full mt-20">
            <div className="bg-accent flex-1 rounded-md p-5 md:p-10">
              <h2 className="text-2xl md:text-3xl text-dark tracking-wider mb-4">
                Missão
              </h2>
              <p className="text-dark tracking-wider leading-7">
                Promover condições favoráveis para o autoconhecimento,
                desenvolvimento e fortalecimento da autonomia emocional,
                independência e melhor relacionamento interpessoal. Meu trabalho
                é garantir um atendimento qualificado pautado no compromisso com
                a ética e respeito.
              </p>
            </div>
            <div className="bg-accent flex-1 rounded-md p-5 md:p-10">
              <h2 className="text-2xl md:text-3xl text-dark tracking-wider mb-4">
                Visão
              </h2>
              <p className="text-dark tracking-wider leading-7">
                Defendo a excelência nos atendimentos prestados, colaborando com
                um percurso para bem estar subjetivo e desenvolvimento pessoal,
                o que por sua vez, reflete em indivíduos mais conscientes sobre
                suas escolhas e relações no mundo.
              </p>
            </div>
            <div className="bg-accent flex-1 rounded-md p-5 md:p-10">
              <h2 className="text-2xl md:text-3xl text-dark tracking-wider mb-4">
                Valores
              </h2>
              <p className="text-dark tracking-wider leading-7">
                Valores para orientar a prática: compromisso ético, empatia,
                profissionalismo, valorização e respeito às pessoas.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const renderTreatment = () => {
    return (
      <section
        id={"treatment"}
        className="bg-neutral p-4 pb-20 rounded-md flex justify-center relative overflow-x-hidden md:h-[66dvh]"
      >
        {!isMobile() && (
          <>
            <Image
              alt="leaf"
              src="/images/leaf.svg"
              width={100}
              height={100}
              style={{
                position: "absolute",
                zIndex: 2,
                right: -120,
                bottom: 100,
                height: 450,
                width: 450,
                transform: "rotate(-40deg)",
              }}
            />
            <Image
              alt="leaf"
              src="/images/leaf-alt.svg"
              width={100}
              height={100}
              style={{
                position: "absolute",
                zIndex: 1,
                right: -65,
                bottom: 103,
                height: 450,
                width: 450,
                transform: "rotate(-47deg)",
              }}
            />
          </>
        )}

        <div className="md:w-[70%] w-[85%] pt-[100px] relative pb-20">
          <h2 className="text-2xl md:text-3xl text-primary tracking-wider underline mb-4">
            Atendimento
          </h2>
          <p className="tracking-wider leading-7">
            O primeiro contato com você é gratuito. O objetivo desse primeiro
            contato é esclarecer dúvidas sobre o meu atendimento e entender
            melhor o que o você está buscando na terapia.
            <br />
            O objetivo é que você se sinta acolhido para compartilhar um pouco
            da sua historia e para que possamos nos conhecer.
            <br />
            Meus atendimentos duram em média 45/50 minutos. Trabalho com
            atendimentos on-lines, porém caso prefira, dependendo da sua região,
            podemos negociar um ambiente físico para realizar o atendimento
            presencial.
            <br />
            Sou psicanalista, por isso, durante meus atendimentos você será
            levado a refletir e enxergar de outra maneira as nuances da sua
            vida. O objetivo é fazer com o que você, durante as sessões, passe a
            se conhecer melhor e a identificar a razão de seus sentimentos,
            conflitos e emoções.
          </p>
        </div>
      </section>
    );
  };

  const renderFooter = () => {
    return (
      <footer
        id={"links"}
        className="bg-accent p-4 pb-20 flex justify-center md:h-[27dvh]"
      >
        <div className="md:w-[70%] w-[85%] pt-[50px] relative">
          <h2 className="text-2xl md:text-3xl text-dark">Contato</h2>
          <p className="mb-7 text-dark tracking-wider leading-7">
            Quer conhecer um pouco mais sobre meu trabalho?
          </p>
          <div className="flex gap-5">
            <Image
              onClick={() => {
                window
                  ?.open(
                    "https://www.instagram.com/psistephanye.lopes?igsh=MWNrMWs4enJnczR4Nw%3D%3D&utm_source=qr",
                    "_blank",
                  )
                  ?.focus();
              }}
              alt="leaf"
              src="/images/instagram.svg"
              width={100}
              height={100}
              style={{
                zIndex: 1,
                height: 40,
                width: 40,
                cursor: "pointer",
              }}
            />
            <Image
              onClick={() => {
                window
                  ?.open(
                    "https://wa.me/5511953239185?text=Oie%2C%2520gostaria%2520de%2520conhecer%2520mais%2520sobre%2520seu%2520atendimento",
                    "_blank",
                  )
                  ?.focus();
              }}
              alt="leaf"
              src="/images/whatsapp.svg"
              width={100}
              height={100}
              style={{
                zIndex: 1,
                height: 40,
                width: 40,
                cursor: "pointer",
              }}
            />
          </div>
        </div>
      </footer>
    );
  };

  return (
    <div id={"start"}>
      <Header
        externalActual={externalActual}
        setExternalActual={(value) => {
          console.log(value);
          setExternalActual(value);
        }}
      />
      {externalActual === 1 && (
        <main
          className="bg-neutral rounded-md overflow-hidden"
          style={{
            height: "90dvh",
          }}
        >
          <div
            style={{ height: "93dvh" }}
            className="grid grid-cols-1 md:grid-cols-3 p-5 overflow-hidden relative"
          >
            <Image
              alt="leaf"
              src="/images/leaf.svg"
              width={100}
              height={100}
              style={{
                position: "absolute",
                left: isMobile() ? -100 : -120,
                bottom: -30,
                height: isMobile() ? 250 : 450,
                width: isMobile() ? 250 : 450,
                zIndex: 2,
                transform: "scaleX(-1) rotate(-40deg)",
                overflow: "hidden",
              }}
            />
            <Image
              alt="leaf"
              src="/images/leaf-alt.svg"
              width={100}
              height={100}
              style={{
                position: "absolute",
                left: isMobile() ? -65 : -50,
                bottom: -30,
                height: isMobile() ? 250 : 450,
                width: isMobile() ? 250 : 450,
                zIndex: 1,
                transform: "scaleX(-1) rotate(-50deg)",
              }}
            />
            <div className="flex flex-col justify-center items-center md:col-span-2 order-2 md:order-1">
              <div>
                <h1 className="text-3xl md:text-5xl text-primary tracking-wider underline">
                  Stephanye Lopes
                </h1>
                <p
                  className={`${roboto.className} text-sm md:text-lg text-end text-primary mt-1 tracking-wide`}
                >
                  Psicóloga - CRP 06/179600
                </p>
                <div className="flex justify-end mt-10">
                  <Button
                    text="Agende sua sessão"
                    onClick={() => {
                      window
                        ?.open(
                          "https://wa.me/5511953239185?text=Oie%2C%2520gostaria%2520de%2520conhecer%2520mais%2520sobre%2520seu%2520atendimento",
                          "_blank",
                        )
                        ?.focus();
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="h-full w-full order-1 md:order-2 flex items-center relative">
              <div className="md:w-full w-[90%] ml-[100px] mt-20 md:mt-0 md:ml-0 bg-black md:h-[90%] h-[120%] rounded-md flex items-center relative">
                <Image
                  alt="profile-back"
                  src="/images/profile.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  layout="fill"
                  style={{ filter: "brightness(30%)", borderRadius: 4 }}
                />
                <div className="md:w-full bg-accent w-[95%] h-[95%] md:h-[90%] rounded-md m-[-100px] overflow-hidden relative">
                  <Image
                    alt="profile-front"
                    src="/images/profile.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    layout="fill"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      {externalActual === 2 && renderAbout()}
      {externalActual === 3 && (
        <>
          {renderTreatment()}
          {renderFooter()}
        </>
      )}
    </div>
  );
};

export default Home;
