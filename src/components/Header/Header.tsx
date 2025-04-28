// components/Header/Header.tsx
import { CartItem } from '../../types.ts';
import '../../assets/styles/index.css';

type HeaderProps = {
  cartItems: CartItem[];
  onCartClick: () => void;
  onMenuClick: () => void;
};

const Header = ({ cartItems, onCartClick, onMenuClick }: HeaderProps) => {
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <div className="header__navigation">
        <img 
          className="header__menu" 
          src="./images/icon-menu.svg" 
          alt="menu icon"
          onClick={onMenuClick}
        />
        <h1 className="header__logo-text">Anime Aura</h1>

        <nav className="navbar">
          <ul className="navbar__items">
            <li><a className="navbar__link" href="#">Collections</a></li>
            <li><a className="navbar__link" href="#">Men</a></li>
            <li><a className="navbar__link" href="#">Women</a></li>
            <li><a className="navbar__link" href="#">About</a></li>
            <li><a className="navbar__link" href="#">Contact</a></li>
          </ul>
        </nav>
      </div>

      <div className="header__cart-avatar">
        <div className="header__cart" onClick={onCartClick}>
          {cartItemsCount > 0 && (
            <div className="header__cart--notification">{cartItemsCount}</div>
          )}
          <img src="./images/icon-cart.svg" alt="cart icon" />
        </div>
        <img className="header__avatar" src="./images/image-avatar.png" alt="avatar" />
      </div>
    </header>
  );
};

export default Header;