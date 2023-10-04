import { useState } from 'react';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { Product, onChangeArgs } from '../interfaces/interfaces';
import custom from '../styles/custom.module.css';

const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: './coffee-mug.png'
};

const product2 = {
  id: '2',
  title: 'Coffe Mug - Meme',
  img: './coffee-mug2.png'
};

const products: Product[] = [product, product2];

interface ProductInCart extends Product {
  count: number;
}


export const ShoppingPage = () => {


  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({
    '1': { ...product, count: 10 },
    '2': { ...product2, count: 2 },
  });

  const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
    console.log({ count, product });
  }

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>

        {/* <ProductCard product={product} className={`${custom.bgdark} ${custom.textwhite}`}>
          <ProductCard.Image className={custom.customimage} />
          <ProductCard.Title className={custom.textbold} activeClass='active' />
          <ProductCard.Buttons className={custom.custombuttons} />
        </ProductCard> */}

        {
          products.map(product =>
          (
            <ProductCard key={product.id}
              className={`${custom.bgdark} ${custom.textwhite}`}
              product={product}
              onChange={onProductCountChange}
            >
              <ProductImage className={custom.customimage} />
              <ProductTitle className={custom.textbold} activeClass='active' />
              <ProductButtons className={custom.custombuttons} />
            </ProductCard>
          ))
        }
      </div>
      <div className={custom.shoppingcart}>
        <ProductCard
          className={`${custom.bgdark} ${custom.textwhite}`}
          product={product}
          style={{ width: '100px' }}>
          <ProductImage className={custom.customimage} />
          <ProductButtons className={custom.custombuttons} />
        </ProductCard>

        <ProductCard
          className={`${custom.bgdark} ${custom.textwhite}`}
          product={product2} style={{ width: '100px' }}>
          <ProductImage className={custom.customimage} />
          <ProductButtons className={custom.custombuttons} />
        </ProductCard>
      </div>
    </div>
  )
}
