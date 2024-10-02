"use client";

import ServicesCategories from "@/components/ServicesCategories";
import React from "react";
import data from "@/static/data.json";
import { useSearchParams } from "next/navigation";

const ServicePage = () => {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("categoria") || "all";

  return (
    <section>
      <ServicesCategories data={data} initialCategory={initialCategory} />
    </section>
  );
};

export default ServicePage;
