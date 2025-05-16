import React from 'react';

const ThemeSwitcherIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    width="1.5em"
    height="1.5em"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    focusable="false"
    style={{ verticalAlign: 'middle' }}
  >
    {/* Sun half */}
    <circle cx="12" cy="12" r="6" fill="currentColor" opacity="0.6"/>
    {/* Moon half */}
    <path
      d="M12 6a6 6 0 0 0 0 12A6 6 0 0 1 12 6z"
      fill="currentColor"
      opacity="1"
    />
    {/* Sun rays */}
    <g stroke="currentColor" strokeWidth="1.5" opacity="0.7">
      <line x1="12" y1="2" x2="12" y2="4"/>
      <line x1="12" y1="20" x2="12" y2="22"/>
      <line x1="4.93" y1="4.93" x2="6.34" y2="6.34"/>
      <line x1="17.66" y1="17.66" x2="19.07" y2="19.07"/>
      <line x1="2" y1="12" x2="4" y2="12"/>
      <line x1="20" y1="12" x2="22" y2="12"/>
      <line x1="4.93" y1="19.07" x2="6.34" y2="17.66"/>
      <line x1="17.66" y1="6.34" x2="19.07" y2="4.93"/>
    </g>
  </svg>
);

export default ThemeSwitcherIcon;