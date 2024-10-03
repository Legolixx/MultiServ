import React, { FC } from "react";
import data from "@/static/data.json";
import Image from "next/image";
import RequestForm from "@/components/forms/FormService";

interface PostPageProps {
  params: { id: string };
}

const PageId: FC<PostPageProps> = ({ params }) => {
  const { id } = params;

  const dataFiltered = data.filter((item) => item.id === id);

  return (
    <section className="flex flex-col items-center w-full min-h-[110vh] p-5 md:p-10">
      {dataFiltered.length > 0 ? (
        <div className="flex flex-col md:flex-row w-full gap-10">
          <div className="flex flex-col w-full md:w-1/2 items-center space-y-6">
            <Image
              src={dataFiltered[0].image}
              width={500}
              height={500}
              alt={dataFiltered[0].name}
              className="rounded-md"
              priority
            />
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-primary">{dataFiltered[0].name}</h3>
              <p className="mt-3 text-muted-foreground">{dataFiltered[0].description}</p>
            </div>
          </div>
          <RequestForm />
        </div>
      ) : (
        <p>Nenhum dado encontrado para este ID.</p>
      )}
    </section>
  );
};

export default PageId;
