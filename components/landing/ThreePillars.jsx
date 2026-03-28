"use client";

import React from "react";

export default function ThreePillars() {
  return (
    <>
      <style>{`
        /* Using your existing CSS variables. 
          Assuming these are defined in your global CSS or the Hero/Navbar, 
          but included here for safety if you test in isolation.
        */
        :root {
          --bg-light: #FAF9F5;
          --text-main: #2B2822;
          --text-muted: #625C53;
          --border-color: #D5CFBF;
          --accent: #D44527;
          --accent-dark: #912611;
          --bone-100: #F4F2EC;
          --bone-200: #E6E1D7;
          --font-sans: 'Instrument Sans', system-ui, sans-serif;
          --font-display: 'Playfair Display', Georgia, serif;
        }

        .features-section {
          background-color: var(--bone-100);
          padding: 80px 0;
        }

        .features-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .features-header {
          text-align: center;
          margin-bottom: 64px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .features-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          color: var(--text-main);
          line-height: 1.1;
          margin-bottom: 16px;
        }

        .features-desc {
          font-family: var(--font-sans);
          font-size: clamp(1.05rem, 1.5vw, 1.15rem);
          color: var(--text-muted);
          line-height: 1.5;
        }

        .features-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        @media (min-width: 768px) {
          .features-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }
        }

        .feature-card {
          background: #FFFFFF;
          border: 2px solid var(--text-main);
          border-radius: 16px;
          padding: 32px 24px;
          /* Your signature 3D solid shadow */
          box-shadow: 6px 6px 0 var(--text-main);
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .feature-card:hover {
          transform: translate(-4px, -4px);
          box-shadow: 10px 10px 0 var(--text-main);
        }

        .feature-icon-wrapper {
          width: 56px;
          height: 56px;
          background: var(--bg-light);
          border: 2px solid var(--text-main);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          color: var(--accent);
          box-shadow: 3px 3px 0 var(--border-color);
        }

        .feature-card-title {
          font-family: var(--font-sans);
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 12px;
          line-height: 1.2;
        }

        .feature-card-desc {
          font-family: var(--font-sans);
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.6;
          flex-grow: 1;
        }

        .feature-pill {
          display: inline-flex;
          align-items: center;
          margin-top: 24px;
          padding: 6px 12px;
          background: #FFEDE8;
          border: 1.5px solid var(--accent);
          color: var(--accent-dark);
          border-radius: 20px;
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
      `}</style>

      <section className="features-section" id="features">
        <div className="features-inner">
          <div className="features-header">
            <h2 className="features-title">Everything you need, nothing you don't.</h2>
            <p className="features-desc">
              Stop duct-taping five different tools together. StackConnect gives you the three core pillars to run a highly profitable digital academy.
            </p>
          </div>

          <div className="features-grid">
            {/* Pillar 1 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
              <h3 className="feature-card-title">Video Course Hosting</h3>
              <p className="feature-card-desc">
                Upload your lessons. We handle the secure AWS hosting, fast streaming, and anti-download protection. Keep 100% of your course revenue.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
              <h3 className="feature-card-title">Custom Storefront</h3>
              <p className="feature-card-desc">
                Get your own beautiful website (yourname.com) with zero code. Integrated Razorpay checkouts, automated access, and total brand control.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="2"></circle>
                  <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>
                </svg>
              </div>
              <h3 className="feature-card-title">Live Auto-Record</h3>
              <p className="feature-card-desc">
                Conduct live classes directly on the platform. When the class ends, it automatically saves to your course library as a permanent, sellable lesson.
              </p>
              <div className="feature-pill">The Killer Feature</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}