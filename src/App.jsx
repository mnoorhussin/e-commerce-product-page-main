import { useState } from 'react';
import Header from './components/Header.jsx';
import ProductGallery from './components/ProductGallery.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import Lightbox from './components/Lightbox.jsx';
import { PRODUCT_DATA } from './constants.js';

function App() {
  const [cart, setCart] = useState([]);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxStartIndex, setLightboxStartIndex] = useState(0);

  const addToCart = (product, quantity) => {
    if (quantity === 0) return;

    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [
          ...prevCart,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            thumbnail: product.images[0].thumbnail,
          },
        ];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const openLightbox = (index) => {
    setLightboxStartIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header cart={cart} onRemoveFromCart={removeFromCart} />
      <main className="max-w-6xl mx-auto lg:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24 lg:items-center">
          <ProductGallery images={PRODUCT_DATA.images} onImageClick={openLightbox} />
          <ProductDetails product={PRODUCT_DATA} onAddToCart={addToCart} />
        </div>
      </main>
      {isLightboxOpen && (
        <Lightbox
          images={PRODUCT_DATA.images}
          startIndex={lightboxStartIndex}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
}

export default App;