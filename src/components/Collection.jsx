import React from 'react';

const collectionsData = [
  {
    id: 1,
    title: 'Bling Empire',
    image:
      '/images/Fashion/blingempire/b6.jpg',
  },
  {
    id: 2,
    title: 'Sampada',
    image:
      '/images/Fashion/sampada/s0.jpeg',
  },
  {
    id: 3,
    title: 'Nakateki',
    image:
      '/images/Fashion/nakateki/n1.jpg',
  },
  {
    id: 4,
    title: "L'avenir Skins",
    image:
      '/images/Fashion/lavenir/l7.jpg',
  },
  {
    id: 5,
    title: 'Cord',
    image:
      '/images/Fashion/Cord/c1.jpg',
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
                    {/* <span className="view-tag">VIEW LOOK</span> */}
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