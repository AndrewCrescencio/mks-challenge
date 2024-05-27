// app/posts/page.jsx
//TanStack Query - aka react query - example
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

import styles from "./page.module.css";

import { AppHeader } from "@/components/AppHeader";
import { AppFooter } from "@/components/AppFooter";

import { AppProducts } from "@/components/AppProducts";

import { fetchData, useProductData } from "@/hooks/useProductsData";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: fetchData,
  });

  return (
    <main className={styles.main}>
      <AppHeader />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <AppProducts />
        <AppFooter />
      </HydrationBoundary>
    </main>
  );
}
