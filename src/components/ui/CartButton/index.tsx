"use client";

import { useCallback, useEffect, useState } from "react";
import { useShoppingCart } from "@/context/shopping-cart-context";
import { AppCart } from "../../AppCart";
import styles from "./styles.module.scss";
import { IconCart } from "@/components/ui/Icon/Cart";

export const CartButton = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const { getCartQuantity } = useShoppingCart();

  const handleClose = useCallback(() => setIsCartOpen(false), []);
  const handleOpen = useCallback(() => setIsCartOpen(true), []);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <>
      <button className={styles["cart-button"]} onClick={handleOpen}>
        <IconCart />
        {isHydrated ? getCartQuantity() : null}
      </button>
      <AppCart isCartOpen={isCartOpen} onClose={handleClose} />
    </>
  );
};
