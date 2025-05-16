import React from 'react';
import styles from './RadioLabel.module.css';

interface RadioLabelProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  name: string;
  id?: string;
  children: React.ReactNode;
}

const RadioLabel: React.FC<RadioLabelProps> = ({
  value,
  name,
  id,
  children,
  ...inputProps
}) => (
  <label className={styles.radioLabel} htmlFor={id}>
    <input
      type="radio"
      name={name}
      value={value}
      id={id}
      className={styles.radioInput}
      {...inputProps}
    />
    {children}
  </label>
);

export default RadioLabel;