"use client";

import { useState, useEffect, useRef } from "react";

// ─── Nav data ───────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  {
    label: "Product",
    children: [
      {
        label: "Video Courses",
        desc: "Host, sell & protect your course content",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" /><polyline points="8 21 12 17 16 21" /><line x1="12" y1="17" x2="12" y2="3" />
          </svg>
        ),
        href: "#courses",
      },
      {
        label: "Live Classes",
        desc: "Stream live, auto-save to your library",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="2" /><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
          </svg>
        ),
        href: "#live",
        badge: "New",
      },
      {
        label: "Your Website",
        desc: "Custom domain storefront, zero code",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        ),
        href: "#website",
      },
      {
        label: "AI Features",
        desc: "Transcription, quizzes & course assistant",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10" /><path d="M12 6v6l4 2" /><path d="M22 6l-3-3-3 3" /><path d="M19 3v6" />
          </svg>
        ),
        href: "#ai",
        badge: "Beta",
      },
    ],
  },
  {
    label: "Solutions",
    children: [
      {
        label: "Solo Teachers",
        desc: "Your brand, your students, your price",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
          </svg>
        ),
        href: "#solo",
      },
      {
        label: "Coaching Institutes",
        desc: "White-label platform for 100+ students",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        ),
        href: "#institutes",
      },
    ],
  },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
];

// ─── Logo Text Only ──────────────────────────────────────────────────────────
function Logo() {
  return (
    <a href="/" className="navbar-logo" aria-label="StackConnect">
      <span className="navbar-logo-text">StackConnect</span>
    </a>
  );
}

// ─── Chevron ─────────────────────────────────────────────────────────────────
function Chevron({ open }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 0.2s ease-in-out",
        flexShrink: 0,
      }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

// ─── Desktop Dropdown ────────────────────────────────────────────────────────
function DesktopDropdown({ item, isOpen, onMouseEnter, onMouseLeave }) {
  return (
    <div
      className="nav-item-wrapper"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        className={`nav-link ${isOpen ? "nav-link--active" : ""}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {item.label}
        <Chevron open={isOpen} />
      </button>

      {/* Dropdown panel */}
      <div
        className={`dropdown-panel ${isOpen ? "dropdown-panel--open" : ""}`}
        role="menu"
      >
        <div className="dropdown-inner">
          {item.children.map((child) => (
            <a
              key={child.label}
              href={child.href}
              className="dropdown-item"
              role="menuitem"
            >
              <span className="dropdown-item-icon">{child.icon}</span>
              <span className="dropdown-item-body">
                <span className="dropdown-item-label">
                  {child.label}
                  {child.badge && (
                    <span className={`dropdown-badge dropdown-badge--${child.badge.toLowerCase()}`}>
                      {child.badge}
                    </span>
                  )}
                </span>
                <span className="dropdown-item-desc">{child.desc}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Mobile accordion item ───────────────────────────────────────────────────
function MobileAccordion({ item, isOpen, onToggle }) {
  return (
    <div className="mob-section">
      <button className="mob-trigger" onClick={onToggle} aria-expanded={isOpen}>
        {item.label}
        <Chevron open={isOpen} />
      </button>
      <div className={`mob-children ${isOpen ? "mob-children--open" : ""}`}>
        {item.children.map((child) => (
          <a key={child.label} href={child.href} className="mob-child-link">
            <span className="mob-child-icon">{child.icon}</span>
            <span className="mob-child-body">
              <span className="mob-child-label">
                {child.label}
                {child.badge && (
                  <span className={`dropdown-badge dropdown-badge--${child.badge.toLowerCase()}`}>
                    {child.badge}
                  </span>
                )}
              </span>
              <span className="mob-child-desc">{child.desc}</span>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

// ─── Main Navbar ─────────────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleMouseEnter = (label) => {
    clearTimeout(timerRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  return (
    <>
      {/* ── Scoped styles using your premium variables ────────────────── */}
      <style>{`
        :root {
          --nav-h: 72px;
          --font-sans: 'Instrument Sans', system-ui, sans-serif;
          --font-display: 'Playfair Display', Georgia, serif;
          
          /* Pulling directly from your Tallow palette logic */
          --bg-light: #FAF9F5; 
          --text-main: #2B2822; 
          --text-muted: #625C53;
          --border-color: #D5CFBF;
          --accent: #D44527; 
          --accent-dark: #912611;
        }

        /* ════════════════ NAVBAR SHELL ════════════════ */
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 200;
          height: var(--nav-h);
          display: flex;
          align-items: center;
          background: var(--bg-light);
        }
        .navbar--scrolled {
          background: #FDFCFA;
        }

        .navbar-inner {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          align-items: center;
        }

        /* ════════════════ LOGO ════════════════ */
        .navbar-logo {
          text-decoration: none;
          margin-right: 48px;
          flex-shrink: 0;
        }
        .navbar-logo-text {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 600;
          letter-spacing: -0.02em;
          color: var(--text-main);
        }

        /* ════════════════ DESKTOP NAV ════════════════ */
        .navbar-links {
          display: flex;
          align-items: center;
          gap: 4px;
          flex: 1;
        }
        .nav-item-wrapper {
          position: relative;
        }
        .nav-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 8px;
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-muted);
          background: transparent;
          border: 2px solid transparent;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.1s ease;
        }
        .nav-link:hover,
        .nav-link--active {
          color: var(--text-main);
          background: #E6E1D7;
          border: 2px solid var(--border-color);
        }

        /* ════════════════ DROPDOWN PANEL (3D Solid Shadow) ════════════════ */
        .dropdown-panel {
          position: absolute;
          top: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%) translateY(-10px);
          min-width: 320px;
          background: #FDFCFA;
          border: 2px solid var(--text-main);
          border-radius: 12px;
          /* CRISP 3D SHADOW INSTEAD OF BLUR */
          box-shadow: 4px 4px 0px var(--text-main);
          padding: 8px;
          opacity: 0;
          pointer-events: none;
          transition: all 0.2s cubic-bezier(0.16,1,0.3,1);
          z-index: 300;
        }
        .dropdown-panel--open {
          opacity: 1;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }
        .dropdown-inner {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .dropdown-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px;
          border-radius: 8px;
          border: 2px solid transparent;
          text-decoration: none;
          transition: all 0.1s;
        }
        .dropdown-item:hover {
          background: #EDE9E1;
          border: 2px solid var(--text-main);
        }
        .dropdown-item-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: #FDFCFA;
          border: 2px solid var(--border-color);
          color: var(--text-main);
          flex-shrink: 0;
        }
        .dropdown-item:hover .dropdown-item-icon {
          background: var(--accent);
          color: #FFF;
          border-color: var(--accent-dark);
        }
        .dropdown-item-body {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .dropdown-item-label {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-main);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .dropdown-item-desc {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.4;
        }
        
        .dropdown-badge {
          display: inline-flex;
          padding: 2px 8px;
          border-radius: 6px;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          border: 2px solid;
        }
        .dropdown-badge--new {
          background: #FFEDE8;
          color: #D44527;
          border-color: #D44527;
        }
        .dropdown-badge--beta {
          background: #F4F7FB;
          color: #3060B4;
          border-color: #3060B4;
        }

        /* ════════════════ 3D CTA BUTTONS ════════════════ */
        .navbar-cta {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-left: auto;
          flex-shrink: 0;
        }
        .cta-signin {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-main);
          text-decoration: none;
          padding: 8px 12px;
        }
        .cta-signin:hover {
          color: var(--accent);
        }
        
        .cta-start {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 8px;
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 700;
          color: #FFF;
          background: var(--accent);
          border: 2px solid var(--accent-dark);
          /* SOLID 3D PRESS SHADOW */
          box-shadow: 3px 3px 0px var(--accent-dark);
          text-decoration: none;
          cursor: pointer;
          transform: translate(0px, 0px);
          transition: transform 0.1s, box-shadow 0.1s;
        }
        .cta-start:hover {
          transform: translate(-1px, -1px);
          box-shadow: 4px 4px 0px var(--accent-dark);
        }
        .cta-start:active {
          transform: translate(3px, 3px);
          box-shadow: 0px 0px 0px var(--accent-dark);
        }

        /* ════════════════ HAMBURGER (Fixed to Right) ════════════════ */
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 48px;
          height: 48px;
          border-radius: 8px;
          border: 2px solid var(--text-main);
          background: #FDFCFA;
          /* Push to far right on mobile */
          margin-left: auto;
          /* 3D solid effect */
          box-shadow: 3px 3px 0px var(--text-main);
          cursor: pointer;
          flex-shrink: 0;
          transform: translate(0px, 0px);
          transition: transform 0.1s, box-shadow 0.1s;
        }
        .hamburger:active {
          transform: translate(3px, 3px);
          box-shadow: 0px 0px 0px var(--text-main);
        }
        .hamburger-bar {
          width: 22px;
          height: 2px;
          background: var(--text-main);
          transition: all 0.2s ease-in-out;
          transform-origin: center;
        }
        .hamburger--open .hamburger-bar:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger--open .hamburger-bar:nth-child(2) { opacity: 0; }
        .hamburger--open .hamburger-bar:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* ════════════════ MOBILE DRAWER ════════════════ */
        .mobile-overlay {
          position: fixed;
          inset: 0;
          z-index: 190;
          background: rgba(20, 18, 16, 0.6);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s;
        }
        .mobile-overlay--open {
          opacity: 1;
          pointer-events: auto;
        }
        .mobile-drawer {
          position: fixed;
          top: 0; right: 0; bottom: 0;
          z-index: 195;
          width: min(340px, 85vw);
          background: #FDFCFA;
          border-left: 2px solid var(--text-main);
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.3s cubic-bezier(0.16,1,0.3,1);
          overflow: hidden;
        }
        .mobile-drawer--open {
          transform: translateX(0);
        }

        .mob-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1.5rem;
          height: var(--nav-h);
          border-bottom: 2px solid var(--text-main);
        }
        .mob-close {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          border: 2px solid var(--text-main);
          background: #FDFCFA;
          box-shadow: 2px 2px 0px var(--text-main);
          cursor: pointer;
          color: var(--text-main);
          transition: transform 0.1s, box-shadow 0.1s;
        }
        .mob-close:active {
          transform: translate(2px, 2px);
          box-shadow: 0px 0px 0px var(--text-main);
        }

        .mob-body {
          flex: 1;
          overflow-y: auto;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .mob-trigger {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 14px 16px;
          border-radius: 8px;
          border: 2px solid transparent;
          background: #EDE9E1;
          font-family: var(--font-sans);
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-main);
          cursor: pointer;
          text-align: left;
        }
        .mob-children {
          display: none;
          flex-direction: column;
          gap: 6px;
          padding: 8px 0 12px 12px;
          border-left: 2px solid var(--border-color);
          margin-left: 12px;
        }
        .mob-children--open { display: flex; }
        
        .mob-child-link {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px;
          border-radius: 8px;
          border: 2px solid transparent;
          text-decoration: none;
        }
        .mob-child-link:hover { border-color: var(--text-main); }
        .mob-child-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 6px;
          background: #FDFCFA;
          border: 2px solid var(--border-color);
          color: var(--text-main);
          flex-shrink: 0;
        }
        .mob-child-label {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-main);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .mob-child-desc {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .mob-plain-link {
          display: block;
          padding: 14px 16px;
          border-radius: 8px;
          background: #EDE9E1;
          font-family: var(--font-sans);
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-main);
          text-decoration: none;
          border: 2px solid transparent;
        }
        .mob-plain-link:hover { border-color: var(--text-main); }

        .mob-footer {
          padding: 1.5rem;
          border-top: 2px solid var(--text-main);
          display: flex;
          flex-direction: column;
          gap: 12px;
          background: #EDE9E1;
        }
        
        .mob-signin {
          display: block;
          text-align: center;
          padding: 12px;
          border-radius: 8px;
          border: 2px solid var(--text-main);
          background: #FDFCFA;
          font-family: var(--font-sans);
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-main);
          text-decoration: none;
          box-shadow: 3px 3px 0px var(--text-main);
          transform: translate(0px, 0px);
          transition: transform 0.1s, box-shadow 0.1s;
        }
        .mob-signin:active {
          transform: translate(3px, 3px);
          box-shadow: 0px 0px 0px var(--text-main);
        }

        .mob-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px;
          border-radius: 8px;
          border: 2px solid var(--accent-dark);
          background: var(--accent);
          font-family: var(--font-sans);
          font-size: 1rem;
          font-weight: 700;
          color: #FFF;
          text-decoration: none;
          box-shadow: 3px 3px 0px var(--accent-dark);
          transform: translate(0px, 0px);
          transition: transform 0.1s, box-shadow 0.1s;
        }
        .mob-cta:active {
          transform: translate(3px, 3px);
          box-shadow: 0px 0px 0px var(--accent-dark);
        }

        /* ════════════════ RESPONSIVE ════════════════ */
        @media (max-width: 900px) {
          .navbar-links, .navbar-cta { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>

      {/* ── Navbar bar ──────────────────────────────────────────────── */}
      <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`} role="banner">
        <div className="navbar-inner">
          <Logo />

          {/* Desktop links */}
          <nav className="navbar-links" aria-label="Main navigation">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <DesktopDropdown
                  key={item.label}
                  item={item}
                  isOpen={openDropdown === item.label}
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                />
              ) : (
                <a key={item.label} href={item.href} className="nav-link">
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="navbar-cta">
            <a href="/login" className="cta-signin">Sign in</a>
            <a href="/signup" className="cta-start">
              Get started
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Hamburger (Pushed completely to the right by auto margin) */}
          <button
            className={`hamburger ${mobileOpen ? "hamburger--open" : ""}`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
          </button>
        </div>
      </header>

      {/* ── Mobile overlay ──────────────────────────────────────────── */}
      <div
        className={`mobile-overlay ${mobileOpen ? "mobile-overlay--open" : ""}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* ── Mobile drawer ───────────────────────────────────────────── */}
      <div
        className={`mobile-drawer ${mobileOpen ? "mobile-drawer--open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="mob-header">
          <Logo />
          <button
            className="mob-close"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="mob-body">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <MobileAccordion
                key={item.label}
                item={item}
                isOpen={openMobileSection === item.label}
                onToggle={() =>
                  setOpenMobileSection((v) => (v === item.label ? null : item.label))
                }
              />
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="mob-plain-link"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            )
          )}
        </div>

        <div className="mob-footer">
          <a href="/login" className="mob-signin" onClick={() => setMobileOpen(false)}>
            Sign in
          </a>
          <a href="/signup" className="mob-cta" onClick={() => setMobileOpen(false)}>
            Get started for free
          </a>
        </div>
      </div>
    </>
  );
}