"use client";
import { useState, useEffect } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import ProjectCard from "./ProjectCard";

import { useRouter } from "next/navigation";

interface DataProject {
  id: string;
  image: string;
  category: string;
  name: string;
  description: string;
  link: string;
}

interface ServicesCategoriesProps {
  data: DataProject[];
  initialCategory: string;
}

const ServicesCategories: React.FC<ServicesCategoriesProps> = ({
  data,
  initialCategory,
}) => {
  const router = useRouter();
  const [category, setCategory] = useState(initialCategory);
  const [filteredServices, setFilteredServices] = useState<DataProject[]>([]);

  useEffect(() => {
    const filtered =
      category === "all"
        ? data
        : data.filter(
            (item) => item.category.toLowerCase() === category.toLowerCase()
          );
    setFilteredServices(filtered);
  }, [category, data]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set("categoria", category);
    router.replace(`${window.location.pathname}?${params.toString()}`);
  }, [category, router]);

  return (
    <section className="min-h-[1200px] py-18 mb-28">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row">
          {/* Sidebar */}
          <aside className="w-full p-4 mb-8 xl:w-[300px] xl:h-[84vh] xl:fixed">
            <RadioGroup
              value={category}
              onValueChange={setCategory}
              className="flex flex-col gap-6 mb-12"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="all" />
                <Label htmlFor="all">Todos</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="diarista" id="diarista" />
                <Label htmlFor="diarista">Diarista</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="reparos" id="reparos" />
                <Label htmlFor="reparos">Reparos</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="mecânica" id="mecanica" />
                <Label htmlFor="mecanica">Mecânica</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="eventos" id="eventos" />
                <Label htmlFor="eventos">Eventos</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="tecnologia" id="tecnologia" />
                <Label htmlFor="tecnologia">Tecnologia</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="aulas" id="aulas" />
                <Label htmlFor="aulas">Aulas</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="saúde" id="saude" />
                <Label htmlFor="saude">Saúde</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="beleza" id="beleza" />
                <Label htmlFor="beleza">Beleza</Label>
              </div>
            </RadioGroup>
          </aside>

          {/* Service List */}
          <div className="flex-1 xl:ml-[320px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((project) => (
                <ProjectCard
                  key={project.id}
                  isServiceCard={true}
                  project={project}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCategories;
