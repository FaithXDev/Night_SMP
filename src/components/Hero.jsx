import { useState } from 'react';
import './Hero.css';

export default function Hero({ onToast }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('amd.anuverse.fun:23456');
        setCopied(true);
        onToast?.('IP Copied to clipboard!');
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="hero" id="hero-section">
            {/* Animated blob backgrounds */}
            <div className="hero__blob hero__blob--1" />
            <div className="hero__blob hero__blob--2" />
            <div className="hero__blob hero__blob--3" />
            <div className="hero__gradient-fade" />

            {/* Season badge */}
            <div className="hero__badge">
                <span className="hero__badge-dot" />
                Season 1 Live Now
            </div>

            {/* Title */}
            <div className="hero__title-wrap">
                <h1 className="hero__title">
                    <span className="hero__title-white">NIGHT</span>
                    <span className="hero__title-gradient">STORE</span>
                </h1>
                <div className="hero__title-glow" />
            </div>

            {/* Subtitle */}
            <p className="hero__subtitle">
                Experience the pinnacle of Minecraft. Exclusive ranks, divine kits,
                and mystery crates waiting to be unlocked.
            </p>

            {/* Server IP card */}
            <div className="hero__server-card" onClick={handleCopy} id="copy-server-btn">
                <div className="hero__server-info">
                    <div className="hero__server-dot" />
                    <div className="hero__server-text">
                        <span className="hero__server-label">Server IP</span>
                        <span className="hero__server-address">amd.anuverse.fun</span>
                    </div>
                </div>
                <div className="hero__server-copy">
                    {copied ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                    )}
                </div>
            </div>

            {/* Down chevron */}
            <div className="hero__chevron">▾</div>
        </section>
    );
}
