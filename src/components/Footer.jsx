import { useState } from 'react';
import './Footer.css';
import RulesModal from './RulesModal';
import TermsModal from './TermsModal';
import PrivacyModal from './PrivacyModal';
import ForumsModal from './ForumsModal';

export default function Footer({ onNavigateTicket }) {
    const [rulesOpen, setRulesOpen] = useState(false);
    const [termsOpen, setTermsOpen] = useState(false);
    const [privacyOpen, setPrivacyOpen] = useState(false);
    const [forumsOpen, setForumsOpen] = useState(false);

    return (
        <>
            <footer className="footer" id="footer">
                <div className="footer__grid">
                    <div className="footer__brand">
                        <div className="footer__brand-name">NIGHT STORE</div>
                        <p className="footer__brand-desc">
                            The ultimate Minecraft experience. Join a community of thousands
                            and dominate the server.
                        </p>
                    </div>

                    <div className="footer__col">
                        <h4 className="footer__col-title">Store</h4>
                        <a href="#" className="footer__link">Ranks</a>
                        <a href="#" className="footer__link">Crates</a>
                        <a href="#" className="footer__link">Kits</a>
                    </div>

                    <div className="footer__col">
                        <h4 className="footer__col-title">Community</h4>
                        <a href="https://discord.gg/uuTE4dYenB" target="_blank" rel="noopener noreferrer" className="footer__link">Discord</a>
                        <button
                            className="footer__link footer__link--btn"
                            onClick={() => setRulesOpen(true)}
                            id="rules-btn"
                        >
                            Rules
                        </button>
                        <button
                            className="footer__link footer__link--btn"
                            onClick={() => setForumsOpen(true)}
                            id="forums-btn"
                        >
                            Forums
                        </button>
                    </div>

                    <div className="footer__col">
                        <h4 className="footer__col-title">Support</h4>
                        <button
                            className="footer__link footer__link--btn"
                            onClick={onNavigateTicket}
                            id="ticket-support-btn"
                        >
                            Ticket Support
                        </button>
                        <button
                            className="footer__link footer__link--btn"
                            onClick={() => setTermsOpen(true)}
                            id="terms-btn"
                        >
                            Terms of Service
                        </button>
                        <button
                            className="footer__link footer__link--btn"
                            onClick={() => setPrivacyOpen(true)}
                            id="privacy-btn"
                        >
                            Privacy Policy
                        </button>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copy">
                        © 2026 NIGHT STORE. Not affiliated with Mojang AB.
                    </p>
                </div>
            </footer>

            <RulesModal open={rulesOpen} onClose={() => setRulesOpen(false)} />
            <TermsModal open={termsOpen} onClose={() => setTermsOpen(false)} />
            <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
            <ForumsModal open={forumsOpen} onClose={() => setForumsOpen(false)} />
        </>
    );
}
