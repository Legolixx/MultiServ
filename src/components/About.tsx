import Image from "next/image";

export default function About() {
  return (
    <section className="mb-28">
      <div className="mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="h1 text-primary text-center mb-5 xl:mb-0">
            O que é a{" "}
            <span className="tracking-[15px] underline">MultiServ</span> ?
          </h1>
          <p className="text-muted-foreground m-2 xl:m-10 text-2xl text-center">
            MultiServ é a maior plataforma de contratação de serviços do Brasil.
            Conectamos Profissionais de todo o Brasil com pessoas solicitando
            serviço, atendendo com qualidade, facilidade e rapidez todos os
            tipos de necessidade.
          </p>
        </div>
        <div className="flex flex-col xl:grid xl:grid-cols-3">
          <div className="col-span-1 flex flex-col items-center">
            <Image src="/clique.svg" width={150} height={150} alt="" />
            <h1 className="h3 text-primary">Faça o seu pedido</h1>
            <p className="text-muted-foreground text-lg mt-5">
              Fale o que você precisa. É rápido e de graça!
            </p>
          </div>
          <div className="col-span-1 flex flex-col items-center">
            <Image
              src="/card_trabalhador.svg"
              width={150}
              height={150}
              alt=""
            />
            <h1 className="h3 text-primary">Receba até quatro orçamentos</h1>
            <p className="text-muted-foreground text-lg mt-5 text-center">
              Profissionais avaliados entram em contato com você em instantes!
            </p>
          </div>
          <div className="col-span-1 flex flex-col items-center">
            <Image src="/like.svg" width={150} height={150} alt="" />
            <h1 className="h3 text-primary">Escolha o melhor</h1>
            <p className="text-muted-foreground text-lg mt-5">
              Negocie direto com o fornecedor!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
