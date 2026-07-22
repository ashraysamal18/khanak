import React, { useState, useEffect } from 'react';

const navCategories = [
  {
    title: 'Fashion',
    id: 'fashionDropdown',
    items: [
      'Aakshi Design',
      'Aarke',
      'Anjul Bhandari',
      'Bling Empire',
      'Cord',
      'divneet Kaur',
      'Etesha by Asha Jain',
      'Ginna By Ringha',
      'Istya',
      "L'avenir Skins",
      'Megha Batra',
      'Mehul Gupta Label',
      'Nakateki',
      'Ogaan',
      'QUA',
      'Renu Oberoi Jewwllery',
      'Ribbons Jewellery',
      'Sania Batra',
      'Sheena Trehan',
      'The Designer hype',
      'Tulsi Studio',
      'Twinkle Hanswal',
      'Underneat',
    ],
  },
  {
    title: 'Editorial',
    id: 'editorialDropdown',
    items: [
      'Manifest',
      'Ratalove x LFW',
    ],
  },
  {
    title: 'Commercial',
    id: 'commercialDropdown',
    items: [
      'Alive Wellness Clinic',
      'Beyond',
      'Bigmuscles Nutrition',
      'Fables',
      'FabIndia',
      'FabIndia HLS',
      'Samsung',
      'Torrent',
      'Trends',
    ],
  },
  {
    title: 'Celebrity',
    id: 'celebrityDropdown',
    items: [
      'Coca-Cola 2',
      'Dogs & Snakes',
      'Pan India',
      'Ridhima Kapoor',
      'Rishab Rikhiram Sharma',
      'So Perfect',
    ],
  },
];

export default function Navbar({ activePage, setActivePage, setSelectedItem }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Always show at the top of the page, hide on scroll down, show on scroll up
      if (currentScrollPos < 10) {
        setVisible(true);
      } else {
        setVisible(prevScrollPos > currentScrollPos);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const handleItemClick = (e, item) => {
    e.preventDefault();
    setSelectedItem(item);
    setActivePage('detail');
  };

  const navbarStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    transform: visible ? 'translateY(0)' : 'translateY(-100%)',
    transition: 'transform 0.3s ease-in-out',
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar" style={navbarStyle}>
      <div className="container">
        <span 
          className="navbar-brand" 
          style={{ cursor: 'pointer' }} 
          onClick={() => { setActivePage('home'); setSelectedItem(null); }}
        >
          Khanak
        </span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navCategories.map((category) => (
              <li className="nav-item dropdown" key={category.id}>
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id={category.id}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {category.title}
                </a>
                <ul className="dropdown-menu" aria-labelledby={category.id}>
                  {category.items.map((item, idx) => (
                    <li key={idx}>
                      <a 
                        className="dropdown-item" 
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

            <li className="nav-item">
              <span
                className={`nav-link ${activePage === 'about' ? 'active' : ''}`}
                style={{ cursor: 'pointer' }}
                onClick={() => { setActivePage('about'); setSelectedItem(null); }}
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