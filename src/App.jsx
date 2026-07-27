import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Collection from './components/Collection';
import About from './components/About';
import DetailPage from './components/DetailPage';
import Footer from './components/Footer';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedItem, setSelectedItem] = useState(null);

  const handleNavigateHome = () => {
    setActivePage('home');
    setSelectedItem(null);
  };

  const handleNavigateAbout = () => {
    setActivePage('about');
    setSelectedItem(null);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        setSelectedItem={setSelectedItem}
      />

      <main className="flex-grow-1">
        {activePage === 'home' && (
          <Collection 
            onSelectCollection={(title) => {
              setSelectedItem(title);
              setActivePage('detail');
            }} 
          />
        )}

        {activePage === 'about' && <About />}

        {activePage === 'detail' && (
          <DetailPage 
            title={selectedItem} 
            onBack={handleNavigateHome} 
          />
        )}
      </main>

      <Footer 
        onNavigateHome={handleNavigateHome} 
        onNavigateAbout={handleNavigateAbout} 
      />
    </div>
  );
}