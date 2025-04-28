// components/CartModal/CartModal.tsx
import { CartItem } from '../../types.ts';
import '../../assets/styles/index.css';

type CartModalProps = {
  items: CartItem[];
  onClose: () => void;
  onRemoveItem: () => void;
};

const CartModal = ({ items, onRemoveItem }: CartModalProps) => {
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="cart-modal show">
      <p className="cart-modal__title">Cart</p>
      
      <div className="cart-modal__chekout-container">
        {totalItems === 0 ? (
          <p className="cart-empty">Your cart is empty</p>
        ) : (
          <>
            <div className="cart-modal__details-container">
              <img className="cart-modal__image" src={items[0].thumbnail} alt="product" />
              <div>
                <p className="cart-modal__product">{items[0].name}</p>
                <p className="cart-modal__price">
                  ${items[0].price.toFixed(2)} x{items[0].quantity} 
                  <span> ${totalPrice.toFixed(2)}</span>
                </p>
              </div>
              <img 
                className="cart-modal__delete" 
                src="./images/icon-delete.svg" 
                alt="delete"
                onClick={onRemoveItem}
              />
            </div>
            <button className="cart-modal__chekount">Checkout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;