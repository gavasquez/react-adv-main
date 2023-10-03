import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import custom from '../styles/custom.module.css';

const product =
{
  id: '1',
  title: 'Coffe Mug - Card',
  img: './coffee-mug.png'
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>

        <ProductCard product={product} className={`${custom.bgdark} ${custom.textwhite}`}>
          <ProductCard.Image className={custom.customimage} />
          <ProductCard.Title className={custom.textbold} activeClass='active' />
          <ProductCard.Buttons className={custom.custombuttons} />
        </ProductCard>

        <ProductCard
          className={`${custom.bgdark} ${custom.textwhite}`}
          product={product}>
          <ProductImage className={custom.customimage} />
          <ProductTitle className={custom.textbold} activeClass='active' />
          <ProductButtons className={custom.custombuttons} />
        </ProductCard>

        <ProductCard product={product} style={{ backgroundColor: '#70D1F8' }}>
          <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
          <ProductTitle style={{ display: 'flex', justifyContent: 'center' }} />
          <ProductButtons style={{ display: 'flex', justifyContent: 'center' }} />
        </ProductCard>
      </div>
    </div>
  )
}
