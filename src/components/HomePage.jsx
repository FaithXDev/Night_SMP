import { useState, useEffect, useRef } from 'react';

import ranksIcon from '../assets/HomeIcons/ranks.png';
import kitsIcon from '../assets/HomeIcons/kits.png';
import cratesIcon from '../assets/HomeIcons/crates.png';
import coinsIcon from '../assets/HomeIcons/coins.png';

const categories = [
    {
        id: 'rank',
        // name: 'Ranks',
        image: ranksIcon,
        description: 'Unlock exclusive perks, commands, and cosmetics with premium server ranks.',
    },
    {
        id: 'kit',
        // name: 'Kits',
        image: kitsIcon,
        description: 'Start strong with powerful loadouts — tools, armor, food, and more.',
    },
    {
        id: 'crate',
        // name: 'Crates',
        image: cratesIcon,
        description: 'Try your luck with mystery crates filled with rare loot and rewards.',
    },
    {
        id: 'coin',
        // name: 'Coins',
        image: coinsIcon,
        description: 'Purchase in-game currency for use in the server store.',
    },
];

// Generate random particles for the hero background
function generateParticles(count) {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 8 + 6,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.4 + 0.1,
    }));
}

export default function HomePage({ onSelectCategory, onToast }) {
    const [copied, setCopied] = useState(false);
    const [particles] = useState(() => generateParticles(30));
    const heroRef = useRef(null);

    const handleCopy = () => {
        navigator.clipboard.writeText('NIGHTSMP.hexonode.fun:25927');
        setCopied(true);
        onToast?.('IP Copied Successfully');
        setTimeout(() => setCopied(false), 2000);
    };

    // Parallax mouse movement effect on hero
    useEffect(() => {
        const hero = heroRef.current;
        if (!hero) return;

        const handleMouseMove = (e) => {
            const rect = hero.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            hero.style.setProperty('--mouse-x', x.toFixed(3));
            hero.style.setProperty('--mouse-y', y.toFixed(3));
        };

        hero.addEventListener('mousemove', handleMouseMove);
        return () => hero.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <main className="home">
            {/* ===== HERO SECTION ===== */}
            <section className="hero-section" ref={heroRef} id="hero">
                {/* Animated background layers */}
                <div className="hero-section__bg">
                    <div className="hero-section__gradient-orb hero-section__gradient-orb--1" />
                    <div className="hero-section__gradient-orb hero-section__gradient-orb--2" />
                    <div className="hero-section__gradient-orb hero-section__gradient-orb--3" />
                    <div className="hero-section__grid-overlay" />
                </div>

                {/* Floating particles */}
                <div className="hero-section__particles">
                    {particles.map((p) => (
                        <span
                            key={p.id}
                            className="hero-section__particle"
                            style={{
                                left: `${p.x}%`,
                                top: `${p.y}%`,
                                width: `${p.size}px`,
                                height: `${p.size}px`,
                                animationDuration: `${p.duration}s`,
                                animationDelay: `${p.delay}s`,
                                opacity: p.opacity,
                            }}
                        />
                    ))}
                </div>

                {/* Hero content */}
                <div className="hero-section__content">
                    {/* Badge */}
                    <div className="hero-section__badge">
                        <span className="hero-section__badge-pulse" />
                        <span>OFFICIAL STORE</span>
                    </div>

                    {/* Title */}
                    <h1 className="hero-section__title">
                        <span className="hero-section__title-line">
                            <span className="hero-section__title-white">Welcome to</span>
                        </span>
                        <span className="hero-section__title-line">
                            <span className="hero-section__title-glow">Night SMP</span>
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="hero-section__subtitle">
                        Dominate the battlefield with exclusive ranks, powerful kits,
                        rare crates, and in-game coins. Your legacy starts here.
                    </p>

                    {/* CTA Buttons */}
                    <div className="hero-section__actions">
                        <button
                            className="hero-section__cta hero-section__cta--primary"
                            onClick={() => {
                                document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                            Browse Store
                        </button>
                        <a
                            href="https://discord.gg/uuTE4dYenB"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero-section__cta hero-section__cta--secondary"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                            </svg>
                            Join Discord
                        </a>
                    </div>

                    {/* Server IP */}
                    <div className="hero-section__ip-card" onClick={handleCopy}>
                        <div className="hero-section__ip-status">
                            <span className="hero-section__ip-dot" />
                            <span className="hero-section__ip-status-text">ONLINE</span>
                        </div>
                        <div className="hero-section__ip-main">
                            <span className="hero-section__ip-label">SERVER IP</span>
                            <span className="hero-section__ip-address">NIGHTSMP.hexonode.fun</span>
                        </div>
                        <div className="hero-section__ip-copy-btn">
                            {copied ? (
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4caf50" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            ) : (
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                </svg>
                            )}
                            <span>{copied ? 'Copied!' : 'Copy'}</span>
                        </div>
                    </div>
                </div>

                {/* Bottom fade */}
                <div className="hero-section__bottom-fade" />
            </section>

            {/* ===== CATEGORIES SECTION ===== */}
            <section className="home__categories" id="categories">
                <div className="home__categories-header">
                    <h2 className="home__categories-title">Browse Categories</h2>
                    <p className="home__categories-subtitle">
                        Choose a category below to explore our products
                    </p>
                </div>

                <div className="home__grid">
                    {categories.map((cat, i) => (
                        <button
                            key={cat.id}
                            className="category-card"
                            onClick={() => onSelectCategory(cat.id)}
                            id={`category-${cat.id}`}
                            style={{ animationDelay: `${i * 100}ms` }}
                        >
                            <div className="category-card__glow" />
                            <div className="category-card__icon">
                                <img src={cat.image} alt={cat.name} className="category-card__icon-img" />
                            </div>
                            <span className="category-card__name">{cat.name}</span>
                            <span className="category-card__desc">{cat.description}</span>
                        </button>
                    ))}
                </div>
            </section>

            {/* ===== INFO SECTIONS ===== */}
            <div className="home__content">
                <section className="home__section">
                    <h2 className="home__section-title">Welcome</h2>
                    <p className="home__section-text">
                        Welcome to the official Night Store! This is the place for you to enhance your
                        server experience. We offer ranks, kits, crates, coins, and more. You can choose
                        the product category in the navigation at the top or by clicking on the category
                        cards above.
                    </p>
                    <p className="home__section-text">
                        All purchases are handled via Discord tickets. Open a ticket and mention the product
                        you'd like to buy.
                    </p>
                </section>

                <section className="home__section">
                    <h2 className="home__section-title">About Night SMP</h2>
                    <p className="home__section-text">
                        Night SMP is a premium Minecraft Lifesteal server featuring custom enchants,
                        competitive PvP, and a thriving community. Join thousands of players and dominate
                        the server with exclusive gear and ranks.
                    </p>
                </section>

                <section className="home__section">
                    <h2 className="home__section-title">Need help?</h2>
                    <p className="home__section-text">
                        If you have any questions or issues related to payments,{' '}
                        <a href="https://discord.gg/uuTE4dYenB" target="_blank" rel="noopener noreferrer" className="home__link">
                            open a ticket in our Discord
                        </a>
                        , and we will reply as fast as possible.
                    </p>
                </section>
            </div>
        </main>
    );
}
