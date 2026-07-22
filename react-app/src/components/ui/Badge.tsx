import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'success' | 'warning' | 'error' | 'info' | 'neutral';
  size?: 'sm' | 'md';
  showDot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'md',
  showDot = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center font-semibold rounded-full tracking-wide';

  const variants = {
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200/60',
    warning: 'bg-amber-50 text-amber-700 border border-amber-200/60',
    error: 'bg-red-50 text-red-700 border border-red-200/60',
    info: 'bg-teal-50 text-teal-700 border border-teal-200/60',
    neutral: 'bg-gray-50 text-gray-700 border border-gray-200/60',
  };

  const dotColors = {
    success: 'bg-emerald-500',
    warning: 'bg-amber-500',
    error: 'bg-red-500',
    info: 'bg-teal-500',
    neutral: 'bg-gray-400',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-[10px]',
    md: 'px-2.5 py-1 text-xs',
  };

  return (
    <span
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {showDot && (
        <span
          className={`mr-1.5 h-1.5 w-1.5 rounded-full ${dotColors[variant]} animate-pulse`}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
};
