import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  className?: string;
  popoverTarget?: string;
  popoverTargetAction?: 'hide' | 'show' | 'toggle';
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  label,
  className = '',
  popoverTarget,
  popoverTargetAction,
  children,
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      // @ts-expect-error: popoverTarget and popoverTargetAction are non-standard attributes. Translates to popoverTarget and popoverTargetAction in HTML.
      popovertarget={popoverTarget}
      popovertargetaction={popoverTargetAction}
      {...props}
    >
      {children ? children : label}
    </button>
  );
};

export default Button;