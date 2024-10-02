"use client";
import { useState, useEffect } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import Link from "next/link";
import Image from "next/image";

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
}

const ServicesCategories: React.FC<ServicesCategoriesProps> = ({ data }) => {
  const [category, setCategory] = useState("all");
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

  return (
    <section className="min-h-[1200px] py-18 mb-28">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row">
          {/* Sidebar */}
          <aside className="w-full p-4 mb-8 xl:w-[300px] xl:h-[84vh] xl:fixed">
            <RadioGroup
              defaultValue="all"
              className="flex flex-col gap-6 mb-12"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="all"
                  id="all"
                  onClick={() => setCategory("all")}
                />
                <Label htmlFor="all">Todos</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="diarista"
                  id="diarista"
                  onClick={() => setCategory("diarista")}
                />
                <Label htmlFor="diarista">Diarista</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="reparos"
                  id="reparos"
                  onClick={() => setCategory("reparos")}
                />
                <Label htmlFor="reparos">Reparos</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="mecanica"
                  id="mecanica"
                  onClick={() => setCategory("mecânica")}
                />
                <Label htmlFor="mecanica">Mecânica</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="eventos"
                  id="eventos"
                  onClick={() => setCategory("eventos")}
                />
                <Label htmlFor="eventos">Eventos</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="tecnologia"
                  id="tecnologia"
                  onClick={() => setCategory("tecnologia")}
                />
                <Label htmlFor="tecnologia">Tecnologia</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="aulas"
                  id="aulas"
                  onClick={() => setCategory("aulas")}
                />
                <Label htmlFor="aulas">Aulas</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="saude"
                  id="saude"
                  onClick={() => setCategory("saúde")}
                />
                <Label htmlFor="saude">Saúde</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="beleza"
                  id="beleza"
                  onClick={() => setCategory("beleza")}
                />
                <Label htmlFor="beleza">Beleza</Label>
              </div>
            </RadioGroup>
          </aside>

          {/* Service List */}
          <div className="flex-1 xl:ml-[320px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <Image
                    src={service.image}
                    width={200}
                    height={150}
                    alt={service.name}
                    className="rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    href={service.link}
                    className="text-primary hover:underline"
                  >
                    Solicitar orçamento
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCategories;
