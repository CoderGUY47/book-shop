import React from 'react';

interface DiscountBadgeProps {
  discount: number;
}

const DiscountBadge: React.FC<DiscountBadgeProps> = ({ discount }) => {
  return (
    <div className="absolute -top-4 right-1 z-10">
      <div className="relative">
        <div
          className="
            transform rotate-12
            bg-gradient-to-r from-red-500 to-pink-700
            shadow-2xl
            px-6 py-2.5
            text-xs font-bold font-mono text-white
            rounded-md
            transition-transform duration-200 hover:scale-110
            cursor-pointer
          "
          style={{ minWidth: '60px', boxShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
        >
          {discount}% OFF
        </div>
      </div>
    </div>
  );
};

export default DiscountBadge;