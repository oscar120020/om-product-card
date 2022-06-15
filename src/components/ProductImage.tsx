import React, { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

export interface Props {
  image?: string;
  className?: string;
  style?: React.CSSProperties
}

export const ProductImage = ({ image, className, style }: Props) => {
  
    const { product } = useContext(ProductContext)
    let imageToShow: string;
  
    if(image){
      imageToShow = image
    }else if(product.image){
      imageToShow = product.image
    }else{
      imageToShow = noImage
    }
  
    return (
      <img
        className={` ${className} ${styles.productImg}`}
        style={style}
        src={imageToShow}
        alt="coffe"
      />
    );
  };