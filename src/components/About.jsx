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
           Khanak Kasana is a Delhi-based fashion stylist and designer.
            After completing her Bachelor's in English Honours from Delhi University, 
            she honed her creative vision through professional certifications in 
            Fashion Designing & Merchandise from Khazani Women's Institute (2023) 
            and Designing & Styling for Indian Fashion at the National Institute of 
            Fashion Technology (NIFT), New Delhi (2024).
          </p>

          <p>
            Over the years, she has built a dynamic portfolio spanning commercial campaigns, 
            editorial shoots, music videos, and TVCs. Her experience ranges from interning 
            under prominent stylist Ayesha Amin Nigam to assisting renowned stylists across 
            major projects—including styling celebrities like Varun Dhawan and Guru Randhawa, 
            and key campaigns for brands like Coca-Cola, Samsung, and Hero Honda.
          </p>

          <p>
            Khanak views styling as an intricate art of visual narration, blending deep trend 
            awareness, precise color theory, and meticulous attention to detail. Her approach 
            focuses on crafting authentic, compelling looks that connect brand storytelling with 
            contemporary aesthetics.
          </p>

          <p>
            Her creative versatility and seamless execution have earned her key roles on projects 
            for an expansive list of notable brands and designers—including FabIndia, Manifest Editorial, 
            Anjul Bhandari, Trends, QUA, Tulsi Studio, and L'avenir Skins, amongst many others.
          </p>

          <div className="about-contact">
            <p className="enquire">for enquiries — kanishkakasana2003@gmail.com</p>

            <a href="https://www.instagram.com/khanak_22/" className="instagram-link">
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
              khanak_22
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}