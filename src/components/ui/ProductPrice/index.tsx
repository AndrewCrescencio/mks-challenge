import { formatCurrency } from "@/utils/formatCurrency";
import styles from "./styles.module.scss";

export const ProductPrice = ({ price }: { price: string }) => {
  return <span className={styles["product-price"]}>{formatCurrency(Number(price))}</span>;
};
