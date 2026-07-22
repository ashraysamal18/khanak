import React from 'react';

export default function Footer({ onNavigateHome, onNavigateAbout }) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-row">

          <a href="mailto:hello@khanak.com" className="footer-contact">
            kanishkakasana22@gmail.com
          </a>

          <a
            href="https://www.instagram.com/khanak_22/"
            className="footer-instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            khanak.studio
          </a>
        </div>

        <p className="footer-copyright">
          &copy; {year} Khanak. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
