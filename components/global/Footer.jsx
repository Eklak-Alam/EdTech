"use client";

import React from "react";

export default function Footer() {
  return (
    <>
      <style>{`
        :root {
          --bg-light: #FAF9F5;
          --text-main: #2B2822;
          --text-muted: #625C53;
          --text-light-muted: #A8A296;
          --border-color: #D5CFBF;
          --accent: #D44527;
          --accent-dark: #912611;
          --bone-100: #F4F2EC;
          --bone-200: #E6E1D7;
          --font-sans: 'Instrument Sans', system-ui, sans-serif;
          --font-display: 'Playfair Display', Georgia, serif;
        }

        .footer-wrapper {
          background-color: var(--bone-100);
          position: relative;
          padding-top: 100px; /* Space for the overlapping CTA */
        }

        /* =========================================
           THE OVERLAPPING CTA BOX (Waitlist)
           ========================================= */
        .cta-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 10;
          margin-bottom: -100px; /* Pulls it down to overlap the dark footer */
        }

        .cta-box {
          background: var(--accent);
          border: 3px solid var(--text-main);
          border-radius: 32px;
          padding: 72px 40px;
          text-align: center;
          box-shadow: 16px 16px 0 var(--text-main);
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .cta-badge {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 900;
          color: var(--accent-dark);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 24px;
          padding: 8px 16px;
          background: #FFEDE8;
          border: 2px solid var(--accent-dark);
          border-radius: 30px;
          position: relative;
          z-index: 2;
          transform: rotate(-2deg);
        }

        .cta-title {
          font-family: var(--font-display);
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          font-weight: 700;
          color: #FFFFFF;
          line-height: 1.1;
          margin-bottom: 16px;
          position: relative;
          z-index: 2;
        }

        .cta-desc {
          font-family: var(--font-sans);
          font-size: 1.15rem;
          color: #FFF0ED;
          margin-bottom: 48px;
          max-width: 540px;
          position: relative;
          z-index: 2;
        }

        /* =========================================
           CHUNKY WAITLIST INPUT GROUP
           ========================================= */
        .waitlist-form {
          display: flex;
          width: 100%;
          max-width: 560px;
          flex-direction: column;
          gap: 16px;
          position: relative;
          z-index: 2;
        }

        @media (min-width: 600px) {
          .waitlist-form {
            flex-direction: row;
            gap: 0;
            box-shadow: 8px 8px 0 var(--accent-dark); /* Form-level shadow */
            border-radius: 16px;
          }
        }

        .waitlist-input {
          flex-grow: 1;
          padding: 20px 24px;
          font-family: var(--font-sans);
          font-size: 1.1rem;
          font-weight: 600;
          background-color: #FAF9F5;
          border: 3px solid var(--text-main);
          border-radius: 16px;
          outline: none;
          color: var(--text-main);
          box-shadow: inset 4px 4px 0 rgba(0,0,0,0.04); /* Inner depth */
        }

        @media (min-width: 600px) {
          .waitlist-input {
            border-radius: 16px 0 0 16px;
            border-right: none;
          }
        }

        .waitlist-input::placeholder {
          color: #A8A296;
          font-weight: 500;
        }

        /* THE BROWSER AUTOFILL FIX! */
        .waitlist-input:-webkit-autofill,
        .waitlist-input:-webkit-autofill:hover, 
        .waitlist-input:-webkit-autofill:focus, 
        .waitlist-input:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 50px #FAF9F5 inset !important; /* Matches our input bg */
          -webkit-text-fill-color: var(--text-main) !important;
          transition: background-color 5000s ease-in-out 0s;
        }

        .waitlist-btn {
          padding: 20px 32px;
          background: var(--text-main);
          color: #FFFFFF;
          font-family: var(--font-sans);
          font-size: 1.1rem;
          font-weight: 800;
          border: 3px solid var(--text-main);
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          white-space: nowrap;
        }

        @media (min-width: 600px) {
          .waitlist-btn {
            border-radius: 0 16px 16px 0;
          }
        }

        .waitlist-btn:hover {
          background: var(--bg-light);
          color: var(--text-main);
        }

        /* =========================================
           THE DARK FOOTER
           ========================================= */
        .site-footer {
          background-color: var(--text-main);
          color: var(--bone-100);
          padding: 180px 0 40px 0; /* Huge top padding to clear the CTA box */
          border-top: 3px solid var(--text-main);
        }

        .footer-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          margin-bottom: 80px;
        }

        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr 1fr;
          }
        }

        /* Brand Column */
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-width: 320px;
        }

        .footer-logo {
          font-family: var(--font-sans);
          font-size: 1.5rem;
          font-weight: 900;
          color: #FFFFFF;
          letter-spacing: -0.02em;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .footer-logo-icon {
          width: 32px;
          height: 32px;
          background: var(--accent);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFF;
        }

        .footer-brand-desc {
          font-family: var(--font-sans);
          font-size: 1.05rem;
          color: var(--text-light-muted);
          line-height: 1.6;
        }

        /* Social Icons */
        .social-links {
          display: flex;
          gap: 16px;
          margin-top: 8px;
        }

        .social-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          border: 1.5px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--bone-100);
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background: var(--accent);
          border-color: var(--accent);
          color: #FFF;
          transform: translateY(-4px) scale(1.05);
        }

        /* Link Columns */
        .footer-col-title {
          font-family: var(--font-sans);
          font-size: 1.15rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 24px;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-link {
          font-family: var(--font-sans);
          font-size: 1.05rem;
          color: var(--text-light-muted);
          text-decoration: none;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .footer-link::before {
          content: '→';
          color: var(--accent);
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.2s ease;
          font-weight: bold;
        }

        .footer-link:hover {
          color: #FFFFFF;
          transform: translateX(6px);
        }

        .footer-link:hover::before {
          opacity: 1;
          transform: translateX(0);
        }

        /* Bottom Bar */
        .footer-bottom {
          padding-top: 32px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        @media (min-width: 768px) {
          .footer-bottom {
            flex-direction: row;
          }
        }

        .footer-copyright {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          color: var(--text-light-muted);
        }
      `}</style>

      <div className="footer-wrapper">
        
        {/* Overlapping CTA Box */}
        <div className="cta-container">
          <div className="cta-box">
            <h2 className="cta-title">Ready to own your academy?</h2>
            <p className="cta-desc">
              Stop renting space. Join the waitlist today to get early access and lock in lifetime 0% commission rates before public launch.
            </p>
            
            <form className="waitlist-form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                className="waitlist-input" 
                placeholder="teacher@academy.com" 
                required
                autoComplete="email"
              />
              <button type="submit" className="waitlist-btn">
                Join Waitlist
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* The Main Footer */}
        <footer className="site-footer">
          <div className="footer-inner">
            
            <div className="footer-grid">
              
              {/* Brand & Socials */}
              <div className="footer-brand">
                <div className="footer-logo">
                  <div className="footer-logo-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                  StackConnect
                </div>
                <p className="footer-brand-desc">
                  The all-in-one platform giving independent Indian educators their own online school, zero technical skills required.
                </p>
                <div className="social-links">
                  {/* YouTube */}
                  <a href="#" className="social-icon" aria-label="YouTube">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                  </a>
                  {/* Instagram */}
                  <a href="#" className="social-icon" aria-label="Instagram">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  {/* LinkedIn */}
                  <a href="#" className="social-icon" aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                </div>
              </div>

              {/* Product Column */}
              <div>
                <h4 className="footer-col-title">Platform</h4>
                <ul className="footer-links">
                  <li><a href="#features" className="footer-link">Live Auto-Record</a></li>
                  <li><a href="#features" className="footer-link">Zero-Code Storefront</a></li>
                  <li><a href="#features" className="footer-link">Video Hosting</a></li>
                  <li><a href="#pricing" className="footer-link">Pricing Plans</a></li>
                </ul>
              </div>

              {/* Resources Column */}
              <div>
                <h4 className="footer-col-title">Resources</h4>
                <ul className="footer-links">
                  <li><a href="#" className="footer-link">Creator Blog</a></li>
                  <li><a href="#" className="footer-link">EdTech Guide</a></li>
                  <li><a href="#" className="footer-link">Template Library</a></li>
                  <li><a href="#" className="footer-link">Help Center</a></li>
                </ul>
              </div>

              {/* Legal Column */}
              <div>
                <h4 className="footer-col-title">Legal</h4>
                <ul className="footer-links">
                  <li><a href="#" className="footer-link">Privacy Policy</a></li>
                  <li><a href="#" className="footer-link">Terms of Service</a></li>
                  <li><a href="#" className="footer-link">Refund Policy</a></li>
                </ul>
              </div>

            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
              <div className="footer-copyright">
                © 2026 StackConnect. Built for India.
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-light-muted)', fontSize: '0.9rem', fontWeight: '600' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  Secured by Razorpay
                </div>
              </div>
            </div>

          </div>
        </footer>
      </div>
    </>
  );
}