import { useState } from "react";
import { onChageArgs, ShoppingCart } from "../interfaces/interfaces";

export const useShopingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ShoppingCart;
  }>({});

  const onProductCartChange = ({ product, count }: onChageArgs) => {
    setShoppingCart((previus) => {

      if(count === 0){
          const { [product.id]: toDelete, ...rest } = previus;
          return rest;
      }

      return {
          ...previus,
          [product.id]: {...product, count}
      }

    });
  };

  return {
      shoppingCart,
      onProductCartChange
  }
};
