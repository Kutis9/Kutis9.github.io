import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'lg' | 'default';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', size = 'default', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
    
    const variants = {
      default: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl',
      outline: 'border border-gray-300 bg-transparent hover:bg-accent hover:text-accent-foreground',
      ghost: 'hover:bg-accent hover:text-accent-foreground'
    };
    
    const sizes = {
      sm: 'h-8 px-3 text-sm',
      default: 'h-10 px-4 py-2',
      lg: 'h-12 px-8 text-lg'
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };