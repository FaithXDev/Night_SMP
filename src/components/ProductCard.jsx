import './ProductCard.css';

export default function ProductCard({ product, onInfo, onBuy }) {
    const categoryLabel = product.category.toUpperCase();
    const hasImage = !!product.image;

    return (
        <div className="product-card" id={`product-${product.id}`}>
            <span className={`product-card__badge product-card__badge--${product.category}`}>
                {categoryLabel}
            </span>

            {hasImage ? (
                <div className="product-card__image-area">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="product-card__img"
                        loading="lazy"
                    />
                </div>
            ) : (
                <div className="product-card__icon-wrap">
                    {product.icon}
                </div>
            )}

            <h3 className="product-card__name">{product.name}</h3>
            <p className="product-card__desc">{product.description}</p>

            <div className="product-card__divider" />

            <div className="product-card__bottom">
                <div className="product-card__price-section">
                    <span className="product-card__price-label">PRICE</span>
                    <span className="product-card__price">₹{product.price}</span>
                </div>

                <div className="product-card__actions">
                    <button className="btn btn--info" id={`info-${product.id}`} onClick={(e) => { e.stopPropagation(); onInfo?.(product); }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 16v-4" />
                            <path d="M12 8h.01" />
                        </svg>
                        Info
                    </button>
                    <button className="btn btn--buy" id={`buy-${product.id}`} onClick={(e) => { e.stopPropagation(); onBuy?.(product); }}>
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
}
