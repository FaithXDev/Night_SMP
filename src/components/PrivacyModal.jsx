export default function PrivacyModal({ open, onClose }) {
    if (!open) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal rules-modal"
                onClick={(e) => e.stopPropagation()}
                id="privacy-modal"
            >
                <button className="modal__close" onClick={onClose}>✕</button>

                <div className="rules-modal__header">
                    <div className="rules-modal__icon">🔒</div>
                    <h2 className="rules-modal__title">Privacy Policy</h2>
                    <p className="rules-modal__subtitle">
                        Last updated: February 2026. Your privacy matters to us. Here's how we handle your data.
                    </p>
                </div>

                <div className="rules-modal__content">
                    <div className="rules-modal__section">
                        <h3 className="rules-modal__section-title">
                            <span className="rules-modal__section-icon">📋</span>
                            Information We Collect
                        </h3>
                        <ul className="rules-modal__list">
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">1</span>
                                <span>Your Minecraft username and UUID when you connect to the server.</span>
                            </li>
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">2</span>
                                <span>Your IP address for security, anti-cheat, and ban enforcement purposes.</span>
                            </li>
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">3</span>
                                <span>Purchase and transaction records when you buy from the Night Store.</span>
                            </li>
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">4</span>
                                <span>Discord account information if you link your account or open support tickets.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="rules-modal__section">
                        <h3 className="rules-modal__section-title">
                            <span className="rules-modal__section-icon">🛡️</span>
                            How We Use Your Data
                        </h3>
                        <ul className="rules-modal__list">
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">1</span>
                                <span>To deliver purchased items and manage your account on the server.</span>
                            </li>
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">2</span>
                                <span>To enforce server rules, detect cheating, and prevent abuse.</span>
                            </li>
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">3</span>
                                <span>To provide customer support and resolve disputes.</span>
                            </li>
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">4</span>
                                <span>We never sell, trade, or share your personal data with third parties for marketing.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="rules-modal__section">
                        <h3 className="rules-modal__section-title">
                            <span className="rules-modal__section-icon">🗑️</span>
                            Data Retention & Deletion
                        </h3>
                        <ul className="rules-modal__list">
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">1</span>
                                <span>Player data is retained for as long as your account remains active on the server.</span>
                            </li>
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">2</span>
                                <span>You may request deletion of your personal data by opening a ticket on our Discord.</span>
                            </li>
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">3</span>
                                <span>Transaction records may be retained for legal and accounting purposes even after data deletion.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="rules-modal__section">
                        <h3 className="rules-modal__section-title">
                            <span className="rules-modal__section-icon">🍪</span>
                            Cookies & Analytics
                        </h3>
                        <ul className="rules-modal__list">
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">1</span>
                                <span>This website may use cookies and local storage for session management and user preferences.</span>
                            </li>
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">2</span>
                                <span>We do not use third-party tracking or advertising cookies.</span>
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
                        <span>For data-related requests, contact us through Discord support tickets.</span>
                    </div>
                    <button className="rules-modal__accept-btn" onClick={onClose}>
                        I Understand
                    </button>
                </div>
            </div>
        </div>
    );
}
