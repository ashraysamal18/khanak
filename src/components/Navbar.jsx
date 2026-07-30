import React, { useState, useEffect, useRef } from 'react';

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
      'Divneet Kaur',
      'Etesha by Asha Jain',
      'Ginna By Ringha',
      'Istya',
      "L'avenir Skins",
      'Megha Batra',
      'Mehul Gupta Label',
      'Nakateki',
      'Ogaan',
      'QUA',
      'Renu Oberoi Jewellery',
      'Ribbons Jewellery',
      'Sampada',
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

  const [isNavExpanded, setIsNavExpanded] = useState(false);
  // React now fully owns dropdown open/close state instead of delegating to
  // Bootstrap's data-bs-toggle JS. On phones, Bootstrap's internal dropdown
  // state and this component's collapse state would get out of sync (e.g.
  // closing the mobile menu didn't reset Bootstrap's "show" state on the
  // dropdown), so a category often needed two taps to open, or wouldn't open
  // at all. Tracking the open dropdown id here removes that race entirely
  // and makes a single tap reliable on touch devices.
  const [openDropdownId, setOpenDropdownId] = useState(null);

  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

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

  // Close an open dropdown when tapping/clicking anywhere outside the navbar.
  // This is what makes single-tap-to-open / tap-elsewhere-to-close work
  // reliably on touch screens (Bootstrap's own outside-click handling was
  // fighting with the manually-controlled collapse state before).
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdownId(null);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, []);

  const closeMenu = () => {
    setIsNavExpanded(false);
    setOpenDropdownId(null);
  };

  const toggleDropdown = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenDropdownId((prev) => (prev === id ? null : id));
  };

  const handleItemClick = (e, item) => {
    e.preventDefault();
    setSelectedItem(item);
    setActivePage('detail');
    closeMenu(); // Collapses menu and dropdown on click
  };

  const navbarStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    transform: visible ? 'translateY(0)' : 'translateY(-100%)',
    transition: 'transform 0.3s ease-in-out',
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar" style={navbarStyle} ref={navRef}>
      <div className="container">
        <span
          className="navbar-brand"
          style={{ cursor: 'pointer' }}
          onClick={() => {
            setActivePage('home');
            setSelectedItem(null);
            closeMenu();
          }}
        >
          Khanak
        </span>

        {/* Manual toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isNavExpanded}
          aria-label="Toggle navigation"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
            setOpenDropdownId(null);
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Conditionally append 'show' class when expanded */}
        <div
          className={`collapse navbar-collapse ${isNavExpanded ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            {navCategories.map((category) => (
              <li
                className={`nav-item dropdown ${openDropdownId === category.id ? 'show' : ''}`}
                key={category.id}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id={category.id}
                  role="button"
                  aria-expanded={openDropdownId === category.id}
                  onClick={(e) => toggleDropdown(e, category.id)}
                >
                  {category.title}
                </a>
                <ul
                  className={`dropdown-menu ${openDropdownId === category.id ? 'show' : ''}`}
                  aria-labelledby={category.id}
                >
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
                onClick={() => {
                  setActivePage('about');
                  setSelectedItem(null);
                  closeMenu();
                }}
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
