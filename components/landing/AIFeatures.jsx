"use client";

import React from "react";

export default function AIFeatures() {
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
          /* AI Specific Colors */
          --ai-purple: #6B46C1;
          --ai-purple-light: #FAF5FF;
          --ai-gradient: linear-gradient(135deg, #D44527 0%, #6B46C1 100%);
          --font-sans: 'Instrument Sans', system-ui, sans-serif;
          --font-display: 'Playfair Display', Georgia, serif;
        }

        .ai-section {
          background-color: var(--bone-100);
          padding: 140px 0;
          position: relative;
          overflow: hidden;
          border-top: 1px solid var(--border-color);
        }

        /* Ambient Background Glow */
        .ai-section::before {
          content: '';
          position: absolute;
          top: -200px;
          right: -200px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(107, 70, 193, 0.05) 0%, rgba(255,255,255,0) 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .ai-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 2;
        }

        /* Header */
        .ai-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 72px auto;
        }

        .ai-badge {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 800;
          color: var(--ai-purple);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 20px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: var(--ai-purple-light);
          border: 1px solid rgba(107, 70, 193, 0.2);
          border-radius: 30px;
        }

        .ai-sparkle {
          animation: spin 4s linear infinite;
        }

        @keyframes spin {
          100% { transform: rotate(360deg); }
        }

        .ai-title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 700;
          color: var(--text-main);
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
        }

        .ai-desc {
          font-family: var(--font-sans);
          font-size: clamp(1.1rem, 2vw, 1.25rem);
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* 3-Column Grid */
        .ai-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }

        @media (min-width: 900px) {
          .ai-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* AI Feature Cards */
        .ai-card {
          background: var(--bg-light);
          border: 1px solid var(--border-color);
          border-radius: 24px;
          padding: 40px 32px;
          position: relative;
          transition: all 0.4s ease;
          overflow: hidden;
        }

        /* Subtle Gradient Border Reveal on Hover */
        .ai-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 24px;
          padding: 2px;
          background: var(--ai-gradient);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .ai-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(107, 70, 193, 0.08);
          background: #FFFFFF;
        }

        .ai-card:hover::after {
          opacity: 1;
        }

        .ai-icon-wrapper {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: #FFFFFF;
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          color: var(--text-main);
          position: relative;
          z-index: 2;
        }

        .ai-card-title {
          font-family: var(--font-sans);
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 16px;
          position: relative;
          z-index: 2;
        }

        .ai-card-desc {
          font-family: var(--font-sans);
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.6;
          position: relative;
          z-index: 2;
        }

        /* Mini Abstract Visuals inside cards */
        .abstract-line {
          height: 4px;
          background: var(--bone-100);
          border-radius: 2px;
          margin-bottom: 8px;
          overflow: hidden;
          position: relative;
        }

        .abstract-line::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 0%;
          background: var(--ai-gradient);
          transition: width 1s ease;
        }

        .ai-card:hover .abstract-line::before {
          width: 100%;
        }

      `}</style>

      <section className="ai-section" id="ai-features">
        <div className="ai-inner">
          
          <div className="ai-header">
            <h2 className="ai-title">Hours of manual work, done in seconds.</h2>
            <p className="ai-desc">
              AI isn't here to replace your teaching. It's here to do the tedious administrative work so you can focus on your students.
            </p>
          </div>

          <div className="ai-grid">
            
            {/* Feature 1: Whisper Transcription */}
            <div className="ai-card">
              <div className="ai-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" y1="19" x2="12" y2="22"></line>
                </svg>
              </div>
              <h3 className="ai-card-title">Auto-Transcription</h3>
              <div style={{ marginBottom: '16px' }}>
                <div className="abstract-line" style={{ width: '80%' }}></div>
                <div className="abstract-line" style={{ width: '60%' }}></div>
                <div className="abstract-line" style={{ width: '90%' }}></div>
              </div>
              <p className="ai-card-desc">
                Upload your video, and our engine automatically generates highly accurate, searchable text transcripts and subtitles in both Hindi and English.
              </p>
            </div>

            {/* Feature 2: Quizzes */}
            <div className="ai-card">
              <div className="ai-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
              </div>
              <h3 className="ai-card-title">One-Click Quizzes</h3>
              <div style={{ marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', border: '2px solid var(--ai-purple)' }}></div>
                  <div className="abstract-line" style={{ width: '70%', marginBottom: '0' }}></div>
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--ai-purple)' }}></div>
                  <div className="abstract-line" style={{ width: '50%', marginBottom: '0' }}></div>
                </div>
              </div>
              <p className="ai-card-desc">
                After reading your video transcript, the AI instantly drafts 5 to 10 multiple-choice questions for you to review and publish to test student retention.
              </p>
            </div>

            {/* Feature 3: Smart Course Assistant (RAG) */}
            <div className="ai-card">
              <div className="ai-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3 className="ai-card-title">Smart Course Assistant</h3>
              <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'flex-end' }}>
                 <div style={{ background: 'var(--bone-100)', padding: '8px 12px', borderRadius: '12px 12px 0 12px', width: '80%' }}>
                    <div className="abstract-line" style={{ width: '100%', marginBottom: '4px', background: '#D5CFBF' }}></div>
                    <div className="abstract-line" style={{ width: '60%', marginBottom: '0', background: '#D5CFBF' }}></div>
                 </div>
              </div>
              <p className="ai-card-desc">
                Students can ask questions 24/7. The AI answers them using <em>only</em> the transcript of your specific course, ensuring zero hallucinations and perfect accuracy.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}