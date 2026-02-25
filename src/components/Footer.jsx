import './Footer.css';

export default function Footer() {
    return (
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
                    <a href="#" className="footer__link">Discord</a>
                    <a href="#" className="footer__link">Rules</a>
                    <a href="#" className="footer__link">Forums</a>
                </div>

                <div className="footer__col">
                    <h4 className="footer__col-title">Support</h4>
                    <a href="#" className="footer__link">Ticket Support</a>
                    <a href="#" className="footer__link">Terms of Service</a>
                    <a href="#" className="footer__link">Privacy Policy</a>
                </div>
            </div>

            <div className="footer__bottom">
                <p className="footer__copy">
                    © 2024 NIGHT STORE. Not affiliated with Mojang AB.
                </p>
            </div>
        </footer>
    );
}
