import { IProductDataResponse } from "@/types/product.interface";
import { useQuery } from "@tanstack/react-query";

const API_URL =
  process.env.API_URL ||
  "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC";

export const fetchData = async (): Promise<IProductDataResponse> => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  const data = await response.json();

  if (data && data.products) {
    return data;
  } else {
    throw new Error("Invalid response structure: missing 'products' property");
  }
};

export function useProductData() {
  return useQuery({
    queryKey: ["products-data"],
    queryFn: async () => fetchData(),
  });
}
