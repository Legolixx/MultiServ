import Image from "next/image";

export default function Services() {
  const links = [
    {
      img: "/services/limpezas.svg",
      name: "Diarista",
      link: "/",
    },
    {
      img: "/services/reformas.svg",
      name: "Reparos",
      link: "/",
    },
    {
      img: "/services/mecanica.svg",
      name: "Mecânica",
      link: "/",
    },
    {
      img: "/services/eventos.svg",
      name: "Eventos",
      link: "/",
    },
    {
      img: "/services/tecnologias.svg",
      name: "Tecnologias",
      link: "/",
    },
    {
      img: "/services/aulas.svg",
      name: "Aulas",
      link: "/",
    },
    {
      img: "/services/saude.svg",
      name: "Saúde",
      link: "/",
    },
    {
      img: "/services/beleza.svg",
      name: "Beleza",
      link: "/",
    },
  ];

  return (
    <section className="flex flex-row justify-center gap-10 mb-28">
      {links.map((link) => (
        <a key={link.name} href={link.link}>
          <Image src={link.img} width={64} height={64} alt={link.name} className=" hover:scale-110 hover:rotate-12" />
          <span className="flex items-center justify-center text-primary font-semibold">{link.name}</span>
        </a>
      ))}
    </section>
  );  
}
