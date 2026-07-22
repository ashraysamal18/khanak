import React from 'react';
import { portfolioItemsData } from '../data/portfolioItemsData';

export default function DetailPage({
  title,
  onBack,
  // --- ADJUSTABLE PROPS ---
  heroMinHeight = '60vh',        // floor on mobile so hero never gets cramped
  heroMaxHeight = '85vh',        // ceiling on desktop
  cardMaxWidth = 'min(340px, 80vw)',
  rightBgColor = '#FFFFFF',
  galleryColumns = 'col-6 col-md-4 col-lg-3',
  galleryAspectRatio = '4 / 5',  // replaces fixed px height, scales at every width
}) {
  // Safe lookup
  const pageContent =
    portfolioItemsData?.[title] ||
    portfolioItemsData?.default ||
    { category: '', description: '', images: [] };

  const images = pageContent.images || [];

  // --- POSITION SWAP ---
  // Image 1 (images[0]) goes to the right panel card
  // Image 2 (images[1]) goes to the left full-height cover
  const heroLeftImage = images[1] || images[0];
  const heroRightImage = images[0];
  const feedImages = images.slice(2);

  return (
    <div className="w-100 min-vh-100 bg-white">
      {/* Back Button (if provided) */}
      {onBack && (
        <button
          onClick={onBack}
          className="btn btn-link text-dark position-absolute top-0 start-0 m-2 m-md-3 z-3 text-decoration-none"
          style={{ fontSize: '0.85rem', letterSpacing: '1px' }}
        >
          &larr; BACK
        </button>
      )}

      {/* --- HERO SECTION --- */}
      <style>{`
        .hero-row { min-height: auto; }
        @media (min-width: 768px) {
          .hero-row { min-height: clamp(${heroMinHeight}, 90vw, ${heroMaxHeight}); }
        }
      `}</style>
      <div className="container-fluid p-0">
        <div className="row g-0 align-items-stretch flex-column-reverse flex-md-row hero-row">
          {/* Left Column: Cover Image, inset with the same margin as the gallery images */}
          <div className="col-12 col-md-6 p-3 p-sm-4 p-lg-5">
            {heroLeftImage && (
              <div className="w-100 h-100 overflow-hidden">
                <img
                  src={heroLeftImage}
                  alt={title || 'Portfolio Hero Left'}
                  className="w-100 h-100 d-block"
                  loading="eager"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center 30%',
                    aspectRatio: '4 / 3',
                    maxHeight: heroMaxHeight,
                  }}
                />
              </div>
            )}
          </div>

          {/* Right Column: Centered Inset Card + Text */}
          <div
            className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center p-3 p-sm-4 p-lg-5 text-center"
            style={{ backgroundColor: rightBgColor }}
          >
            {/* Adjustable Inset Image Card */}
            {heroRightImage && (
              <div
                className="mb-3 mb-md-4 shadow-sm w-100 overflow-hidden mx-auto"
                style={{ maxWidth: cardMaxWidth }}
              >
                <img
                  src={heroRightImage}
                  alt={title || 'Portfolio Hero Right'}
                  className="w-100 d-block"
                  loading="eager"
                  style={{
                    objectFit: 'cover',
                    aspectRatio: '3 / 4',
                    height: 'auto',
                    maxHeight: '50vh',
                  }}
                />
              </div>
            )}

            {/* Title & Subtitle */}
            <div className="text-center text-dark px-2">
              <h1
                className="fw-normal mb-2"
                style={{
                  fontFamily: 'serif',
                  fontSize: 'clamp(1.4rem, 5vw, 2.4rem)',
                  color: '#2b2b2b',
                  lineHeight: 1.2,
                }}
              >
                {title || pageContent.title || 'Manifest'}
              </h1>
              {pageContent.subtitle && (
                <p
                  className="text-uppercase m-0"
                  style={{
                    letterSpacing: 'clamp(2px, 1vw, 5px)',
                    fontSize: 'clamp(0.65rem, 2vw, 0.75rem)',
                    color: '#555',
                  }}
                >
                  {pageContent.subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* --- GALLERY FEED --- */}
      <div className="container-fluid px-3 px-sm-4 px-lg-5 py-4 py-md-5">
        <div className="row g-2 g-sm-3 g-md-4">
          {feedImages.map((imgUrl, index) => (
            <div key={`${imgUrl}-${index}`} className={galleryColumns}>
              <div className="w-100 overflow-hidden shadow-sm">
                <img
                  src={imgUrl}
                  alt={`${title || 'Portfolio'} - ${index + 3}`}
                  className="w-100 d-block"
                  loading="lazy"
                  style={{
                    aspectRatio: galleryAspectRatio,
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}