import { ProductCard as ProductCardComponent } from "./ProductCard";

import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductHOCProps } from "../interfaces/interfaces";

export { ProductButtons } 
export { ProductImage } 
export { ProductTitle } 

export const ProductCard: ProductHOCProps = Object.assign( ProductCardComponent, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})


