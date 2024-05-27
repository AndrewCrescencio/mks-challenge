import userEvent from '@testing-library/user-event'
import { render, screen, } from "@testing-library/react";
import { ProductCard } from "."; // Assuming ProductCard is in the same directory
import { useShoppingCart } from "@/context/shopping-cart-context"; // Assuming the context hook is here

jest.mock("@/context/shopping-cart-context", () => ({
  useShoppingCart: jest.fn(() => ({
    increaseCartQuantity: jest.fn(), // Mock the function
  })),
}));

const mockProduct = {
  id: 1,
  brand: 'test brand',
  name: "Test Product",
  photo: "/path/to/image.jpg",
  price: '19.99',
  description: "A great product for testing",
};

describe("ProductCard component", () => {
  test("renders product details and button", () => {
    render(<ProductCard {...mockProduct} />);

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(/R\$\d+\.\d\d/)).toBeInTheDocument(); // Check for formatted price
    expect(screen.getByText("comprar")).toBeInTheDocument();
  });

  test("calls increaseCartQuantity on button click", () => {
    const mockIncreaseCartQuantity = jest.fn();
    jest.mocked(useShoppingCart).mockReturnValueOnce({
      increaseCartQuantity: mockIncreaseCartQuantity,
    });

    render(<ProductCard {...mockProduct} />);

    const button = screen.getByRole("button", { name: /comprar/i });
    userEvent.click(button);

    expect(mockIncreaseCartQuantity).toHaveBeenCalledWith(mockProduct.id);
  });
});