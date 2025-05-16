import React from 'react';
import styles from './Menu.module.css';

export interface MenuItem {
  key: string;
  content: React.ReactNode;
}

interface MenuProps {
  id: string;
  items: MenuItem[];
  className?: string;
  'aria-label'?: string;
}

/**
 * Menu component for dropdowns or popovers.
 * Always uses the Popover API with popover="auto".
 * Renders a list of items, where each item's content is a ReactNode (e.g., RadioLabel or Button).
 */
const Menu: React.FC<MenuProps> = ({
  id,
  items,
  className = '',
  'aria-label': ariaLabel = 'Menu options',
}) => (
  // @ts-expect-error: popover is a non-standard attribute
  <div id={id} popover="auto" className={`${styles.wrapper} ${className}`}>
    <ul
      id={id}
      className={styles.menuPopover}
      role="menu"
      aria-label={ariaLabel}
    >
      {items.map((item) => (
        <li key={item.key}>{item.content}</li>
      ))}
    </ul>
  </div>
);

export default Menu;