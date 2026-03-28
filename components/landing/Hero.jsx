"use client";

import React from "react";

export default function Hero() {
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

        /* Base reset for focus */
        *:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 2px;
        }

        /* Hero Section - Updated Background */
        .hero-section {
          background-color: var(--bone-100);
          padding: 100px 0 60px;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow-x: clip;
        }

        .hero-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: grid;
          grid-template-columns: 1fr;
          gap: 56px;
          align-items: center;
        }

        @media (min-width: 900px) {
          .hero-section {
            padding: 140px 0 100px;
          }
          .hero-inner {
            grid-template-columns: 1.1fr 0.9fr;
            gap: 64px;
          }
        }

        /* Left Content */
        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          animation: fadeUp 0.7s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Title */
        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--text-main);
          margin-bottom: 24px;
        }

        .hero-title-italic {
          font-style: italic;
          font-weight: 600;
          color: var(--accent);
          padding-right: 8px;
        }

        /* Description */
        .hero-desc {
          font-family: var(--font-sans);
          font-size: clamp(1.05rem, 2vw, 1.25rem);
          line-height: 1.6;
          color: var(--text-muted);
          margin-bottom: 36px;
          max-width: 540px;
        }

        /* CTA Buttons */
        .hero-actions {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          width: 100%;
          margin-bottom: 40px;
        }

        @media (min-width: 500px) {
          .hero-actions {
            grid-template-columns: max-content max-content;
          }
        }

        .btn-primary,
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 28px;
          border-radius: 12px;
          font-family: var(--font-sans);
          font-size: clamp(0.95rem, 2vw, 1.05rem);
          font-weight: 700;
          text-decoration: none;
          cursor: pointer;
          transition: transform 0.15s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.15s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .btn-primary {
          color: #FFF;
          background-color: var(--accent);
          border: 2px solid var(--accent-dark);
          box-shadow: 3px 3px 0 var(--accent-dark);
        }

        .btn-primary:hover {
          color: #FFF;
          background-color: var(--accent);
          transform: translate(-2px, -2px);
          box-shadow: 5px 5px 0 var(--accent-dark);
        }

        .btn-primary:active {
          transform: translate(2px, 2px);
          box-shadow: 0 0 0 var(--accent-dark);
        }

        .btn-secondary {
          color: var(--text-main);
          background-color: #FFFFFF;
          border: 2px solid var(--text-main);
          box-shadow: 3px 3px 0 var(--text-main);
        }

        .btn-secondary:hover {
          color: var(--text-main);
          background-color: #FFFFFF;
          transform: translate(-2px, -2px);
          box-shadow: 5px 5px 0 var(--text-main);
        }

        .btn-secondary:active {
          transform: translate(2px, 2px);
          box-shadow: 0 0 0 var(--text-main);
        }

        /* Right Visual (Responsive App Mockup) */
        .hero-visual {
          position: relative;
          width: 100%;
          perspective: 1000px;
          animation: fadeUp 0.7s 0.15s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        .app-window {
          background: #FFFFFF;
          border: 2px solid var(--text-main);
          border-radius: 16px;
          box-shadow: 8px 8px 0 var(--text-main);
          overflow: hidden;
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          transform: rotateX(2deg) rotateY(-4deg) rotateZ(1deg);
          transition: transform 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1),
                      box-shadow 0.2s ease;
        }

        @media (min-width: 900px) {
          .app-window {
            border-radius: 20px;
            box-shadow: 12px 12px 0 var(--text-main);
          }
        }

        .app-window:hover {
          transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          box-shadow: 6px 6px 0 var(--text-main);
        }

        /* App Header */
        .app-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          background: var(--bone-100);
          border-bottom: 2px solid var(--text-main);
        }

        @media (min-width: 600px) {
          .app-header {
            padding: 14px 20px;
          }
        }

        .app-dots {
          display: flex;
          gap: 8px;
        }

        .app-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 1.5px solid var(--text-main);
        }

        .dot-red { background: #FF5F56; }
        .dot-yel { background: #FFBD2E; }
        .dot-grn { background: #27C93F; }

        .app-badge-live {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-sans);
          font-size: 0.7rem;
          font-weight: 800;
          color: #FFF;
          background: var(--accent);
          padding: 4px 10px;
          border-radius: 30px;
          border: 1.5px solid var(--accent-dark);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .app-badge-live::before {
          content: '';
          width: 6px;
          height: 6px;
          background: #FFF;
          border-radius: 50%;
          animation: pulse 1.2s infinite;
        }

        @keyframes pulse {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }

        /* App Body */
        .app-body {
          padding: 16px;
          background: linear-gradient(145deg, #FDFCFA 0%, #FFFFFF 100%);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        @media (min-width: 600px) {
          .app-body {
            padding: 24px;
            gap: 24px;
          }
        }

        /* Video Player Mockup */
        .video-player {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          background: #1E1C17;
          border-radius: 8px;
          border: 1px solid var(--border-color);
          overflow: hidden;
          cursor: pointer;
        }

        @media (min-width: 600px) {
          .video-player {
            border-radius: 12px;
          }
        }

        .video-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.7;
          transition: opacity 0.2s ease;
        }

        .video-player:hover .video-thumb {
          opacity: 1;
        }

        .video-play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--accent);
          border: 2px solid var(--accent-dark);
          box-shadow: 2px 2px 0 var(--accent-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFF;
          transition: transform 0.1s ease;
        }

        @media (min-width: 600px) {
          .video-play-btn {
            width: 56px;
            height: 56px;
          }
        }

        .video-player:hover .video-play-btn {
          transform: translate(-50%, -50%) scale(1.05);
        }

        .video-progress-bar {
          position: absolute;
          bottom: 12px;
          left: 12px;
          right: 12px;
          height: 4px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
        }

        .video-progress-fill {
          width: 45%;
          height: 100%;
          background: var(--accent);
          border-radius: 4px;
        }

        /* Course Modules Responsive Grid */
        .course-modules {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }

        @media (min-width: 500px) {
          .course-modules {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
        }

        .module-card {
          padding: 16px;
          background: #FFFFFF;
          border: 1px solid var(--border-color);
          border-radius: 10px;
          transition: all 0.2s ease;
        }

        .module-card:hover {
          transform: translateY(-2px);
          border-color: var(--text-main);
          box-shadow: 3px 3px 0 rgba(43, 40, 34, 0.08);
        }

        .module-icon {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .module-icon svg {
          width: 18px;
          height: 18px;
          color: var(--accent);
          flex-shrink: 0;
        }

        .module-title {
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--text-main);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .module-subtitle {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .module-track {
          margin-top: 12px;
          width: 100%;
          height: 6px;
          background: var(--bone-200);
          border-radius: 4px;
          overflow: hidden;
        }

        .module-fill-1 { width: 100%; height: 100%; background: var(--text-main); }
        .module-fill-2 { width: 45%; height: 100%; background: var(--accent); }
      `}</style>

      <section className="hero-section">
        <div className="hero-inner">
          
          {/* Left: Copy & Actions */}
          <div className="hero-content">
            <h1 className="hero-title">
              Launch your digital academy. <br />
              <span className="hero-title-italic">Scale your</span> impact.
            </h1>

            <p className="hero-desc">
              The operating system for modern educators. Host high-quality video courses, stream interactive live classes, and manage your entire coaching business in one place.
            </p>

            <div className="hero-actions">
              <a href="/signup" className="btn-primary" aria-label="Start for free">
                Start for free
              </a>
              <a href="/demo" className="btn-secondary" aria-label="Book a demo">
                Book a demo
              </a>
            </div>
          </div>

          {/* Right: Interactive Visual */}
          <div className="hero-visual">
            <div className="app-window">
              <div className="app-header">
                <div className="app-dots">
                  <div className="app-dot dot-red"></div>
                  <div className="app-dot dot-yel"></div>
                  <div className="app-dot dot-grn"></div>
                </div>
                <div className="app-badge-live">Live Class</div>
              </div>

              <div className="app-body">
                {/* Video Player Mockup */}
                <div className="video-player" role="button" tabIndex={0} aria-label="Play video preview">
                  <div className="video-thumb" style={{
                    backgroundColor: '#1E1C17',
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'grid\' width=\'40\' height=\'40\' patternUnits=\'userSpaceOnUse\'%3E%3Cpath d=\'M 40 0 L 0 0 0 40\' fill=\'none\' stroke=\'%23333\' stroke-width=\'1\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23grid)\'/%3E%3C/svg%3E")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}></div>
                  <div className="video-play-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                  <div className="video-progress-bar">
                    <div className="video-progress-fill"></div>
                  </div>
                </div>

                {/* Course Modules Grid */}
                <div className="course-modules">
                  <div className="module-card">
                    <div className="module-icon">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span className="module-title">1. Strategy Basics</span>
                    </div>
                    <div className="module-subtitle">4 lessons · 32 min</div>
                    <div className="module-track">
                      <div className="module-fill-1"></div>
                    </div>
                  </div>
                  
                  <div className="module-card">
                    <div className="module-icon">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span className="module-title">2. Live Workshops</span>
                    </div>
                    <div className="module-subtitle">2 sessions · 48 min</div>
                    <div className="module-track">
                      <div className="module-fill-2"></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}