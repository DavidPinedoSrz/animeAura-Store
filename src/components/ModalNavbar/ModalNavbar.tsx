// components/ModalNavbar/ModalNavbar.tsx
import '../../assets/styles/index.css';

type ModalNavbarProps = {
  onClose: () => void;
};

const ModalNavbar = ({ onClose }: ModalNavbarProps) => {
  return (
    <div className="modal-navbar__background">
      <nav className="modal-navbar">
        <img 
          className="modal-navbar__close-icon" 
          src="./images/icon-close.svg" 
          alt="close"
          onClick={onClose}
        />
        
        <ul className="modal-navbar__items">
          <li><a className="modal-navbar__link" href="#">Collections</a></li>
          <li><a className="modal-navbar__link" href="#">Men</a></li>
          <li><a className="modal-navbar__link" href="#">Women</a></li>
          <li><a className="modal-navbar__link" href="#">About</a></li>
          <li><a className="modal-navbar__link" href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default ModalNavbar;