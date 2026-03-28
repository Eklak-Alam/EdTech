"use client";

import React from "react";

export default function StudentExperience() {
  return (
    <>
      <style>{`
        :root {
          --bg-light: #FAF9F5;
          --text-main: #2B2822;
          --text-muted: #625C53;
          --border-color: #E6E1D7;
          --accent: #D44527;
          --bone-100: #F4F2EC;
          --bone-200: #E6E1D7;
          
          /* Trust Colors */
          --trust-blue: #0F52BA;
          --trust-blue-light: #E8F0FE;
          --gold: #D4AF37;
          --gold-light: #FDF8E7;
          
          --font-sans: 'Instrument Sans', system-ui, sans-serif;
          --font-display: 'Playfair Display', Georgia, serif;
        }

        .experience-section {
          background-color: var(--bone-100); /* Slightly offset background to separate from AI section */
          padding: 140px 0;
          border-top: 1px solid var(--border-color);
        }

        .experience-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* Header */
        .experience-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 72px auto;
        }

        .experience-eyebrow {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 800;
          color: var(--trust-blue);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 20px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: var(--trust-blue-light);
          border-radius: 30px;
          border: 1px solid rgba(15, 82, 186, 0.2);
        }

        .experience-title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 4vw, 3.8rem);
          font-weight: 700;
          color: var(--text-main);
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
        }

        .experience-desc {
          font-family: var(--font-sans);
          font-size: clamp(1.1rem, 2vw, 1.25rem);
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* Grid Layout */
        .experience-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        @media (min-width: 900px) {
          .experience-grid {
            grid-template-columns: repeat(12, 1fr);
            grid-template-rows: repeat(2, auto);
          }
        }

        /* Base Card Styling */
        .exp-card {
          background: #FFFFFF;
          border: 1px solid var(--border-color);
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 20px rgba(43, 40, 34, 0.03);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .exp-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(43, 40, 34, 0.08);
          border-color: var(--border-color);
        }

        .exp-content {
          padding: 40px;
        }

        .exp-title {
          font-family: var(--font-sans);
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 16px;
        }

        .exp-desc {
          font-family: var(--font-sans);
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* --- CARD 1: Video Player Experience (Large Left) --- */
        .card-player {
          grid-column: span 12;
        }
        @media (min-width: 900px) {
          .card-player { grid-column: span 7; grid-row: span 2; }
        }

        .player-visual {
          background: var(--bg-light);
          padding: 40px 40px 0 40px;
          display: flex;
          justify-content: center;
          border-bottom: 1px solid var(--border-color);
        }

        .mock-player {
          width: 100%;
          background: var(--text-main); /* Using the very dark brown/charcoal, not black */
          border-radius: 16px 16px 0 0;
          padding: 16px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          height: 240px;
          position: relative;
          overflow: hidden;
        }

        /* Mockup Playback Controls */
        .mock-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 12px;
          color: #FFFFFF;
        }

        .mock-progress-bar {
          width: 100%;
          height: 6px;
          background: rgba(255,255,255,0.2);
          border-radius: 3px;
          position: relative;
          overflow: hidden;
        }

        .mock-progress-fill {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 30%;
          background: var(--accent);
          border-radius: 3px;
          transition: width 1.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .card-player:hover .mock-progress-fill {
          width: 85%;
        }

        .mock-speed {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 700;
          background: rgba(255,255,255,0.15);
          padding: 4px 8px;
          border-radius: 8px;
          color: #FFF;
        }

        /* --- CARD 2: Certificates (Top Right) --- */
        .card-cert {
          grid-column: span 12;
        }
        @media (min-width: 900px) {
          .card-cert { grid-column: span 5; }
        }

        .cert-visual {
          height: 160px;
          background: var(--gold-light);
          border-bottom: 1px solid rgba(212, 175, 55, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .mock-cert {
          width: 180px;
          height: 120px;
          background: #FFFFFF;
          border-radius: 8px;
          box-shadow: 0 10px 20px rgba(212, 175, 55, 0.15);
          border: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 16px;
          position: relative;
        }

        .cert-seal {
          width: 32px;
          height: 32px;
          background: var(--gold);
          border-radius: 50%;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cert-seal::after {
          content: '';
          width: 20px;
          height: 20px;
          border: 2px dashed #FFF;
          border-radius: 50%;
        }

        .cert-line {
          height: 4px;
          background: var(--bone-200);
          border-radius: 2px;
          margin-bottom: 6px;
        }

        /* --- CARD 3: Community/Discussions (Bottom Right) --- */
        .card-comm {
          grid-column: span 12;
        }
        @media (min-width: 900px) {
          .card-comm { grid-column: span 5; }
        }

        .comm-visual {
          height: 160px;
          background: var(--trust-blue-light);
          border-bottom: 1px solid rgba(15, 82, 186, 0.1);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0 40px;
        }

        .mock-chat {
          background: #FFFFFF;
          padding: 16px;
          border-radius: 12px 12px 0 0;
          box-shadow: 0 4px 12px rgba(15, 82, 186, 0.08);
          border: 1px solid var(--border-color);
          border-bottom: none;
        }

        .chat-bubble {
          display: flex;
          gap: 12px;
          margin-bottom: 12px;
        }

        .chat-avatar {
          width: 24px;
          height: 24px;
          background: var(--bone-200);
          border-radius: 50%;
          flex-shrink: 0;
        }

        .chat-line {
          height: 8px;
          background: var(--bone-200);
          border-radius: 4px;
          width: 100%;
        }

      `}</style>

      <section className="experience-section" id="experience">
        <div className="experience-inner">
          
          <div className="experience-header">
            <span className="experience-eyebrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              Student Trust & Experience
            </span>
            <h2 className="experience-title">Look like a premium academy from day one.</h2>
            <p className="experience-desc">
              When students pay for your courses, they expect a professional environment. We provide the polished, high-end classroom experience that justifies your pricing.
            </p>
          </div>

          <div className="experience-grid">
            
            {/* Card 1: Video Player */}
            <div className="exp-card card-player">
              <div className="player-visual">
                <div className="mock-player">
                  {/* Subtle play icon in center */}
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'rgba(255,255,255,0.8)' }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                  
                  {/* Controls */}
                  <div className="mock-progress-bar">
                    <div className="mock-progress-fill"></div>
                  </div>
                  <div className="mock-controls">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <span className="mock-speed">1.5x</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M12 12v9"></path><path d="m8 17 4 4 4-4"></path></svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="exp-content">
                <h3 className="exp-title">Distraction-Free Video Player</h3>
                <p className="exp-desc">
                  No ads. No "up next" competitor videos. Just your content delivered in a pristine, ad-free player. Features include adjustable playback speeds (0.5x to 2x), timestamped student notes, and picture-in-picture mode.
                </p>
              </div>
            </div>

            {/* Card 2: Certificates */}
            <div className="exp-card card-cert">
              <div className="cert-visual">
                <div className="mock-cert">
                  <div className="cert-seal"></div>
                  <div className="cert-line" style={{ width: '60%' }}></div>
                  <div className="cert-line" style={{ width: '40%' }}></div>
                </div>
              </div>
              <div className="exp-content">
                <h3 className="exp-title">Verifiable Certificates</h3>
                <p className="exp-desc">
                  Upon 100% course completion, students automatically receive a verifiable digital certificate that they can showcase on LinkedIn with one click.
                </p>
              </div>
            </div>

            {/* Card 3: Community */}
            <div className="exp-card card-comm">
              <div className="comm-visual">
                <div className="mock-chat">
                  <div className="chat-bubble">
                    <div className="chat-avatar"></div>
                    <div style={{ width: '100%' }}>
                      <div className="chat-line" style={{ width: '80%', marginBottom: '6px' }}></div>
                      <div className="chat-line" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="exp-content">
                <h3 className="exp-title">Interactive Learning</h3>
                <p className="exp-desc">
                  Keep students engaged with per-lesson discussion threads, downloadable PDF assignments, and instant-graded quizzes to test their retention.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}