import React from 'react';
import deleteIcon from '../assets/images/icon-delete.svg';

const Cart = ({ cart, onRemoveFromCart }) => {
  return (
    <div className="absolute top-full -right-1/2 mt-4 w-[360px] bg-white rounded-lg shadow-2xl z-20">
      <div className="p-6 border-b border-gray-200">
        <h3 className="font-bold text-[hsl(220,13%,13%)]">Cart</h3>
      </div>
      <div className="p-6 min-h-[150px] flex items-center justify-center">
        {cart.length === 0 ? (
          <p className="font-bold text-center text-[hsl(219,9%,45%)]">Your cart is empty.</p>
        ) : (
          <div className="w-full space-y-6">
            {cart.map(item => (
              <div key={item.id} className="flex items-center justify-between gap-4">
                <img src={item.thumbnail} alt={item.name} className="w-12 h-12 rounded" />
                <div className="flex-1">
                  <p className="text-[hsl(219,9%,45%)] leading-tight">{item.name}</p>
                  <p>
                    <span>${item.price.toFixed(2)} x {item.quantity}</span>{' '}
                    <span className="font-bold text-[hsl(220,13%,13%)]">${(item.price * item.quantity).toFixed(2)}</span>
                  </p>
                </div>
                <button onClick={() => onRemoveFromCart(item.id)} className="custom-focus-ring rounded-sm" aria-label={`Remove ${item.name} from cart`}>
                  <img src={deleteIcon} alt="" />
                </button>
              </div>
            ))}
            <button className="w-full bg-[hsl(26,100%,55%)] text-white font-bold py-4 rounded-lg hover:opacity-75 transition-opacity custom-focus-ring">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;