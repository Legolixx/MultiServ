"use client";

import ServicesCategories from "@/components/ServicesCategories";
import React, { Suspense } from "react";
import data from "@/static/data.json";
import { useSearchParams } from "next/navigation";

const ServicePage = () => {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("categoria") || "all";

  return (
    <section>
      <Suspense>
        <ServicesCategories data={data} initialCategory={initialCategory} />
      </Suspense>
    </section>
  );
};

export default ServicePage;
