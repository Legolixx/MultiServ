import Image from "next/image";

export default function Services() {
  const links = [
    {
      img: "/services/limpezas.svg",
      name: "Diarista",
      link: "/servicos?categoria=diarista",
    },
    {
      img: "/services/reformas.svg",
      name: "Reparos",
      link: "/servicos?categoria=reparos",
    },
    {
      img: "/services/mecanica.svg",
      name: "Mecânica",
      link: "/servicos?categoria=mecânica",
    },
    {
      img: "/services/eventos.svg",
      name: "Eventos",
      link: "/servicos?categoria=eventos",
    },
    {
      img: "/services/tecnologias.svg",
      name: "Tecnologias",
      link: "/servicos?categoria=tecnologia",
    },
    {
      img: "/services/aulas.svg",
      name: "Aulas",
      link: "/servicos?categoria=aulas",
    },
    {
      img: "/services/saude.svg",
      name: "Saúde",
      link: "/servicos?categoria=saúde",
    },
    {
      img: "/services/beleza.svg",
      name: "Beleza",
      link: "/servicos?categoria=beleza",
    },
  ];

  return (
    <section className="grid grid-cols-2 md:grid-cols-8 items-center justify-center gap-10 mb-28 m-20">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.link}
          className="flex flex-col items-center justify-center"
        >
          <Image
            src={link.img}
            width={64}
            height={64}
            alt={link.name}
            className="hover:scale-110 hover:rotate-12 flex items-center justify-center"
          />
          <span className="flex items-center justify-center text-primary font-semibold">
            {link.name}
          </span>
        </a>
      ))}
    </section>
  );
}
