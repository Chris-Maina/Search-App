import React, { useState, useEffect } from 'react';
import styles from './Nav.module.css';
import Button from '../Button/Button';
import RadioLabel from '../RadioLabel/RadioLabel';
import Menu, { MenuItem } from '../Menu/Menu';
import ThemeSwitcherIcon from '../Icons/ThemeSwitcherIcon';

type Theme = 'system' | 'light' | 'dark';

const getInitialTheme = (): Theme => {
  if (typeof window !== 'undefined') {
    const storedTheme = (localStorage.getItem('theme') as Theme);
    return storedTheme || 'system';
  }
  return 'system';
};

const Nav: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme());

  // Persist theme to localStorage
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const themeMenuItems: MenuItem[] = [
    {
      key: 'system',
      content: (
        <RadioLabel
          value="system"
          name="theme"
          id="system-theme"
          checked={theme === 'system'}
          onChange={() => setTheme('system')}
        >
          System
        </RadioLabel>
      ),
    },
    {
      key: 'light',
      content: (
        <RadioLabel
          value="light"
          name="theme"
          id="light-theme"
          checked={theme === 'light'}
          onChange={() => setTheme('light')}
        >
          Light
        </RadioLabel>
      ),
    },
    {
      key: 'dark',
      content: (
        <RadioLabel
          value="dark"
          name="theme"
          id="dark-theme"
          checked={theme === 'dark'}
          onChange={() => setTheme('dark')}
        >
          Dark
        </RadioLabel>
      ),
    },
  ];

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <h2 className={styles.title}>AI Streaming Demo</h2>
      <div className={styles.themeMenuWrapper}>
        <Button
          label="Theme"
          className={styles.themeBtn}
          aria-haspopup="menu"
          aria-controls="theme-menu"
          popoverTarget="theme-menu"
          popoverTargetAction="toggle"
        >
          <ThemeSwitcherIcon />
        </Button>
        <Menu
          id="theme-menu"
          items={themeMenuItems}
          aria-label="Theme options"
        />
      </div>
    </nav>
  );
};

export default Nav;