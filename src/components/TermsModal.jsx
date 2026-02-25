export default function TermsModal({ open, onClose }) {
    if (!open) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal rules-modal"
                onClick={(e) => e.stopPropagation()}
                id="terms-modal"
            >
                <button className="modal__close" onClick={onClose}>✕</button>

                <div className="rules-modal__header">
                    <div className="rules-modal__icon">📄</div>
                    <h2 className="rules-modal__title">Terms of Service</h2>
                    <p className="rules-modal__subtitle">
                        Last updated: February 2026. By using Night SMP or the Night Store, you agree to the following terms.
                    </p>
                </div>

                <div className="rules-modal__content">
                    <div className="rules-modal__section">
                        <h3 className="rules-modal__section-title">
                            <span className="rules-modal__section-icon">📌</span>
                            General Terms
                        </h3>
                        <ul className="rules-modal__list">
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">1</span>
                                <span>Night SMP is a Minecraft server and is not affiliated with or endorsed by Mojang Studios or Microsoft.</span>
                            </li>
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">2</span>
                                <span>You must be at least 13 years of age to use our services. If under 18, parental consent is required for purchases.</span>
                            </li>
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">3</span>
                                <span>We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice.</span>
                            </li>
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">4</span>
                                <span>Your access to the server and store can be revoked at any time if you violate our rules or terms.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="rules-modal__section">
                        <h3 className="rules-modal__section-title">
                            <span className="rules-modal__section-icon">💳</span>
                            Purchases & Payments
                        </h3>
                        <ul className="rules-modal__list">
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">1</span>
                                <span>All purchases are considered donations and are non-refundable. You are paying for digital virtual goods only.</span>
                            </li>
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">2</span>
                                <span>Initiating a chargeback or payment dispute will result in an immediate and permanent ban.</span>
                            </li>
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">3</span>
                                <span>Prices are listed in INR (₹) and are subject to change without notice.</span>
                            </li>
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">4</span>
                                <span>We are not responsible for purchases made with incorrect usernames. Always verify before buying.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="rules-modal__section">
                        <h3 className="rules-modal__section-title">
                            <span className="rules-modal__section-icon">⚖️</span>
                            Liability & Disclaimers
                        </h3>
                        <ul className="rules-modal__list">
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">1</span>
                                <span>Night SMP is provided "as is" without warranty. We do not guarantee uninterrupted or error-free service.</span>
                            </li>
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">2</span>
                                <span>We are not liable for any data loss, in-game item loss, or damages arising from server issues.</span>
                            </li>
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">3</span>
                                <span>Virtual items hold no real-world monetary value and cannot be exchanged for cash.</span>
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
                        <span>These terms may be updated at any time. Continued use of our services constitutes acceptance.</span>
                    </div>
                    <button className="rules-modal__accept-btn" onClick={onClose}>
                        I Agree
                    </button>
                </div>
            </div>
        </div>
    );
}
