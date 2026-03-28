"use client";

import React from "react";

export default function Pricing() {
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

        .pricing-section {
          background-color: var(--bone-100);
          padding: 100px 0;
        }

        .pricing-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .pricing-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .pricing-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 16px;
        }

        .pricing-desc {
          font-family: var(--font-sans);
          font-size: clamp(1.05rem, 1.5vw, 1.15rem);
          color: var(--text-muted);
          max-width: 600px;
          margin: 0 auto;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          max-width: 1000px;
          margin: 0 auto;
        }

        @media (min-width: 800px) {
          .pricing-grid {
            grid-template-columns: repeat(3, 1fr);
            align-items: flex-start;
          }
        }

        .pricing-card {
          background: #FFFFFF;
          border: 2px solid var(--text-main);
          border-radius: 16px;
          padding: 32px 24px;
          box-shadow: 6px 6px 0 var(--text-main);
          display: flex;
          flex-direction: column;
          position: relative;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .pricing-card:hover {
          transform: translate(-4px, -4px);
          box-shadow: 10px 10px 0 var(--text-main);
        }

        /* The Highlighted "Creator" Plan */
        .pricing-card.popular {
          background: #FDFCFA;
          border-color: var(--accent);
          box-shadow: 6px 6px 0 var(--accent-dark);
        }
        
        .pricing-card.popular:hover {
          transform: translate(-4px, -4px);
          box-shadow: 10px 10px 0 var(--accent-dark);
        }

        .popular-badge {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--accent);
          color: #FFF;
          padding: 4px 12px;
          border-radius: 20px;
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border: 2px solid var(--accent-dark);
        }

        .plan-name {
          font-family: var(--font-sans);
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 8px;
        }

        .plan-price {
          font-family: var(--font-display);
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 8px;
          display: flex;
          align-items: baseline;
          gap: 4px;
        }

        .plan-currency {
          font-size: 1.5rem;
          font-weight: 600;
        }

        .plan-period {
          font-family: var(--font-sans);
          font-size: 1rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .plan-desc {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 24px;
          min-height: 44px;
        }

        .plan-features {
          list-style: none;
          padding: 0;
          margin: 0 0 32px 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex-grow: 1;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-family: var(--font-sans);
          font-size: 0.95rem;
          color: var(--text-main);
          font-weight: 500;
        }

        .feature-icon {
          color: var(--accent);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .btn-pricing {
          width: 100%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px;
          border-radius: 10px;
          font-family: var(--font-sans);
          font-size: 1rem;
          font-weight: 700;
          text-decoration: none;
          cursor: pointer;
          transition: transform 0.1s, box-shadow 0.1s;
        }

        .btn-outline {
          background: #FFF;
          color: var(--text-main);
          border: 2px solid var(--text-main);
          box-shadow: 3px 3px 0 var(--text-main);
        }

        .btn-outline:active {
          transform: translate(3px, 3px);
          box-shadow: 0 0 0 var(--text-main);
        }

        .btn-solid {
          background: var(--accent);
          color: #FFF;
          border: 2px solid var(--accent-dark);
          box-shadow: 3px 3px 0 var(--accent-dark);
        }

        .btn-solid:active {
          transform: translate(3px, 3px);
          box-shadow: 0 0 0 var(--accent-dark);
        }
      `}</style>

      <section className="pricing-section" id="pricing">
        <div className="pricing-inner">
          <div className="pricing-header">
            <h2 className="pricing-title">Simple, transparent pricing.</h2>
            <p className="pricing-desc">
              Start for free, upgrade when you're making money. We only grow when your academy grows.
            </p>
          </div>

          <div className="pricing-grid">
            
            {/* Free Tier */}
            <div className="pricing-card">
              <h3 className="plan-name">Free</h3>
              <div className="plan-price">
                <span className="plan-currency">₹</span>0
                <span className="plan-period">/mo</span>
              </div>
              <p className="plan-desc">Perfect for launching your first course.</p>
              
              <ul className="plan-features">
                <li className="feature-item">
                  <CheckIcon /> 5% commission on sales
                </li>
                <li className="feature-item">
                  <CheckIcon /> Up to 3 courses
                </li>
                <li className="feature-item">
                  <CheckIcon /> 5GB video storage
                </li>
                <li className="feature-item">
                  <CheckIcon /> Razorpay integration
                </li>
              </ul>
              
              <a href="/signup" className="btn-pricing btn-outline">Start for free</a>
            </div>

            {/* Creator Tier (Highlighted) */}
            <div className="pricing-card popular">
              <div className="popular-badge">Most Popular</div>
              <h3 className="plan-name">Creator</h3>
              <div className="plan-price">
                <span className="plan-currency">₹</span>1,499
                <span className="plan-period">/mo</span>
              </div>
              <p className="plan-desc">Everything you need to scale your income.</p>
              
              <ul className="plan-features">
                <li className="feature-item">
                  <CheckIcon /> <strong>0% commission</strong>
                </li>
                <li className="feature-item">
                  <CheckIcon /> Up to 20 courses
                </li>
                <li className="feature-item">
                  <CheckIcon /> 50GB video storage
                </li>
                <li className="feature-item">
                  <CheckIcon /> AI transcription & quizzes
                </li>
              </ul>
              
              <a href="/signup" className="btn-pricing btn-solid">Get Early Access</a>
            </div>

            {/* Pro Tier */}
            <div className="pricing-card">
              <h3 className="plan-name">Pro</h3>
              <div className="plan-price">
                <span className="plan-currency">₹</span>4,999
                <span className="plan-period">/mo</span>
              </div>
              <p className="plan-desc">For established coaching institutes.</p>
              
              <ul className="plan-features">
                <li className="feature-item">
                  <CheckIcon /> <strong>0% commission</strong>
                </li>
                <li className="feature-item">
                  <CheckIcon /> Unlimited courses
                </li>
                <li className="feature-item">
                  <CheckIcon /> 500GB video storage
                </li>
                <li className="feature-item">
                  <CheckIcon /> Custom domain (yourname.com)
                </li>
              </ul>
              
              <a href="/signup" className="btn-pricing btn-outline">Join Waitlist</a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

// Simple SVG Checkmark Component to keep code clean
function CheckIcon() {
  return (
    <svg className="feature-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}