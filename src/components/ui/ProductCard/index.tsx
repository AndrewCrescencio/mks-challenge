"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useShoppingCart } from "@/context/shopping-cart-context";
import { ProductPrice } from "@/components/ui/ProductPrice";

import styles from "./styles.module.scss";

import type { ProductCardProps } from "./types";

export const ProductCard = (props: ProductCardProps) => {
  const { increaseCartQuantity } = useShoppingCart();

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.025 }}
    >
      <div className={styles.card__image}>
        <Image
          src={props.photo}
          alt={`Imagem de ${props.name}`}
          width={111}
          height={138}
          priority={true.toString() as unknown as boolean}
        />
      </div>
      <div className={styles.card__body}>
        <div className={styles.card__header}>
          <p className={styles.card__name} title={props.name}>
            {props.name}
          </p>
          <ProductPrice price={props.price} />
        </div>
        <p className={styles.card__description} title={props.description}>
          {props.description}
        </p>
      </div>
      <button onClick={() => increaseCartQuantity(props.id)} className={styles.card__button}>
        comprar
      </button>
    </motion.div>
  );
};
