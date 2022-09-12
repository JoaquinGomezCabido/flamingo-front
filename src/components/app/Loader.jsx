import React from 'react';

const Loader = ({
  size = '5',
  className = '',
}) => (
  <svg viewBox="0 0 50 50" className={`spinner h-${size} ${className}`}>
    <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="7" />
  </svg>
);

export default Loader;
