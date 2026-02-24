import React from 'react';
import './globals.css';

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Workmanship Web Application</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; {new Date().getFullYear()} Workmanship. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;