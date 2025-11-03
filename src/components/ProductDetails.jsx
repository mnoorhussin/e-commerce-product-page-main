import React, { useState } from 'react';
import minusIcon from '../assets/images/icon-minus.svg';
import plusIcon from '../assets/images/icon-plus.svg';
import cartIcon from '../assets/images/icon-cart.svg';

const ProductDetails = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (amount) => {
    setQuantity(prev => Math.max(0, prev + amount));
  };

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setQuantity(0);
  };

  return (
    <div className="p-6">
      <p className="text-[hsl(220,14%,75%)] font-bold uppercase tracking-widest text-sm mb-4">{product.company}</p>
      <h1 className="text-3xl lg:text-5xl font-bold text-[hsl(220,13%,13%)] mb-6 lg:mb-10">{product.name}</h1>
      <p className="text-[hsl(219,9%,45%)] mb-6 leading-relaxed">{product.description}</p>
      <div className="flex items-center justify-between lg:flex-col lg:items-start mb-6">
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold text-[hsl(220,13%,13%)]">${product.price.toFixed(2)}</span>
          <span className="bg-[hsl(220,13%,13%)] text-[hsla(0,0%,100%,1.00)] font-bold px-2 py-1 rounded-md">{product.discount}%</span>
        </div>
        <p className="text-[hsl(220,14%,75%)] font-bold line-through">${product.originalPrice.toFixed(2)}</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 flex items-center justify-between bg-[hsl(223,64%,98%)] rounded-lg p-2">
          <button onClick={() => handleQuantityChange(-1)} className="p-3 text-[hsl(26,100%,55%)] hover:opacity-70 custom-focus-ring rounded-md" aria-label="Decrease quantity">
            <img src={minusIcon} alt="Decrease quantity" />
          </button>
          <span className="font-bold text-[hsl(220,13%,13%)] w-8 text-center" aria-live="polite">{quantity}</span>
          <button onClick={() => handleQuantityChange(1)} className="p-3 text-[hsl(26,100%,55%)] hover:opacity-70 custom-focus-ring rounded-md" aria-label="Increase quantity">
            <img src={plusIcon} alt="Increase quantity" />
          </button>
        </div>
        <button
          onClick={handleAddToCart}
          disabled={quantity === 0}
          className="flex-1 lg:flex-grow-[2] flex items-center justify-center gap-4 bg-[hsl(26,100%,55%)] text-[hsl(0,0%,0%)] font-bold py-4 rounded-lg hover:opacity-75 transition-opacity shadow-lg shadow-[hsl(26,100%,55%)]/30 disabled:opacity-50 disabled:cursor-not-allowed custom-focus-ring"
        >
          <img src={cartIcon} alt="Add to cart" />
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;