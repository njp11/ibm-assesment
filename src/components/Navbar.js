import React from 'react';

const Navbar = () => {
  return (
    <div className="header">
      <h1 className="logo">Logo</h1>
      <ul>
        <li>About</li>
        <li>Home</li>
        <li>
          <i class="fas fa-user-circle fa-2x"></i>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
