import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductButtonsProps} from "../components/ProductButtons";
import { Props as ProductTitleProps} from "../components/ProductTitle";
import { Props as ProductImageProps} from "../components/ProductImage";

export interface Product {
  id: string;
  title: string;
  image?: string;
}

export interface ProductContextProps {
  counter: number;
  product: Product;
  increaseBy: (value: number) => void;
  maxCount?: number
  isMaxCounterReached: boolean
}

export interface ProductHOCProps {
    ({ product, children }: ProductCardProps): JSX.Element;
    Title:   (props: ProductTitleProps) => JSX.Element;
    Image:   (props: ProductImageProps) => JSX.Element;
    Buttons: (props: ProductButtonsProps) => JSX.Element;
}

export interface onChageArgs {
  product: Product;
  count: number
}

export interface ShoppingCart extends Product {
  count: number;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCounterReached: boolean;
  maxCount?: number;
  product: Product;
  increaseBy: (value: number) => void;
  reset: () => void;

}