import React from 'react';

export default function About() {
  return (
    <section className="about-section">
      <div className="about-grid">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&auto=format&fit=crop&q=60"
            alt="Khanak at work"
          />
        </div>

        <div className="about-content">
          <p>
            Khanak is a Delhi-based stylist and creative consultant. After her post-graduation in
            Fashion Styling and Image Design from <em>Pearl Academy</em> (2019), she began her
            career as a junior stylist before moving into print and editorial work with leading
            fashion publications.
          </p>

          <p>
            Over the years, she has worked across print, fashion campaigns, and commercial shoots —
            building a body of work that spans editorial storytelling, brand campaigns, and
            personal styling.
          </p>

          <p>
            She believes styling as a craft goes beyond simply dressing a subject. For her, every
            project is a chance to lend a piece of herself, untainted by repetition. Her practice
            centres on researching deep-rooted references and translating them into the fabric of
            the present.
          </p>

          <p>
            Khanak's attention to detail and her instinct for visual storytelling have earned the
            trust of notable brands and fashion houses — <em>Nykaa, Myntra, Ajio, Lifestyle,</em>{' '}
            and <em>Harper's Bazaar India</em> — amongst a few.
          </p>

          <div className="about-contact">
            <p className="enquire">for enquiries — hello@khanak.com</p>

            <a href="#" className="instagram-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
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
        </div>
      </div>
    </section>
  );
}