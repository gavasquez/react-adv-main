import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import noImage from "../assets/no-image.jpg";

interface Props {
    product: Product,
}

interface Product {
    id: string,
    title: string,
    img?: string
}

export const ProductImage = ({ img = '' }) => {
    return (<img src={img ? img : noImage} alt="Product Img" className={styles.productImg} />)
}

export const ProductTitle = ({ title }: { title: string }) => {
    return (<span className={styles.productDescription}>{title}</span>);
}

interface ProdcutsButtonsProps {
    increaseBy: (value: number) => void,
    counter: number,
}

export const PorductButtons = ({ increaseBy, counter }: ProdcutsButtonsProps) => {
    return (
        <div className={styles.buttonsContainer}>
            <button
                onClick={() => increaseBy(-1)}
                className={styles.buttonMinus}>
                -
            </button>
            <div
                className={styles.countLabel}>
                {counter}
            </div>
            <button
                onClick={() => increaseBy(1)}
                className={styles.buttonAdd}>
                +
            </button>
        </div>
    );
}

export const ProductCard = ({ product }: Props) => {

    const { counter, increaseBy } = useProduct();

    return (
        <div className={styles.productCard}>

            <ProductImage img={product.img} />

            <ProductTitle title={product.title} />

            <PorductButtons increaseBy={increaseBy} counter={counter} />
        </div>
    )
}
