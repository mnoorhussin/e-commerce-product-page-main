import React, { useState, useEffect, useRef } from 'react';
import Cart from './Cart.jsx';
import logo from '../assets/images/logo.svg';
import closeIcon from '../assets/images/icon-close.svg';
import menuIcon from '../assets/images/icon-menu.svg';
import cartIcon from '../assets/images/icon-cart.svg';
import avatarIcon from '../assets/images/image-avatar.png';


const Header = ({ cart, onRemoveFromCart }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartRef = useRef(null);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [cartRef]);

  const navLinks = ['Collections', 'Men', 'Women', 'About', 'Contact'];

  return (
    <header className="relative max-w-6xl mx-auto p-6 lg:py-0 lg:px-0">
      <div className="flex items-center justify-between border-b border-gray-200 lg:border-none pb-6 lg:pb-8">
        <div className="flex items-center gap-4 lg:gap-12">
          <button onClick={() => setIsMenuOpen(true)} className="lg:hidden" aria-label="Open menu">
            <img src={menuIcon} alt="Menu icon" />
          </button>
          <a href="#" aria-label="sneakers homepage">
            <img src={logo} alt="sneakers logo" className="h-5" />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link} href="#" className="py-8 text-[hsl(219,9%,45%)] hover:text-[hsl(220,13%,13%)] border-b-4 border-transparent hover:border-[hsl(26,100%,55%)] transition-colors duration-200">
                {link}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-6 lg:gap-12" ref={cartRef}>
          <div className="relative">
            <button onClick={() => setIsCartOpen(!isCartOpen)} className="relative custom-focus-ring rounded-full" aria-label="View cart">
              <img src={cartIcon} alt="Cart icon" className="fill-current text-[hsl(219,9%,45%)] hover:text-[hsl(220,13%,13%)]" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[hsl(26,100%,55%)] text-white text-[10px] font-bold px-2 rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
            {isCartOpen && <Cart cart={cart} onRemoveFromCart={onRemoveFromCart} />}
          </div>
          <button className="w-8 h-8 lg:w-12 lg:h-12 rounded-full hover:ring-2 hover:ring-[hsl(26,100%,55%)] transition-shadow duration-200 custom-focus-ring" aria-label="User profile">
            <img src={avatarIcon} alt="User avatar" />
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/75 z-40">
            <div className="bg-white h-full w-2/3 max-w-sm p-6">
                <button onClick={() => setIsMenuOpen(false)} className="mb-12" aria-label="Close menu">
                    <img src={closeIcon} alt="Close menu" />
                </button>
                <nav className="flex flex-col gap-5 font-bold text-[hsl(220,13%,13%)]">
                     {navLinks.map(link => (
                        <a key={link} href="#" className="text-lg">
                            {link}
                        </a>
                     ))}
                </nav>
            </div>
        </div>
      )}
    </header>
  );
};

export default Header;