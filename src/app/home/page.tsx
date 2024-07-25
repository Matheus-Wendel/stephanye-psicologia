"use client";
import { Playfair_Display, Roboto_Flex } from "next/font/google";
import { Button, Header } from "@/components";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { userAgent } from 'next/server'
const playfair = Playfair_Display({ subsets: ["latin"] });
const roboto = Roboto_Flex({ subsets: ["latin"] });

const Home = () => {
  const [externalActual, setExternalActual] = useState(1);
  const [isMobile, setIsMobile] = useState(true); //the initial state depends on mobile-first or desktop-first strategy

  useEffect(() => {
    setIsMobile(window.innerWidth <= 767.98)
  }, [])



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
        {!isMobile && (
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
                    "https://wa.me/5511953239185?text=Oie%2C%20gostaria%20de%20conhecer%20mais%20sobre%20seu%20atendimento",
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
                left: isMobile ? -100 : -120,
                bottom: -30,
                height: isMobile ? 250 : 450,
                width: isMobile ? 250 : 450,
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
                left: isMobile ? -65 : -50,
                bottom: -30,
                height: isMobile ? 250 : 450,
                width: isMobile ? 250 : 450,
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
                          "https://wa.me/5511953239185?text=Oie%2C%20gostaria%20de%20conhecer%20mais%20sobre%20seu%20atendimento",
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
