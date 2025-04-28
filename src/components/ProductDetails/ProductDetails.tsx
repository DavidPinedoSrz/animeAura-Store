// components/ProductDetails/ProductDetails.tsx
import { useState } from 'react';
import { Product } from '../../types.ts';
import '../../assets/styles/index.css';

type ProductDetailsProps = {
  product: Product;
  onAddToCart: (quantity: number) => void;
};

const ProductDetails = ({ product, onAddToCart }: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState(0);

  const handleDecrease = () => {
    setQuantity(prev => Math.max(0, prev - 1));
  };

  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  const handleAddToCart = () => {
    onAddToCart(quantity);
    setQuantity(0);
  };

  return (
    <article className="details">
      <h2 className="details__company">{product.company}</h2>
      <h2 className="details__title">{product.title}</h2>
      <p className="details__description">{product.description}</p>
      
      <div className="details__prices">
        <p className="details__now">
          ${product.price.toFixed(2)} 
          <span className="details__discount">{product.discount}%</span>
        </p>
        <p className="details__before">${product.originalPrice.toFixed(2)}</p>
      </div>
      
      <div className="details__product-quantity">
        <div className="input">
          <img 
            className="input__minus" 
            src="./images/icon-minus.svg" 
            alt="minus"
            onClick={handleDecrease}
          />
          <input 
            className="input__number" 
            type="text" 
            value={quantity}
            readOnly
          />
          <img 
            className="input__plus" 
            src="./images/icon-plus.svg" 
            alt="plus"
            onClick={handleIncrease}
          />
        </div>
        <button className="details__button" onClick={handleAddToCart}>
          <img src="./images/icon-cart-white.svg" alt="cart icon" /> 
          Add to cart
        </button>
      </div>
    </article>
  );
};

export default ProductDetails;