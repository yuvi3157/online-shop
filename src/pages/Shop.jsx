import React from "react";
import { useSelector } from "react-redux";
import { ProductCard } from "../components/ProductCard";

export const Shop = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-2xl font-bold mb-6 text-center ">Shop</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cusrsor pointer">
        {products?.products?.slice(0, 10).map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};
