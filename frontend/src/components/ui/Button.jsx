import React from 'react';

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  asChild = false,
  ...props
}) {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const variantClasses = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
  };

  const sizeClasses = {
    sm: 'h-9 px-3 text-xs',
    md: 'h-10 py-2 px-4 text-sm',
    lg: 'h-11 px-8 text-base',
  };

  const classes = [
    baseClasses,
    variantClasses[variant] || variantClasses.primary,
    sizeClasses[size] || sizeClasses.md,
    className
  ].filter(Boolean).join(' ');

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: [classes, children.props.className].filter(Boolean).join(' '),
    });
  }

  return (
    <button
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}
