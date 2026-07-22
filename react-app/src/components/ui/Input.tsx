import React, { forwardRef } from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  required?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      required,
      id,
      className = '',
      type = 'text',
      ...props
    },
    ref
  ) => {
    return (
      <div className="w-full text-left">
        {label && (
          <label
            htmlFor={id}
            className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wider"
          >
            {label}
            {required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
          </label>
        )}
        <div className="relative rounded-lg shadow-sm">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            id={id}
            type={type}
            className={`
              block w-full rounded-lg text-sm transition-all duration-200 bg-white border
              ${leftIcon ? 'pl-10' : 'pl-4'}
              ${rightIcon ? 'pr-10' : 'pr-4'}
              py-2.5 text-gray-900 placeholder-gray-400
              focus:ring-2 focus:ring-primary-700/20 focus:border-primary-700 outline-none
              ${
                error
                  ? 'border-red-300 text-red-900 focus:ring-red-200 focus:border-red-500'
                  : 'border-gray-200 hover:border-gray-300'
              }
              disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:cursor-not-allowed
              ${className}
            `}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={
              error ? `${id}-error` : helperText ? `${id}-helper` : undefined
            }
            {...props}
          />
          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center">
              {rightIcon}
            </div>
          )}
        </div>
        {error && (
          <p
            className="mt-1.5 text-xs text-red-600 flex items-center font-medium"
            id={`${id}-error`}
            role="alert"
          >
            <span className="mr-1" aria-hidden="true">⚠️</span>
            {error}
          </p>
        )}
        {!error && helperText && (
          <p className="mt-1.5 text-xs text-gray-500" id={`${id}-helper`}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
