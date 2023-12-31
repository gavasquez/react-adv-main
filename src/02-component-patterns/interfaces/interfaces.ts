import { Props as ProductBtnsProps } from "../components/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps } from '../components/ProductTitle';

export interface Product {
    id: string,
    title: string,
    img?: string
}

export interface ProductoContextProps {
    counter: number,
    increaseBy: (value: number) => void,
    product: Product,
}

export interface ProductCardHOCPros {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element,
    Image: (Props: ProductImageProps) => JSX.Element,
    Buttons: (Props: ProductBtnsProps) => JSX.Element
}

export interface onChangeArgs {
    product: Product,
    count: number,
}