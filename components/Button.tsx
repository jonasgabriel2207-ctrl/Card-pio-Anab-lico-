
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'neon' | 'red' | 'outline' | 'green';
  href?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = "", 
  variant = 'neon',
  href,
  fullWidth = true
}) => {
  const baseStyles = `inline-flex items-center justify-center font-black uppercase transition-all duration-300 transform hover:scale-105 active:scale-95 text-center px-6 py-5 rounded-xl shadow-lg leading-tight tracking-tight`;
  
  const variants = {
    neon: 'bg-[#B9FE18] text-black hover:bg-opacity-90 shadow-glow-green',
    red: 'bg-red-600 text-white hover:bg-red-700',
    outline: 'border-2 border-[#B9FE18] text-[#B9FE18] bg-transparent',
    green: 'bg-[#009300] text-white hover:bg-opacity-90',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  if (href) {
    return (
      <a 
        href={href} 
        className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
