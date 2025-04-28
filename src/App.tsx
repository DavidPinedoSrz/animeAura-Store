// App.tsx
import { useState } from 'react';
import Header from './components/Header/Header.tsx';
import Gallery from './components/Gallery/Gallery.tsx';
import ProductDetails from './components/ProductDetails/ProductDetails.tsx';
import CartModal from './components/CartModal/CartModal.tsx';
import ModalGallery from './components/ModalGallery/ModalGallery.tsx';
import ModalNavbar from './components/ModalNavbar/ModalNavbar.tsx';
import { Product, Thumbnail, CartItem } from './types.ts';

const App = () => {
  const [showCartModal, setShowCartModal] = useState(false);
  const [showModalGallery, setShowModalGallery] = useState(false);
  const [showModalNavbar, setShowModalNavbar] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(1);

  const product: Product = {
    company: "One Piece Official",
    title: "Limited Edition: Luffy Gear 5",
    description: "Premium shirt with Luffy's exclusive design in its gear transformation 5. 100% cotton and limited edition for true nakamas! Ideal to combine with your One Piece accessories.",
    price: 125.00,
    discount: 50,
    originalPrice: 250.00
  };

  const thumbnails: Thumbnail[] = [
    { id: 1, src: "./images/image-product-1-thumbnail.jpg", alt: "thumbnail 1" },
    { id: 2, src: "./images/image-product-2-thumbnail.jpg", alt: "thumbnail 2" },
    { id: 3, src: "./images/image-product-3-thumbnail.jpg", alt: "thumbnail 3" },
    { id: 4, src: "./images/image-product-4-thumbnail.jpg", alt: "thumbnail 4" }
  ];

  const addToCart = (quantity: number) => {
  if (quantity > 0) {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === 1);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === 1 ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [{
        id: 1,
        name: product.title,
        price: product.price,
        quantity,
        thumbnail: thumbnails[0].src
      }];
    });
  }
};

  const removeFromCart = () => {
    setCartItems([]);
  };

  const nextImage = () => {
    setCurrentImageIndex(prev => prev === 4 ? 1 : prev + 1);
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => prev === 1 ? 4 : prev - 1);
  };

  const selectImage = (id: number) => {
    setCurrentImageIndex(id);
  };

  return (
    <div className="main-container">
      <Header 
        cartItems={cartItems} 
        onCartClick={() => setShowCartModal(!showCartModal)} 
        onMenuClick={() => setShowModalNavbar(true)}
      />
      
      <main className="content">
        <Gallery 
          currentImageIndex={currentImageIndex}
          thumbnails={thumbnails}
          onThumbnailClick={selectImage}
          onMainImageClick={() => setShowModalGallery(true)}
          onNextClick={nextImage}
          onPrevClick={prevImage}
        />
        
        <ProductDetails 
          product={product} 
          onAddToCart={addToCart} 
        />
      </main>

      {showCartModal && (
        <CartModal 
          items={cartItems} 
          onClose={() => setShowCartModal(false)}
          onRemoveItem={removeFromCart}
        />
      )}

      {showModalGallery && (
        <ModalGallery 
          currentImageIndex={currentImageIndex}
          thumbnails={thumbnails}
          onClose={() => setShowModalGallery(false)}
          onThumbnailClick={selectImage}
          onNextClick={nextImage}
          onPrevClick={prevImage}
        />
      )}

      {showModalNavbar && (
        <ModalNavbar onClose={() => setShowModalNavbar(false)} />
      )}

      <footer className="attribution">
        <p>Did you find the one piece?</p>
       <p>Versioned to Typescript and React by David Pinedo Srz.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/tu-perfil-linkedin" target="_blank" rel="noopener noreferrer">
            <img src="../public/images/linkedin-logo.png" alt="LinkedIn" width="100" height="100" />
          </a>
          <a href="https://github.com/tu-perfil-github" target="_blank" rel="noopener noreferrer">
            <img src="../public/images/github-logo.png" alt="GitHub" width="100" height="100" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;