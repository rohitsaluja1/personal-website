
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button = ({
  variant = 'primary',
  size = 'default',
  children,
  className,
  ...props
}: ButtonProps) => {
  const baseClasses = 'btn';
  
  const variantClasses = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/80',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline: 'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
  };
  
  const sizeClasses = {
    default: 'h-10 px-5 py-2',
    sm: 'h-8 px-3 text-sm',
    lg: 'h-12 px-6 text-lg',
  };
  
  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
