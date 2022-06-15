import React, { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  const { counter, increaseBy, isMaxCounterReached } = useContext(
    ProductContext
  );

  return (
    <div style={style} className={` ${styles.buttonsContainer} ${className}`}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}> {counter} </div>
      <button
        className={`${styles.buttonAdd} ${isMaxCounterReached &&
          styles.disabled}`}
        onClick={() => increaseBy(1)}
      >
        +
      </button>
    </div>
  );
};
