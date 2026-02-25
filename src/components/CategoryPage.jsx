import { products } from '../data/products.jsx';

const categoryMeta = {
    rank: {
        title: 'Ranks',
        icon: '👑',
        aboutTitle: 'About Ranks',
        about: 'A Server Rank is a fun way to help support the Night SMP Server! With different perks, commands, and rank colors, the table above is to help you figure out which rank best suits you. If you already have a rank, the value of your current rank is deducted from your future rank upgrades.',
    },
    kit: {
        title: 'Kits',
        icon: '⚔️',
        aboutTitle: 'About Kits',
        about: 'Kits give you a head start with pre-built loadouts featuring armor, weapons, tools, and consumables. Each kit is tailored to a specific playstyle — from starter essentials to overpowered boss-tier gear. Kits can be claimed once per server reset.',
    },
    crate: {
        title: 'Crates',
        icon: '🎁',
        aboutTitle: 'About Crates',
        about: 'Mystery Crates contain randomized loot ranging from basic resources to legendary gear. Try your luck to earn powerful items, rare tools, and exclusive cosmetics. Each crate has a guaranteed minimum value.',
    },
    coin: {
        title: 'Coins',
        icon: '🪙',
        aboutTitle: 'About Coins',
        about: 'Coins are a currency used to purchase items from the Night SMP In-Game Store. You can find vendors that use Coins in any server lobby. Coins are non-refundable and cannot be earned through any in-game methods.',
    },
};

export default function CategoryPage({ category, onBack, onViewDetails, onPurchase }) {
    const meta = categoryMeta[category] || categoryMeta.rank;
    const items = products.filter((p) => p.category === category);

    // Find the most expensive item to mark as "Best Value" (like Hypixel's Gold page)
    const maxPrice = Math.max(...items.map((p) => p.price));

    return (
        <main className="catpage">
            {/* Back + Title */}
            <div className="catpage__header">
                <br></br>
                <br></br>
                <button className="catpage__back" onClick={onBack} id="back-to-home">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>

                    Back
                </button>
                <h1 className="catpage__title">{meta.title}</h1>
            </div>

            {/* Product cards grid */}
            <div className="catpage__grid">
                {items.map((product, i) => {
                    const isBestValue = product.price === maxPrice && items.length > 2;
                    const hasImage = !!product.image;

                    return (
                        <div
                            key={product.id}
                            className={`catpage-card${isBestValue ? ' catpage-card--best' : ''}`}
                            id={`product-${product.id}`}
                            style={{ animationDelay: `${i * 80}ms` }}
                        >
                            {isBestValue && (
                                <div className="catpage-card__best-label">BEST VALUE!</div>
                            )}

                            <div className="catpage-card__icon-area">
                                {hasImage ? (
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="catpage-card__img"
                                        loading="lazy"
                                    />
                                ) : (
                                    <span className="catpage-card__emoji">
                                        {product.icon}
                                    </span>
                                )}
                            </div>

                            <h3 className="catpage-card__name">{product.name}</h3>
                            <p className="catpage-card__desc">{product.description}</p>
                            <p className="catpage-card__price">₹{product.price}.00</p>

                            <button
                                className="catpage-card__buy"
                                onClick={() => onPurchase?.(product)}
                                id={`buy-${product.id}`}
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="9" cy="21" r="1" />
                                    <circle cx="20" cy="21" r="1" />
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                </svg>
                                BUY
                            </button>
                        </div>
                    );
                })}
            </div>

            {/* About section */}
            <div className="catpage__content">
                <section className="catpage__section">
                    <h2 className="catpage__section-title">{meta.aboutTitle}</h2>
                    <p className="catpage__section-text">{meta.about}</p>
                </section>

                <section className="catpage__section">
                    <h2 className="catpage__section-title">Need help?</h2>
                    <p className="catpage__section-text">
                        If you have any questions or issues related to payments,{' '}
                        <a href="https://discord.gg/" target="_blank" rel="noopener noreferrer" className="catpage__link">
                            open a ticket in our Discord
                        </a>
                        , and we will reply as fast as possible.
                    </p>
                </section>
            </div>
        </main>
    );
}
