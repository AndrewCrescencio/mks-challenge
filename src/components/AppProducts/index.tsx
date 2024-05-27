"use client";

import { IProductData } from "@/types/product.interface";
import { ProductCard } from "@/components/ui/ProductCard";
import styles from "./styles.module.scss";

import { useProductData } from "@/hooks/useProductsData";
import { Loader } from "../ui/Loader";
interface AppProductsProps {
  products: IProductData[];
}

export const AppProducts = () => {
  const { data, error, fetchStatus } = useProductData();

  if (error) return error.message;
  if (!data) return <Loader />;
  if (data?.products)
    return (
      <section className={styles.products}>
        <div className={styles.products__grid}>
          {data.products.map((product) => {
            return <ProductCard key={product.id} {...product} />;
          })}
        </div>
      </section>
    );
};
