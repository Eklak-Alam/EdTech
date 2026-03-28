"use client";

import React, { useState } from "react";

export default function CTAWaitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show the success state. 
    // Later, wire this up to Supabase or Resend!
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <>
      <style>{`
        :root {
          --bg-light: #FAF9F5;
          --text-main: #2B2822;
          --text-muted: #625C53;
          --accent: #D44527;
          --accent-dark: #912611;
          --bone-100: #F4F2EC;
          --bone-200: #E6E1D7;
          --font-sans: 'Instrument Sans', system-ui, sans-serif;
          --font-display: 'Playfair Display', Georgia, serif;
        }

        /* CTA Section */
        .cta-section {
          background-color: var(--bone-100);
          padding: 100px 0;
        }

        .cta-inner {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 1.5rem;
          text-align: center;
        }

        .cta-title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 24px;
          line-height: 1.1;
        }

        .cta-desc {
          font-family: var(--font-sans);
          font-size: clamp(1.1rem, 2vw, 1.25rem);
          color: var(--text-muted);
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Form Styles */
        .waitlist-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 500px;
          margin: 0 auto;
        }

        @media (min-width: 600px) {
          .waitlist-form {
            flex-direction: row;
          }
        }

        .waitlist-input {
          flex-grow: 1;
          padding: 16px 20px;
          border-radius: 12px;
          border: 2px solid var(--text-main);
          font-family: var(--font-sans);
          font-size: 1rem;
          color: var(--text-main);
          background: #FFFFFF;
          box-shadow: inset 2px 2px 4px rgba(0,0,0,0.05);
          outline: none;
          transition: border-color 0.2s;
        }

        .waitlist-input:focus {
          border-color: var(--accent);
        }

        .waitlist-input::placeholder {
          color: #A39E93;
        }

        .btn-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 16px 32px;
          border-radius: 12px;
          font-family: var(--font-sans);
          font-size: 1.05rem;
          font-weight: 700;
          color: #FFF;
          background: var(--accent);
          border: 2px solid var(--accent-dark);
          box-shadow: 3px 3px 0 var(--accent-dark);
          cursor: pointer;
          transition: transform 0.1s, box-shadow 0.1s;
          white-space: nowrap;
        }

        .btn-submit:hover {
          transform: translate(-2px, -2px);
          box-shadow: 5px 5px 0 var(--accent-dark);
        }

        .btn-submit:active {
          transform: translate(2px, 2px);
          box-shadow: 0 0 0 var(--accent-dark);
        }

        .success-message {
          padding: 24px;
          background: #E8F5E9;
          border: 2px solid #2E7D32;
          border-radius: 12px;
          color: #1B5E20;
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 1.1rem;
          box-shadow: 4px 4px 0 #2E7D32;
        }

        /* Footer Styles */
        .footer {
          background-color: var(--bg-light);
          padding: 48px 0;
        }

        .footer-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        @media (min-width: 600px) {
          .footer-inner {
            flex-direction: row;
            justify-content: space-between;
          }
        }

        .footer-logo {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-main);
          text-decoration: none;
        }

        .footer-links {
          display: flex;
          gap: 24px;
        }

        .footer-link {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-link:hover {
          color: var(--accent);
        }

        .footer-copy {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          color: #A39E93;
        }
      `}</style>

      {/* CTA / Waitlist Section */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2 className="cta-title">Ready to own your audience?</h2>
          <p className="cta-desc">
            We are currently onboarding our first 50 founding teachers. Join the waitlist to get early access and lock in the 0% commission rate.
          </p>

          {submitted ? (
            <div className="success-message">
              🎉 You're on the list! We'll be in touch shortly.
            </div>
          ) : (
            <form className="waitlist-form" onSubmit={handleSubmit}>
              <input 
                type="email" 
                className="waitlist-input" 
                placeholder="Enter your email address..." 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-submit">
                Join Waitlist
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}