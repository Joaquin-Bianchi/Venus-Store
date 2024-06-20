import CategoryTitle from "../../../../components/ui/title/CategoryTitle";
import { ProductGrid } from "../../../../components/product/ProductGrid";
import React from "react";
import { initialData } from "../../../../seed/seed";
import { Category } from "@/interfaces/product.interface";

const products = initialData.products;

interface Props {
  params: {
    id: Category;
  };
}

export default function Category({ params }: Props) {
  const { id } = params;

  const filteredProducts = products.filter((product) => product.gender === id);
  const labels: Record<Category, string> = {
    men: "Hombre",
    women: "Mujer",
    kid: "Niño",
    unisex: "Unisex",
  };
  // if (id === "kids") {
  //   notFound();
  // }

  return (
    <>
      <CategoryTitle
        title={`Ropa de ${labels[id]}`}
        subtitle={`Toda la Ropa de ${labels[id]} `}
      />
      <ProductGrid products={filteredProducts} />
    </>
  );
}
