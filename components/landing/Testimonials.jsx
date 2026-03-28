"use client";

import React, { useRef } from "react";

export default function Testimonials() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      // Scrolls exactly one card width + gap (approx 400px)
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

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
          --star-color: #F59E0B;
        }

        .testimonial-section {
          background-color: var(--bone-100);
          padding: 120px 0;
          position: relative;
          overflow: hidden;
        }

        .testimonial-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 2;
        }

        /* Top Header Layout - Flex to put arrows next to title on Desktop */
        .testimonial-top-bar {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 64px;
          gap: 32px;
        }

        @media (min-width: 900px) {
          .testimonial-top-bar {
            flex-direction: row;
            align-items: flex-end;
          }
        }

        .testimonial-header-content {
          max-width: 700px;
        }

        .testimonial-subtitle {
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

        .testimonial-title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw, 3.8rem);
          font-weight: 700;
          color: var(--text-main);
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
        }

        .testimonial-desc {
          font-family: var(--font-sans);
          font-size: clamp(1.1rem, 2vw, 1.25rem);
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* Navigation Arrows */
        .slider-controls {
          display: flex;
          gap: 16px;
        }

        .arrow-btn {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 2px solid var(--text-main);
          color: var(--text-main);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 4px 4px 0 var(--text-main);
          transition: all 0.2s ease;
        }

        .arrow-btn:hover {
          transform: translateY(-2px);
          box-shadow: 6px 6px 0 var(--accent);
          border-color: var(--accent);
          color: var(--accent);
        }

        .arrow-btn:active {
          transform: translateY(2px);
          box-shadow: 2px 2px 0 var(--accent);
        }

        /* The Horizontal Scrolling Track */
        .testimonial-track {
          display: flex;
          gap: 32px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          padding-bottom: 40px; /* Space for the card hover shadows */
          padding-top: 10px;
          
          /* Hide Scrollbar */
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        
        .testimonial-track::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }

        /* The Straight Carousel Card */
        .review-card {
          background: #FFFFFF;
          border: 2px solid var(--text-main);
          border-radius: 20px;
          padding: 40px 32px;
          box-shadow: 6px 6px 0 var(--text-main);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          
          /* Force cards to stay side-by-side */
          flex: 0 0 100%;
          max-width: 100%;
          scroll-snap-align: start;
        }

        @media (min-width: 768px) {
          .review-card {
            flex: 0 0 calc(50% - 16px);
            max-width: calc(50% - 16px);
          }
        }

        @media (min-width: 1024px) {
          .review-card {
            flex: 0 0 380px;
            max-width: 380px;
          }
        }

        .review-card:hover {
          border-color: var(--accent);
          box-shadow: 10px 10px 0 var(--accent-dark);
          transform: translateY(-8px);
        }

        /* Top row of card (Avatar + Info) */
        .card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
          width: 100%;
        }

        .avatar-wrapper {
          width: 64px;
          height: 64px;
          background: var(--bone-100);
          border: 2px solid var(--text-main);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .avatar-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .user-info {
          display: flex;
          flex-direction: column;
        }

        .user-name {
          font-family: var(--font-sans);
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .user-role {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          color: var(--accent);
          font-weight: 700;
        }

        .stars {
          display: flex;
          gap: 4px;
          margin-bottom: 16px;
        }

        .star-icon {
          width: 18px;
          height: 18px;
          color: var(--star-color);
          fill: var(--star-color);
        }

        .review-quote {
          font-family: var(--font-sans);
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.6;
          font-style: normal; /* Kept normal for readability in left-align */
        }

      `}</style>

      <section className="testimonial-section" id="testimonials">
        <div className="testimonial-inner">
          
          {/* Top Bar: Header on Left, Arrows on Right */}
          <div className="testimonial-top-bar">
            
            <div className="testimonial-header-content">
              <h2 className="testimonial-title">Built for teachers, loved by teachers.</h2>
              <p className="testimonial-desc">
                Join the growing movement of independent Indian educators who have taken back control of their academies and stopped paying 60% platform taxes.
              </p>
            </div>

            {/* Left/Right Click Arrows */}
            <div className="slider-controls">
              <button className="arrow-btn" onClick={() => scroll('left')} aria-label="Previous review">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              </button>
              <button className="arrow-btn" onClick={() => scroll('right')} aria-label="Next review">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>

          </div>

          {/* Horizontal Scrolling Track */}
          <div className="testimonial-track" ref={scrollRef}>
            
            {/* Card 1 */}
            <div className="review-card">
              <div className="card-header">
                <div className="avatar-wrapper">
                  <img src="https://i.pravatar.cc/150?img=68" alt="Rahul S." />
                </div>
                <div className="user-info">
                  <h3 className="user-name">Rahul S.</h3>
                  <span className="user-role">Math Educator</span>
                </div>
              </div>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="star-icon" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                ))}
              </div>
              <p className="review-quote">
                "I was losing 60% of my revenue to Udemy, and couldn't even email my own students. Setting up StackConnect took 45 minutes. Now, Razorpay handles my sales, and I keep 100% of my earnings."
              </p>
            </div>

            {/* Card 2 */}
            <div className="review-card">
              <div className="card-header">
                <div className="avatar-wrapper">
                  <img src="https://i.pravatar.cc/150?img=47" alt="Priya Desai" />
                </div>
                <div className="user-info">
                  <h3 className="user-name">Priya Desai</h3>
                  <span className="user-role">Coding Bootcamp Founder</span>
                </div>
              </div>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="star-icon" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                ))}
              </div>
              <p className="review-quote">
                "The Live-to-Course auto-record is pure magic. I used to spend hours downloading Zoom videos and uploading them to Drive. Now, I hit 'end call' and it's instantly saved to my course library."
              </p>
            </div>

            {/* Card 3 */}
            <div className="review-card">
              <div className="card-header">
                <div className="avatar-wrapper">
                  <img src="https://i.pravatar.cc/150?img=11" alt="Amit Patel" />
                </div>
                <div className="user-info">
                  <h3 className="user-name">Amit Patel</h3>
                  <span className="user-role">Language Coach</span>
                </div>
              </div>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="star-icon" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                ))}
              </div>
              <p className="review-quote">
                "I am completely non-technical. I thought I would need to hire a developer for ₹50k to build a website. StackConnect gave me a drag-and-drop builder, and my students say it looks like Netflix."
              </p>
            </div>

            {/* Card 4 (Added so the scroll actually works perfectly!) */}
            <div className="review-card">
              <div className="card-header">
                <div className="avatar-wrapper">
                  <img src="https://i.pravatar.cc/150?img=44" alt="Neha Sharma" />
                </div>
                <div className="user-info">
                  <h3 className="user-name">Neha Sharma</h3>
                  <span className="user-role">SSC Prep Institute</span>
                </div>
              </div>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="star-icon" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                ))}
              </div>
              <p className="review-quote">
                "Managing WhatsApp links and tracking payments manually was a nightmare. Moving my institute to StackConnect unified everything. My students love the mobile player and the automated certificates."
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}