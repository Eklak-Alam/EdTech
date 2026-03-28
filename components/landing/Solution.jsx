"use client";

import React from "react";

export default function Solution() {
  return (
    <>
      <style>{`
        :root {
          --bg-light: #FAF9F5;
          --text-main: #2B2822;
          --text-muted: #625C53;
          --border-color: #D5CFBF;
          --accent: #D44527;
          --accent-light: #FFEDE8;
          --green-light: #E8F5E9;
          --green-dark: #2E7D32;
          --blue-light: #E3F2FD;
          --blue-dark: #1565C0;
          --bone-100: #F4F2EC;
          --font-sans: 'Instrument Sans', system-ui, sans-serif;
          --font-display: 'Playfair Display', Georgia, serif;
        }

        .solution-section {
          background-color: var(--bone-100);
          padding: 120px 0;
          position: relative;
        }

        .solution-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* Centered Header */
        .solution-header {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 72px auto;
        }

        .solution-badge {
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
          background: #FFFFFF;
          border: 1.5px solid var(--border-color);
          border-radius: 30px;
          box-shadow: 2px 2px 0 var(--border-color);
        }

        .solution-title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw, 3.8rem);
          font-weight: 700;
          color: var(--text-main);
          line-height: 1.1;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }

        .solution-desc {
          font-family: var(--font-sans);
          font-size: clamp(1.1rem, 2vw, 1.25rem);
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* Three Pillars Grid */
        .pillars-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          margin-bottom: 32px;
        }

        @media (min-width: 900px) {
          .pillars-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Light, Airy Cards */
        .pillar-card {
          background: #FFFFFF;
          border: 2px solid var(--border-color);
          border-radius: 24px;
          padding: 40px 32px;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
        }

        /* Hover Interaction */
        .pillar-card:hover {
          border-color: var(--text-main);
          box-shadow: 8px 8px 0 var(--accent);
          transform: translateY(-8px);
        }

        .icon-circle {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 32px;
          border: 2px solid transparent;
        }

        /* Custom Icon Colors for each pillar */
        .card-1 .icon-circle { background: var(--green-light); color: var(--green-dark); border-color: rgba(46, 125, 50, 0.2); }
        .card-2 .icon-circle { background: var(--blue-light); color: var(--blue-dark); border-color: rgba(21, 101, 192, 0.2); }
        .card-3 .icon-circle { background: var(--accent-light); color: var(--accent); border-color: rgba(212, 69, 39, 0.2); }

        .pillar-title {
          font-family: var(--font-sans);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 16px;
        }

        .pillar-desc {
          font-family: var(--font-sans);
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.6;
          flex-grow: 1;
        }

        .tech-tags {
          display: flex;
          gap: 8px;
          margin-top: 24px;
          flex-wrap: wrap;
        }

        .tech-tag {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          font-weight: 700;
          padding: 6px 12px;
          background: var(--bone-100);
          color: var(--text-muted);
          border-radius: 12px;
          border: 1px solid var(--border-color);
        }

        /* Wide Foundation Card for Business/Payments */
        .foundation-card {
          background: #FFFFFF;
          border: 2px solid var(--text-main);
          border-radius: 24px;
          padding: 48px;
          display: flex;
          flex-direction: column;
          gap: 32px;
          box-shadow: 8px 8px 0 var(--text-main);
        }

        @media (min-width: 900px) {
          .foundation-card {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }

        .foundation-content {
          max-width: 600px;
        }

        .foundation-title {
          font-family: var(--font-sans);
          font-size: 2rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 16px;
        }

        .foundation-desc {
          font-family: var(--font-sans);
          font-size: 1.15rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .revenue-badge {
          display: flex;
          align-items: center;
          gap: 16px;
          background: var(--accent-light);
          padding: 24px 32px;
          border-radius: 20px;
          border: 2px dashed var(--accent);
        }

        .revenue-number {
          font-family: var(--font-display);
          font-size: 3rem;
          font-weight: 700;
          color: var(--accent);
          line-height: 1;
        }

        .revenue-text {
          font-family: var(--font-sans);
          font-size: 1rem;
          font-weight: 700;
          color: var(--accent-dark);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
      `}</style>

      <section className="solution-section" id="solution">
        <div className="solution-inner">
          
          {/* Section Header */}
          <div className="solution-header">
            <h2 className="solution-title">Your entire academy, unified in one platform.</h2>
            <p className="solution-desc">
              We replaced the chaos of five different tools with a single, powerful hub. Built specifically for independent Indian teachers to scale without technical headaches.
            </p>
          </div>

          {/* Top 3 Pillars */}
          <div className="pillars-grid">
            
            {/* Pillar 1: Storefront */}
            <div className="pillar-card card-1">
              <div className="icon-circle">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
              <h3 className="pillar-title">Zero-Code Storefront</h3>
              <p className="pillar-desc">
                Launch your own beautiful website on your custom domain (<em>yourname.com</em>). Use our drag-and-drop builder to create sales pages that convert casual visitors into enrolled students in under an hour.
              </p>
              <div className="tech-tags">
                <span className="tech-tag">Custom Domain</span>
                <span className="tech-tag">SSL Included</span>
              </div>
            </div>

            {/* Pillar 2: Video Hosting */}
            <div className="pillar-card card-2">
              <div className="icon-circle">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 className="pillar-title">Bank-Grade Video</h3>
              <p className="pillar-desc">
                Your content is your livelihood. We secure it with anti-download protection, stream it instantly via global networks, and give your students a premium player with speed controls and offline viewing.
              </p>
              <div className="tech-tags">
                <span className="tech-tag">AWS S3</span>
                <span className="tech-tag">Anti-Download</span>
              </div>
            </div>

            {/* Pillar 3: Live to Course (The Secret Weapon) */}
            <div className="pillar-card card-3">
              <div className="icon-circle">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="2"></circle>
                  <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>
                </svg>
              </div>
              <h3 className="pillar-title">Live Auto-Record</h3>
              <p className="pillar-desc">
                Stop losing your best teaching moments when the Zoom call ends. Conduct live classes directly on StackConnect. <strong>One click</strong> automatically processes and saves the recording as a permanent course lesson.
              </p>
              <div className="tech-tags">
                <span className="tech-tag">No Zoom Needed</span>
                <span className="tech-tag">Auto-Save</span>
              </div>
            </div>

          </div>

          {/* Bottom Foundation Card (Payments/Business) */}
          <div className="foundation-card">
            <div className="foundation-content">
              <h3 className="foundation-title">Keep everything you earn.</h3>
              <p className="foundation-desc">
                Stop paying 60% marketplace taxes to platforms that hide your own students from you. On our paid plans, you own your brand, you own your student data, and you keep every single rupee. Built-in Razorpay handles UPI, Cards, and EMI effortlessly.
              </p>
              <div className="tech-tags" style={{ marginTop: '16px' }}>
                <span className="tech-tag" style={{ border: '1px solid #1565C0', color: '#1565C0', background: '#E3F2FD' }}>Razorpay Integrated</span>
                <span className="tech-tag">Weekly Bank Payouts</span>
              </div>
            </div>

            <div className="revenue-badge">
              <div className="revenue-number">0%</div>
              <div className="revenue-text">
                Commission<br/>on Paid Plans
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}