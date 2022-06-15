import { useEffect, useRef, useState } from 'react';
import { InitialValues, onChageArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
  onChange?: (args: onChageArgs) => void;
  value?: number;
  product: Product;
  initialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count ?? value);

  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);
    newValue = initialValues?.maxCount
      ? Math.min(newValue, initialValues?.maxCount)
      : newValue;
    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  return {
    counter,
    increaseBy,
    isMaxCounterReached:
      !!initialValues?.maxCount && initialValues?.maxCount === counter,
    maxCount: initialValues?.maxCount,
    reset,
  };
};
