import { useState, useEffect } from 'react';
import './Navbar.css';

const navCategories = [
    { id: 'rank', label: 'Ranks' },
    { id: 'kit', label: 'Kits' },
    { id: 'crate', label: 'Crates' },
    { id: 'coin', label: 'Coins' },
];

export default function Navbar({ currentPage, onNavigateHome, onNavigateCategory }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [onlineCount] = useState(() => {
        const SESSION_MS = 20 * 60 * 1000; // 20 minutes
        try {
            const stored = JSON.parse(localStorage.getItem('nightstore_online'));
            if (stored && Date.now() - stored.ts < SESSION_MS) {
                return stored.count;
            }
        } catch { }
        const count = Math.floor(Math.random() * 380) + 120;
        localStorage.setItem('nightstore_online', JSON.stringify({ count, ts: Date.now() }));
        return count;
    });

    return (
        <nav className="navbar" id="navbar">
            <a href="#" className="navbar__logo" onClick={(e) => { e.preventDefault(); onNavigateHome?.(); }}>
                <span className="navbar__logo-icon">🌙</span>
                <span className="navbar__logo-text"><span className="navbar__logo-night">NIGHT</span> STORE</span>
            </a>

            <button
                className={`navbar__menu-btn ${isMenuOpen ? 'navbar__menu-btn--open' : ''}`}
                id="menu-toggle"
                aria-label="Menu"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                ) : (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                )}
            </button>

            <div className={`navbar__links ${isMenuOpen ? 'navbar__links--open' : ''}`}>
                {navCategories.map((cat) => (
                    <button
                        key={cat.id}
                        className={`navbar__link${currentPage?.type === 'category' && currentPage.category === cat.id ? ' navbar__link--active' : ''}`}
                        onClick={() => {
                            onNavigateCategory?.(cat.id);
                            setIsMenuOpen(false);
                        }}
                        id={`nav-${cat.id}`}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            <div className="navbar__actions">
                <div className="navbar__online" id="online-count">
                    <span className="navbar__online-dot" />
                    <span className="navbar__online-text">{onlineCount} Online</span>
                </div>
                <a
                    href="https://discord.gg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="navbar__discord"
                    id="join-discord-btn"
                >
                    <svg width="16" height="12" viewBox="0 0 71 55" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M60.1 4.9A58.5 58.5 0 0 0 45.4.2a.2.2 0 0 0-.2.1 40.8 40.8 0 0 0-1.8 3.7 54 54 0 0 0-16.2 0A37.4 37.4 0 0 0 25.4.3a.2.2 0 0 0-.2-.1A58.4 58.4 0 0 0 10.5 4.9a.2.2 0 0 0-.1.1C1.5 18.7-.9 32.2.3 45.5v.2a58.9 58.9 0 0 0 17.7 9a.2.2 0 0 0 .3-.1 42.1 42.1 0 0 0 3.6-5.9.2.2 0 0 0-.1-.3 38.8 38.8 0 0 1-5.5-2.6.2.2 0 0 1 0-.4l1.1-.9a.2.2 0 0 1 .2 0 42 42 0 0 0 35.7 0 .2.2 0 0 1 .2 0l1.1.9a.2.2 0 0 1 0 .3 36.4 36.4 0 0 1-5.5 2.7.2.2 0 0 0-.1.3 47.2 47.2 0 0 0 3.6 5.9.2.2 0 0 0 .3.1A58.7 58.7 0 0 0 70.5 45.7v-.2c1.4-15-2.3-28.1-9.8-39.7a.2.2 0 0 0-.1 0ZM23.7 37.3c-3.4 0-6.3-3.2-6.3-7s2.8-7 6.3-7 6.4 3.1 6.3 7-2.8 7-6.3 7Zm23.2 0c-3.4 0-6.3-3.2-6.3-7s2.8-7 6.3-7 6.4 3.1 6.3 7-2.8 7-6.3 7Z" /></svg>
                    Discord
                </a>
            </div>
        </nav>
    );
}
