export default function RulesModal({ open, onClose }) {
    if (!open) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal rules-modal"
                onClick={(e) => e.stopPropagation()}
                id="rules-modal"
            >
                <button className="modal__close" onClick={onClose}>✕</button>

                <div className="rules-modal__header">
                    <div className="rules-modal__icon">📜</div>
                    <h2 className="rules-modal__title">Server & Store Rules</h2>
                    <p className="rules-modal__subtitle">
                        By playing on Night SMP or purchasing from the store, you agree to follow these rules.
                    </p>
                </div>

                <div className="rules-modal__content">
                    {/* Server Rules */}
                    <div className="rules-modal__section">
                        <h3 className="rules-modal__section-title">
                            <span className="rules-modal__section-icon">⚔️</span>
                            Server Rules
                        </h3>
                        <ul className="rules-modal__list">
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">1</span>
                                <span>No hacking, cheating, or using unfair modifications (e.g. kill aura, x-ray, fly hacks).</span>
                            </li>
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">2</span>
                                <span>No exploiting bugs or glitches. Report them to staff immediately.</span>
                            </li>
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">3</span>
                                <span>No toxicity, harassment, racism, or hate speech in chat.</span>
                            </li>
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">4</span>
                                <span>No spamming, advertising, or promoting other servers.</span>
                            </li>
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">5</span>
                                <span>No teaming in solo modes unless explicitly allowed.</span>
                            </li>
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">6</span>
                                <span>Respect all staff members and their decisions.</span>
                            </li>
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">7</span>
                                <span>No inappropriate skins, usernames, or builds.</span>
                            </li>
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">8</span>
                                <span>AFK farming and macros are not allowed.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Store Rules */}
                    <div className="rules-modal__section">
                        <h3 className="rules-modal__section-title">
                            <span className="rules-modal__section-icon">🛒</span>
                            Store Rules
                        </h3>
                        <ul className="rules-modal__list">
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">1</span>
                                <span>All purchases are final. No refunds will be issued unless required by law.</span>
                            </li>
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">2</span>
                                <span>Chargebacks will result in a permanent ban from the server and store.</span>
                            </li>
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">3</span>
                                <span>Items are delivered to the account specified at purchase. Double-check your username.</span>
                            </li>
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">4</span>
                                <span>Purchased items, ranks, and perks are non-transferable between accounts.</span>
                            </li>
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">5</span>
                                <span>We reserve the right to modify or remove store items at any time.</span>
                            </li>
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">6</span>
                                <span>If you don't receive your items within 10 minutes, open a ticket on Discord.</span>
                            </li>
                            <li className="rules-modal__item">
                                <span className="rules-modal__number">7</span>
                                <span>Abusing store items or perks to break server rules may result in removal without refund.</span>
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
                        <span>Rules are subject to change. Check back regularly for updates.</span>
                    </div>
                    <button className="rules-modal__accept-btn" onClick={onClose}>
                        I Understand
                    </button>
                </div>
            </div>
        </div>
    );
}
