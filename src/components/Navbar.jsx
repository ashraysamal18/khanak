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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
      if (window.innerWidth >= 992) {
        setIsNavExpanded(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

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

  const closeMenu = () => {
    setIsNavExpanded(false);
    const openDropdowns = document.querySelectorAll('.dropdown-menu.show');
    openDropdowns.forEach((dropdown) => dropdown.classList.remove('show'));
  };

  const handleItemClick = (e, item) => {
    e.preventDefault();
    setSelectedItem(item);
    setActivePage('detail');
    closeMenu();
  };

  const handleBrandClick = () => {
    setActivePage('home');
    setSelectedItem(null);
    closeMenu();
  };

  const handleAboutClick = () => {
    setActivePage('about');
    setSelectedItem(null);
    closeMenu();
  };

  const navbarStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    backgroundColor: '#000000',
    transform: visible ? 'translateY(0)' : 'translateY(-100%)',
    transition: 'transform 0.3s ease-in-out',
  };

  const mobileCollapseStyle = isMobile
    ? {
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        backgroundColor: '#000000',
        padding: isNavExpanded ? '1.5rem 1rem' : '0',
        zIndex: 999,
      }
    : {};

  return (
    <>
      {/* Inline style block to strictly override Bootstrap's default active/hover states */}
      <style>{`
        .custom-nav-link, 
        .custom-nav-link:focus, 
        .custom-nav-link:hover, 
        .custom-nav-link.show, 
        .custom-nav-link:active {
          color: #ffffff !important;
          background-color: transparent !important;
        }

        .custom-dropdown-item {
          color: #d1d1d1 !important;
          font-size: 0.78rem !important;
          letter-spacing: 1px !important;
          text-transform: uppercase !important;
          padding: 6px 16px !important;
          transition: color 0.2s ease, background-color 0.2s ease;
        }

        .custom-dropdown-item:hover, 
        .custom-dropdown-item:focus {
          color: #ffffff !important;
          background-color: #222222 !important;
        }

        .custom-dropdown-menu {
          background-color: #111111 !important;
          border: 1px solid #333333 !important;
          max-height: 70vh;
          overflow-y: auto;
          box-shadow: 0px 8px 20px rgba(0,0,0,0.5);
        }
      `}</style>

      <nav className="navbar navbar-expand-lg navbar-dark bg-black w-100 px-3 px-md-4 py-2" style={navbarStyle}>
        <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
          
          {/* Brand Name */}
          <span 
            className="navbar-brand fst-italic fs-2 fw-normal text-white m-0" 
            style={{ cursor: 'pointer', fontFamily: 'serif' }} 
            onClick={handleBrandClick}
          >
            Khanak
          </span>

          {/* Mobile Hamburger Button */}
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

          {/* Nav Links Container */}
          <div 
            className={`collapse navbar-collapse ${isNavExpanded ? 'show' : ''}`} 
            id="navbarNav"
            style={mobileCollapseStyle}
          >
            <ul className="navbar-nav ms-auto text-uppercase align-items-lg-center">
              {navCategories.map((category) => (
                <li className="nav-item dropdown my-1 my-lg-0 mx-lg-3" key={category.id}>
                  <a
                    className="nav-link dropdown-toggle custom-nav-link fw-bold"
                    href="#"
                    id={category.id}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ letterSpacing: '2px', fontSize: '0.85rem' }}
                  >
                    {category.title}
                  </a>
                  <ul className="dropdown-menu custom-dropdown-menu border-0 rounded-0" aria-labelledby={category.id}>
                    {category.items.map((item, idx) => (
                      <li key={idx}>
                        <a 
                          className="dropdown-item custom-dropdown-item" 
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

              <li className="nav-item my-1 my-lg-0 ms-lg-3">
                <span
                  className={`nav-link custom-nav-link fw-bold ${activePage === 'about' ? 'active' : ''}`}
                  style={{ cursor: 'pointer', letterSpacing: '2px', fontSize: '0.85rem' }}
                  onClick={handleAboutClick}
                >
                  About
                </span>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </>
  );
}
