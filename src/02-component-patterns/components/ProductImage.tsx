import { useContext, CSSProperties } from 'react';
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";
import styles from '../styles/styles.module.css';

export interface Props {
    img?: string,
    className?: string,
    style?: CSSProperties
}

export const ProductImage = ({ img , className, style }: Props) => {
    const { product } = useContext(ProductContext);
    let imageToShow: string;
    if (img) {
        imageToShow = img;
    } else if (product.img) {
        imageToShow = product.img;
    } else {
        imageToShow = noImage;
    }
    return (<img src={imageToShow} alt="ProductImg" className={`${styles.productImg} ${className}`} style={style}/>)
}