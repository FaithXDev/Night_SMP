export default function ForumsModal({ open, onClose }) {
    if (!open) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal rules-modal"
                onClick={(e) => e.stopPropagation()}
                id="forums-modal"
            >
                <button className="modal__close" onClick={onClose}>✕</button>

                <div className="rules-modal__header">
                    <div className="rules-modal__icon">💬</div>
                    <h2 className="rules-modal__title">Community Forums</h2>
                    <p className="rules-modal__subtitle">
                        Connect with the Night SMP community! Here's where you can find us and get involved.
                    </p>
                </div>

                <div className="rules-modal__content">
                    <div className="rules-modal__section">
                        <h3 className="rules-modal__section-title">
                            <span className="rules-modal__section-icon">🎮</span>
                            Discord Server
                        </h3>
                        <ul className="rules-modal__list">
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">💬</span>
                                <span>Our Discord is the main hub for all community discussions, announcements, and events.</span>
                            </li>
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">🎫</span>
                                <span>Open support tickets for purchase issues, bug reports, or ban appeals.</span>
                            </li>
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">📢</span>
                                <span>Stay updated with server news, seasonal events, and exclusive giveaways.</span>
                            </li>
                        </ul>
                        <a
                            href="https://discord.gg/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rules-modal__action-btn"
                            id="forums-discord-btn"
                        >
                            <svg width="16" height="12" viewBox="0 0 71 55" fill="currentColor">
                                <path d="M60.1 4.9A58.5 58.5 0 0 0 45.4.2a.2.2 0 0 0-.2.1 40.8 40.8 0 0 0-1.8 3.7 54 54 0 0 0-16.2 0A37.4 37.4 0 0 0 25.4.3a.2.2 0 0 0-.2-.1A58.4 58.4 0 0 0 10.5 4.9a.2.2 0 0 0-.1.1C1.5 18.7-.9 32.2.3 45.5v.2a58.9 58.9 0 0 0 17.7 9a.2.2 0 0 0 .3-.1 42.1 42.1 0 0 0 3.6-5.9.2.2 0 0 0-.1-.3 38.8 38.8 0 0 1-5.5-2.6.2.2 0 0 1 0-.4l1.1-.9a.2.2 0 0 1 .2 0 42 42 0 0 0 35.7 0 .2.2 0 0 1 .2 0l1.1.9a.2.2 0 0 1 0 .3 36.4 36.4 0 0 1-5.5 2.7.2.2 0 0 0-.1.3 47.2 47.2 0 0 0 3.6 5.9.2.2 0 0 0 .3.1A58.7 58.7 0 0 0 70.5 45.7v-.2c1.4-15-2.3-28.1-9.8-39.7a.2.2 0 0 0-.1 0ZM23.7 37.3c-3.4 0-6.3-3.2-6.3-7s2.8-7 6.3-7 6.4 3.1 6.3 7-2.8 7-6.3 7Zm23.2 0c-3.4 0-6.3-3.2-6.3-7s2.8-7 6.3-7 6.4 3.1 6.3 7-2.8 7-6.3 7Z" />
                            </svg>
                            Join Our Discord
                        </a>
                    </div>

                    <div className="rules-modal__section">
                        <h3 className="rules-modal__section-title">
                            <span className="rules-modal__section-icon">📝</span>
                            Community Channels
                        </h3>
                        <ul className="rules-modal__list">
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">#</span>
                                <span><strong>general</strong> — Hang out and chat with other players about anything.</span>
                            </li>
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">#</span>
                                <span><strong>suggestions</strong> — Share your ideas to improve the server and store.</span>
                            </li>
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">#</span>
                                <span><strong>bug-reports</strong> — Found a bug? Report it here and help us fix it.</span>
                            </li>
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">#</span>
                                <span><strong>media</strong> — Share your best clips, screenshots, and builds.</span>
                            </li>
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">#</span>
                                <span><strong>looking-for-team</strong> — Find teammates for alliances and raids.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="rules-modal__section">
                        <h3 className="rules-modal__section-title">
                            <span className="rules-modal__section-icon">🏆</span>
                            Events & Giveaways
                        </h3>
                        <ul className="rules-modal__list">
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">🎁</span>
                                <span>Weekly giveaways for ranks, kits, and crate keys — join Discord to participate!</span>
                            </li>
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">⚔️</span>
                                <span>Seasonal PvP tournaments with exclusive prizes for top players.</span>
                            </li>
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">🏗️</span>
                                <span>Community build contests with in-game rewards and store credits.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="rules-modal__footer">
                    <div className="rules-modal__note">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 16v-4" />
                            <path d="M12 8h.01" />
                        </svg>
                        <span>Discord is our primary platform for all community interaction and support.</span>
                    </div>
                    <button className="rules-modal__accept-btn" onClick={onClose}>
                        Got It
                    </button>
                </div>
            </div>
        </div>
    );
}
