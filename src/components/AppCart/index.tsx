import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles.module.scss";
import { useShoppingCart } from "@/context/shopping-cart-context";
import { useProductData } from "@/hooks/useProductsData";
import { formatCurrency } from "@/utils/formatCurrency";
import { CartCard } from "@/components/ui/CartCard";

interface AppCartProps {
  isCartOpen: boolean;
  onClose: () => void;
}

export function AppCart({ isCartOpen, onClose }: AppCartProps) {
  const { cartItems } = useShoppingCart();
  const { data } = useProductData();

  const totalAmount = cartItems.reduce((total, cartItem) => {
    const item = data?.products.find((i) => i.id === cartItem.id);
    return total + (Number(item?.price) || 0) * cartItem.quantity;
  }, 0);

  return (
    <AnimatePresence>
      {isCartOpen && data && (
        <motion.nav
          className={styles["app-cart"]}
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: "0%" }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.3 },
          }}
          layout
        >
          <div className={styles["app-cart__header"]}>
            <p>
              Carrinho <br />
              de compras
            </p>
            <button className={styles["app-cart__closeButton"]} onClick={onClose}>
              X
            </button>
          </div>
          <div className={styles["app-cart__list--container"]}>
            <div className={styles["app-cart__list"]}>
              {cartItems.map((cartItem) => {
                const product = data.products.find((p) => p.id === cartItem.id);
                if (!product) return null;
                return <CartCard key={cartItem.id} product={product} quantity={cartItem.quantity} />;
              })}
            </div>
          </div>
          <div className={styles["app-cart__total"]}>
            <p>Total: </p>
            {formatCurrency(totalAmount)}
          </div>
          <button className={styles["app-cart__buyButton"]}>Finalizar Compra</button>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
