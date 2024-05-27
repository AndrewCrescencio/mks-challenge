import { AppLogo } from "@/components/ui/AppLogo";
import { CartButton } from "@/components/ui/CartButton";
import styles from "./styles.module.scss";
export const AppHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <AppLogo />
        <CartButton />
      </div>
    </header>
  );
};
