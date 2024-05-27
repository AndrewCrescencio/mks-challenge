import Image from "next/image";
import { motion } from "framer-motion";
import { useShoppingCart } from "@/context/shopping-cart-context";
import { IProductData } from "@/types/product.interface";
import { formatCurrency } from "@/utils/formatCurrency";

import styles from "./styles.module.scss";
import { ProductPrice } from "@/components/ui/ProductPrice";

type CartCardProps = {
  product: IProductData;
  quantity: number;
};

export const CartCard = ({ product, quantity }: CartCardProps) => {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();
  return (
    <motion.div
      className={styles["cart-card"]}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      layout
    >
      <button
        className={styles["cart-card__button--removeProduct"]}
        onClick={() => removeFromCart(product.id)}
      >
        x
      </button>
      <Image
        className={styles["cart-card__image"]}
        src={product.photo}
        alt={`Imagem de ${product.name}`}
        width={96}
        height={96}
      />
      <p className={styles["cart-card__title"]} title={product.name}>
        {product.name}
      </p>
      <div className={styles["cart-card__footer"]}>
        <div className={styles["card-card__quantity"]}>
          <button onClick={() => decreaseCartQuantity(product.id)}>-</button>
          <p>{quantity}</p>
          <button onClick={() => increaseCartQuantity(product.id)}>+</button>
        </div>
        <ProductPrice price={String(Number(product.price) * quantity)} />
      </div>
    </motion.div>
  );
};
