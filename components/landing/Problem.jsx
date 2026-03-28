"use client";

import React from "react";

export default function Problem() {
  return (
    <>
      <style>{`
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

        .problem-section {
          background-color: var(--bone-100);
          padding: 120px 0 140px; /* Extra bottom padding for the dropped cards */
          position: relative;
          overflow: hidden;
        }

        /* Subtle background glow to highlight the center */
        .problem-section::before {
          content: '';
          position: absolute;
          top: 30%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(212, 69, 39, 0.04) 0%, rgba(244, 242, 236, 0) 70%);
          pointer-events: none;
        }

        .problem-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 2;
        }

        .problem-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 64px auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .problem-subtitle {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          font-weight: 800;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 24px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: #FFEDE8;
          border: 1.5px solid var(--accent);
          border-radius: 30px;
          box-shadow: 2px 2px 0 rgba(212, 69, 39, 0.15);
        }

        .problem-title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw, 3.8rem);
          font-weight: 700;
          color: var(--text-main);
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
        }

        .problem-desc {
          font-family: var(--font-sans);
          font-size: clamp(1.1rem, 2vw, 1.25rem);
          color: var(--text-muted);
          line-height: 1.6;
          max-width: 600px;
        }

        /* The Grid layout */
        .problem-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        /* The Base Card */
        .pain-card {
          background: #FFFFFF;
          border: 2px solid var(--text-main);
          border-radius: 20px;
          padding: 40px 32px;
          box-shadow: 6px 6px 0 var(--text-main);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }

        .pain-icon-wrapper {
          width: 64px;
          height: 64px;
          background: var(--bone-100);
          border: 2px solid var(--border-color);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          color: var(--text-main);
          transition: all 0.3s ease;
        }

        .pain-title {
          font-family: var(--font-sans);
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 16px;
        }

        .pain-desc {
          font-family: var(--font-sans);
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* Hover Interaction (Mobile & Desktop) */
        .pain-card:hover {
          border-color: var(--accent);
          box-shadow: 12px 12px 0 var(--accent-dark);
          z-index: 10;
        }

        .pain-card:hover .pain-icon-wrapper {
          background: var(--accent);
          border-color: var(--accent-dark);
          color: #FFF;
          transform: scale(1.1) rotate(-5deg);
        }

        /* ========================================================
           DESKTOP ONLY: The "Chord / Semi-Circle Arch" Layout 
           ======================================================== */
        @media (min-width: 900px) {
          .problem-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
            /* Extra padding to allow cards to move freely without clipping */
            padding-top: 20px;
            padding-bottom: 40px; 
          }

          /* Left Card - Drops down and rotates left */
          .pain-card:nth-child(1) {
            transform: translateY(60px) rotate(-4deg);
          }

          /* Center Card - Sits high, slightly larger */
          .pain-card:nth-child(2) {
            transform: translateY(-10px);
            z-index: 2;
          }

          /* Right Card - Drops down and rotates right */
          .pain-card:nth-child(3) {
            transform: translateY(60px) rotate(4deg);
          }

          /* The satisfying "Snap to Straight" on hover */
          .pain-card:nth-child(1):hover,
          .pain-card:nth-child(2):hover,
          .pain-card:nth-child(3):hover {
            transform: translateY(-20px) rotate(0deg) scale(1.02);
          }
        }
      `}</style>

      <section className="problem-section" id="problem">
        <div className="problem-inner">
          
          {/* Top Centered Header */}
          <div className="problem-header">
            <h2 className="problem-title">You're a teacher, not an IT department.</h2>
            <p className="problem-desc">
              Right now, running an online academy feels like holding water with your bare hands. You are losing time, money, and students to a fractured, outdated system.
            </p>
          </div>

          {/* Bottom "Chord" Grid */}
          <div className="problem-grid">
            
            {/* Card 1: The Mess */}
            <div className="pain-card">
              <div className="pain-icon-wrapper">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="8" width="18" height="4" rx="1"></rect>
                  <path d="M12 8v13"></path>
                  <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
                  <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
                </svg>
              </div>
              <h3 className="pain-title">The "Duct-Tape" Stack</h3>
              <p className="pain-desc">
                Paying for Zoom, uploading to Drive, managing WhatsApp links, and tracking Razorpay manually. It's an exhausting administrative nightmare.
              </p>
            </div>

            {/* Card 2: The Tax (Center focal point) */}
            <div className="pain-card">
              <div className="pain-icon-wrapper">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                  <line x1="12" y1="18" x2="12" y2="22"></line>
                  <line x1="12" y1="2" x2="12" y2="6"></line>
                </svg>
              </div>
              <h3 className="pain-title">The 60% Platform Tax</h3>
              <p className="pain-desc">
                Selling on massive marketplaces means they control your pricing, block you from your own students, and siphon off 60% of your hard-earned revenue.
              </p>
            </div>

            {/* Card 3: The Brand */}
            <div className="pain-card">
              <div className="pain-icon-wrapper">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="pain-title">Zero Brand Loyalty</h3>
              <p className="pain-desc">
                When students buy on aggregated sites, they are loyal to the site, not to you. Worse, algorithms recommend competitors right next to your content.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}