export default function ProductModal({ product, onClose }) {
    if (!product) return null;

    const hasImage = !!product.image;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()} id="product-modal">
                <button className="modal__close" onClick={onClose}>✕</button>

                <div className="modal__header">
                    {hasImage ? (
                        <div className="modal__image-wrap">
                            <img src={product.image} alt={product.name} className="modal__image" />
                        </div>
                    ) : (
                        <div className="modal__icon">{product.icon}</div>
                    )}
                    <div>
                        <h2 className="modal__title">{product.name}</h2>
                        <span className={`modal__badge modal__badge--${product.category}`}>
                            {product.category.toUpperCase()}
                        </span>
                    </div>
                </div>

                <p className="modal__desc">{product.description}</p>

                <div className="modal__divider" />

                <div className="modal__price-row">
                    <div>
                        <span className="modal__price-label">PRICE</span>
                        <span className="modal__price">₹{product.price}</span>
                    </div>
                    <button
                        className="btn btn--buy modal__buy-btn"
                        onClick={() => window.open('https://discord.gg/uuTE4dYenB', '_blank')}
                    >
                        Buy via Discord
                    </button>
                </div>

                <div className="modal__note">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4" />
                        <path d="M12 8h.01" />
                    </svg>
                    <span>To purchase, open a ticket in our Discord server and mention this product.</span>
                </div>
            </div>
        </div>
    );
}
