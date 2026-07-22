import React, { useState, useEffect } from 'react';

const navCategories = [
  {
    title: 'Fashion',
    id: 'fashionDropdown',
    items: [
      'Aakshi Design', 'Aarke', 'Anjul Bhandari', 'Bling Empire', 'Cord',
      'divneet Kaur', 'Etesha by Asha Jain', 'Ginna By Ringha', 'Istya',
      "L'avenir Skins", 'Megha Batra', 'Mehul Gupta Label', 'Nakateki',
      'Ogaan', 'QUA', 'Renu Oberoi Jewwllery', 'Ribbons Jewellery',
      'Sania Batra', 'Sheena Trehan', 'The Designer hype', 'Tulsi Studio',
      'Twinkle Hanswal', 'Underneat',
    ],
  },
  {
    title: 'Editorial',
    id: 'editorialDropdown',
    items: ['Manifest', 'Ratalove x LFW'],
  },
  {
    title: 'Commercial',
    id: 'commercialDropdown',
    items: [
      'Alive Wellness Clinic', 'Beyond', 'Bigmuscles Nutrition', 'Fables',
      'FabIndia', 'FabIndia HLS', 'Samsung', 'Torrent', 'Trends',
    ],
  },
  {
    title: 'Celebrity',
    id: 'celebrityDropdown',
    items: [
      'Coca-Cola 2', 'Dogs & Snakes', 'Pan India', 'Ridhima Kapoor',
      'Rishab Rikhiram Sharma', 'So Perfect',
    ],
  },
];

export default function Navbar({ activePage, setActivePage, setSelectedItem }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  // Handle scroll behavior (Hide on scroll down, Show on scroll up)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Keep visible if mobile menu is actively open
      if (isNavExpanded) {
        setVisible(true);
        return;
      }

      if (currentScrollPos < 10) {
        setVisible(true);
      } else {
        setVisible(prevScrollPos > currentScrollPos);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, isNavExpanded]);

  // Force close the mobile menu & any expanded dropdowns
  const closeMenu = () => {
    setIsNavExpanded(false);
    
    // Close Bootstrap dropdown menus programmatically if present
    const openDropdowns = document.querySelectorAll('.dropdown-menu.show');
    openDropdowns.forEach((dropdown) => dropdown.classList.remove('show'));
  };

  const handleItemClick = (e, item) => {
    e.preventDefault();
    setSelectedItem(item);
    setActivePage('detail');
    closeMenu(); // Collapse back to hamburger lines
  };

  const handleBrandClick = () => {
    setActivePage('home');
    setSelectedItem(null);
    closeMenu(); // Collapse back to hamburger lines
  };

  const handleAboutClick = () => {
    setActivePage('about');
    setSelectedItem(null);
    closeMenu(); // Collapse back to hamburger lines
  };

  const navbarStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    transform: visible ? 'translateY(0)' : 'translateY(-100%)',
    transition: 'transform 0.3s ease-in-out',
  };

  return (
    <nav className="navbar navbar-expand-lg bg-black navbar-dark sticky-top" style={navbarStyle}>
      <div className="container position-relative">
        <span 
          className="navbar-brand fst-italic fs-2 fw-normal text-white" 
          style={{ cursor: 'pointer', fontFamily: 'serif' }} 
          onClick={handleBrandClick}
        >
          Khanak
        </span>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
          aria-controls="navbarNav"
          aria-expanded={isNavExpanded}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Mobile Overlay Menu Container */}
        <div 
          className={`collapse navbar-collapse ${isNavExpanded ? 'show' : ''}`} 
          id="navbarNav"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: '#000000',
            padding: isNavExpanded ? '1.5rem 1rem' : '0',
            zIndex: 999,
          }}
        >
          <ul className="navbar-nav ms-auto text-uppercase">
            {navCategories.map((category) => (
              <li className="nav-item dropdown my-1" key={category.id}>
                <a
                  className="nav-link dropdown-toggle text-white fw-bold tracking-wider"
                  href="#"
                  id={category.id}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {category.title}
                </a>
                <ul className="dropdown-menu dropdown-menu-dark border-0 bg-dark" aria-labelledby={category.id}>
                  {category.items.map((item, idx) => (
                    <li key={idx}>
                      <a 
                        className="dropdown-item text-white-50" 
                        href="#" 
                        onClick={(e) => handleItemClick(e, item)}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}

            <li className="nav-item my-1">
              <span
                className={`nav-link text-white fw-bold ${activePage === 'about' ? 'active' : ''}`}
                style={{ cursor: 'pointer' }}
                onClick={handleAboutClick}
              >
                About
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
