import React from 'react';

const collectionsData = [
  {
    id: 1,
    title: 'Manifest',
    image:
      'https://plus.unsplash.com/premium_photo-1673758905770-a62f4309c43c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 2,
    title: 'Sampada',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 3,
    title: 'Trends',
    image:
      'https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vZGVsfGVufDB8fDB8fHww',
  },
  {
    id: 4,
    title: "L'avenir Skins",
    image:
      'https://plus.unsplash.com/premium_photo-1673758905770-a62f4309c43c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 5,
    title: 'Sampada',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 6,
    title: 'Trends',
    image:
      'https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vZGVsfGVufDB8fDB8fHww',
  },
];

export default function Collection({ onSelectCollection }) {
  const handleClick = (e, title) => {
    e.preventDefault();
    if (onSelectCollection) onSelectCollection(title);
  };

  return (
    <section className="collection-section">
      <div className="container">
        {/* col-6 keeps 2 columns on mobile, col-lg-4 gives 3 columns on desktop */}
        <div className="row g-2 g-md-4 g-lg-5">
          {collectionsData.map((item) => (
            <div className="col-6 col-lg-4" key={item.id}>
              <div className="collection-card">
                <a
                  href="#"
                  className="collection-card-link"
                  onClick={(e) => handleClick(e, item.title)}
                >
                  <div className="collection-card-frame">
                    <img src={item.image} alt={item.title} />
                    <span className="view-tag">VIEW LOOK</span>
                  </div>
                </a>
                <div className="collection-card-caption">
                  <h5>{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
