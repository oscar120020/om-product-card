import { useProduct } from "../hooks/useProduct";
import styles from "../styles/styles.module.css";
import React, { createContext } from "react";
import { InitialValues, onChageArgs, Product, ProductCardHandlers, ProductContextProps } from "../interfaces/interfaces";

export interface Props {
  product: Product;
  // children?: React.ReactElement | React.ReactElement[];
  children?: (args: ProductCardHandlers) => JSX.Element
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChageArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: Props) => {
  const { counter, increaseBy, maxCount, isMaxCounterReached, reset } = useProduct({onChange, product, value, initialValues});

  return (
    <Provider value={{
      counter,
      increaseBy,
      product,
      isMaxCounterReached
    }} >
      <div style={style} className={`${styles.productCard} ${className}`}>
        { children && 
          children({
            count: counter,
            increaseBy,
            isMaxCounterReached,
            product,
            reset,
            maxCount
          }) 
        }
      </div>
    </Provider>
  );
};

