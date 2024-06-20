import React from "react";
import CategoryTitle from "../../../components/ui/title/CategoryTitle";
import { ProductGrid } from "../../../components/product/ProductGrid";
import { initialData } from "../../../seed/seed";

const products = initialData.products;

function Shop() {
  return (
    <>
      <CategoryTitle title="Tienda" subtitle="Todos los productos" />
      <ProductGrid products={products} />
    </>
  );
}

export default Shop;
