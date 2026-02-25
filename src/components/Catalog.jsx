import { useState } from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products.jsx';
import './Catalog.css';

const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'rank', label: 'Ranks' },
    { id: 'kit', label: 'Kits' },
    { id: 'crate', label: 'Crates' },
    { id: 'coin', label: 'Coins' },
];

export default function Catalog({ onViewDetails, onPurchase }) {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredProducts =
        activeFilter === 'all'
            ? products
            : products.filter((p) => p.category === activeFilter);

    return (
        <section className="catalog" id="catalog-section">
            <div className="catalog__header">
                <h2 className="catalog__title">
                    Store
                    <span className="catalog__count">{filteredProducts.length}</span>
                </h2>

                <div className="catalog__filters" id="catalog-filters">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            className={`catalog__filter${activeFilter === cat.id ? ' catalog__filter--active' : ''}`}
                            onClick={() => setActiveFilter(cat.id)}
                            id={`filter-${cat.id}`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="product-grid" id="product-grid">
                {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onInfo={onViewDetails}
                        onBuy={onPurchase}
                    />
                ))}
            </div>
        </section>
    );
}
