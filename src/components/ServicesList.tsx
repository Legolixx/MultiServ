"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ProjectCard from "@/components/ProjectCard";

interface DataProject {
  id: string;
  image: string;
  category: string;
  name: string;
  description: string;
  link: string;
}

const projectData = [
    // Diarista
    {
      id: "1",
      image: "https://media.istockphoto.com/id/1214907685/pt/foto/hands-with-glove-wiping-doorknob.jpg?s=612x612&w=0&k=20&c=7-l9ADx-0utmoed83EJlKqeF0G8vWLmE7_zCp1fBFcI=",
      category: "Diarista",
      name: "Limpeza Residencial",
      description: "Serviço completo de limpeza para casas e apartamentos.",
      link: "/servicos/diarista/limpeza-residencial",
    },
    {
      id: "2",
      image: "https://media.istockphoto.com/id/607920994/pt/foto/electrician-and-general-worker-washing-the-floor.jpg?s=612x612&w=0&k=20&c=uCGCaWC2oqm5Qko1oxLr1-ThcygG1zueV2Z_dVNgRJg=",
      category: "Diarista",
      name: "Limpeza Pós-Obra",
      description: "Limpeza especializada para residências após reformas ou construções.",
      link: "/servicos/diarista/limpeza-pos-obra",
    },
    
    // Reparos
    {
      id: "3",
      image: "https://media.istockphoto.com/id/1305090381/pt/foto/engineer-checking-for-abnormal-solar-power-system-operation-and-found-that-there-is-a-lack-of.jpg?s=612x612&w=0&k=20&c=vt9WBkkEusd1kKu73_6b4vBaUpv5EctmyrKD_M1TF30=",
      category: "Reparos",
      name: "Serviços de Eletricista",
      description: "Instalações e reparos elétricos em geral.",
      link: "/servicos/reparos/eletricista",
    },
    {
      id: "4",
      image: "https://media.istockphoto.com/id/1516511531/pt/foto/a-plumber-carefully-fixes-a-leak-in-a-sink-using-a-wrench.jpg?s=612x612&w=0&k=20&c=42HJYPRZYjgW35vZMKAnVtRQeuy7oc5vekp7TmS1RFU=",
      category: "Reparos",
      name: "Serviços de Encanador",
      description: "Reparos e manutenção em encanamentos e sistemas hidráulicos.",
      link: "/servicos/reparos/encanador",
    },
    
    // Mecânica
    {
      id: "5",
      image: "https://media.istockphoto.com/id/685796748/pt/foto/professional-mechanic-repairing-a-car-in-auto-repair-shop.jpg?s=612x612&w=0&k=20&c=tsCyyr9mdEGZYSij1ceSjylCO-f1UkxIurcCaBScQ-0=",
      category: "Mecânica",
      name: "Mecânica de Carros",
      description: "Manutenção preventiva e corretiva de automóveis.",
      link: "/servicos/mecanica/carros",
    },
    {
      id: "6",
      image: "https://media.istockphoto.com/id/2085107253/pt/foto/mechanic-installing-a-tire-on-a-motorcycle-at-a-repair-shop.jpg?s=612x612&w=0&k=20&c=dLaNNq_IH2ez0meBK2g0-pdsR69v16tJSd9n5sFch48=",
      category: "Mecânica",
      name: "Mecânica de Motos",
      description: "Reparos e manutenção para motocicletas.",
      link: "/servicos/mecanica/motos",
    },
    
    // Eventos
    {
      id: "7",
      image: "https://media.istockphoto.com/id/1473311193/pt/foto/set-of-gold-wedding-rings-tied-with-a-pink-ribbon-in-the-wedding-hall.jpg?s=612x612&w=0&k=20&c=H9OZIdHlZdexlMZ4Os_l4HpVRwGch3MMQqA5PQ-O-Fo=",
      category: "Eventos",
      name: "Organização de Casamentos",
      description: "Planejamento completo para casamentos.",
      link: "/servicos/eventos/casamentos",
    },
    {
      id: "8",
      image: "https://media.istockphoto.com/id/1390673267/pt/foto/group-of-diverse-business-people-applauding-together.jpg?s=612x612&w=0&k=20&c=NcCW4l-soNu4PKfYOPTqdQGUZ1sxupMWODXNhfBu2-Y=",
      category: "Eventos",
      name: "Festas Corporativas",
      description: "Organização de eventos e confraternizações empresariais.",
      link: "/servicos/eventos/corporativos",
    },
    
    // Tecnologia
    {
      id: "9",
      image: "https://media.istockphoto.com/id/1013820482/pt/foto/designer-team-sketching-a-logo-in-digital-design-studio-on-computer-creative-graphic-drawing.jpg?s=612x612&w=0&k=20&c=DJ_CVHT70lIPNzYqaMM_M2UfRfou6sXeMAp_WsivYkY=",
      category: "Tecnologia",
      name: "Desenvolvimento de Websites",
      description: "Criação de sites personalizados e responsivos.",
      link: "/servicos/tecnologia/websites",
    },
    {
      id: "10",
      image: "https://media.istockphoto.com/id/1496911536/pt/foto/close-up-of-the-computer-tower-and-the-hands-of-a-man-trying-to-find-the-problem-and-fix-the.jpg?s=612x612&w=0&k=20&c=05KWApcGGIikpE98xHTAyzKcJF_t8hD4uHN_0qJHwx4=",
      category: "Tecnologia",
      name: "Suporte Técnico",
      description: "Suporte para manutenção de computadores e sistemas.",
      link: "/servicos/tecnologia/suporte-tecnico",
    },
    
    // Aulas
    {
      id: "11",
      image: "https://media.istockphoto.com/id/1159806988/pt/foto/a-left-handed-person-solving-math-problem.jpg?s=612x612&w=0&k=20&c=Vx6xbBnVuzAA361Vw9bcMYLUzNZW5OhQcio27pRwfKs=",
      category: "Aulas",
      name: "Aulas de Matemática",
      description: "Reforço escolar em matemática para todos os níveis.",
      link: "/servicos/aulas/matematica",
    },
    {
      id: "12",
      image: "https://media.istockphoto.com/id/1039281614/pt/foto/young-boy-teaching-to-play-guitar.jpg?s=612x612&w=0&k=20&c=aA8CuJNUF5dBcPSIRthTaziNuefZKnaxSi68EFZOjs4=",
      category: "Aulas",
      name: "Aulas de Música",
      description: "Aulas de violão, piano e outros instrumentos musicais.",
      link: "/servicos/aulas/musica",
    },
    
    // Saúde
    {
      id: "13",
      image: "https://media.istockphoto.com/id/1319031310/pt/foto/doctor-writing-a-medical-prescription.jpg?s=612x612&w=0&k=20&c=_Eh9iQY19uLOaksMSlc-alskCFWpP5A-1Cce9P0PIwA=",
      category: "Saúde",
      name: "Consulta Médica",
      description: "Atendimento médico especializado em diversas áreas.",
      link: "/servicos/saude/consulta-medica",
    },
    {
      id: "14",
      image: "https://media.istockphoto.com/id/1719538630/pt/foto/patient-at-home-doing-physiotherapy-with-dumbbell.jpg?s=612x612&w=0&k=20&c=7_rEgiNYh6d2rsxSeEyAlUobRrunU6lgrAJVav7tKd8=",
      category: "Saúde",
      name: "Fisioterapia",
      description: "Tratamentos de reabilitação física com fisioterapeutas qualificados.",
      link: "/servicos/saude/fisioterapia",
    },
    
    // Beleza
    {
      id: "15",
      image: "https://media.istockphoto.com/id/1678703867/pt/foto/beautiful-young-woman-getting-her-hair-cut.jpg?s=612x612&w=0&k=20&c=QaBMKiQnUXvEVPR3yqd2dwWIdxVodppvRkp4YlxpzpE=",
      category: "Beleza",
      name: "Corte de Cabelo",
      description: "Serviço de corte de cabelo para todas as idades.",
      link: "/servicos/beleza/corte-de-cabelo",
    },
    {
      id: "16",
      image: "https://media.istockphoto.com/id/1410991343/pt/foto/close-up-of-female-hands-having-manicure-treatment.jpg?s=612x612&w=0&k=20&c=6d8fkrldP4NPkjYo-ta4vJp_F-A9VxlXzTb4TffswJI=",
      category: "Beleza",
      name: "Manicure e Pedicure",
      description: "Tratamentos completos para unhas e pés.",
      link: "/servicos/beleza/manicure-pedicure",
    },
  ];
  

const Work = () => {
  return (
    <section className="relative mb-20 xl:mb-28">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="h3 text-primary mb-4 max-w-[10em] tracking-wide">
            Serviços mais solicitados
          </h2>
          <p className="subtitle mb-8 xl:max-w-[16em]">
            Descubra os serviços que mais atendem às necessidades dos nossos
            clientes em cada área.
          </p>
          <Link href="/servicos">
            <Button>Todos os Serviços</Button>
          </Link>
        </div>
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0 xl:pr-10">
          <Swiper
            className="h-[450px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData.slice(0, 16).map((project: DataProject, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
