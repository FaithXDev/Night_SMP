import { useState } from 'react';

const issueCategories = [
    { value: '', label: 'Select a category' },
    { value: 'purchase', label: '💳 Purchase Issue — Item not received' },
    { value: 'rank', label: '⚔️ Rank Issue — Rank not applied' },
    { value: 'bug', label: '🐛 Bug Report — Something broken' },
    { value: 'appeal', label: '🔓 Ban Appeal — Request unban' },
    { value: 'refund', label: '💰 Refund Request' },
    { value: 'account', label: '👤 Account Issue' },
    { value: 'suggestion', label: '💡 Suggestion' },
    { value: 'other', label: '📝 Other' },
];

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export default function TicketPage({ onBack, onToast }) {
    const [form, setForm] = useState({
        username: '',
        email: '',
        category: '',
        subject: '',
        message: '',
    });
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const categoryLabel = issueCategories.find(c => c.value === form.category)?.label || form.category;

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    subject: `🎫 Night Store Ticket: ${form.subject}`,
                    from_name: 'Night Store Support',
                    // Form fields
                    'Minecraft Username': form.username,
                    'Email': form.email,
                    'Category': categoryLabel,
                    'Subject': form.subject,
                    'Message': form.message,
                }),
            });

            const data = await response.json();

            if (data.success) {
                setSubmitted(true);
                onToast?.('Ticket submitted successfully!');
            } else {
                onToast?.('Failed to submit ticket. Please try again.');
            }
        } catch {
            onToast?.('Network error. Please check your connection and try again.');
        } finally {
            setSubmitting(false);
        }
    };

    const isValid =
        form.username.trim() &&
        form.email.trim() &&
        form.category &&
        form.subject.trim() &&
        form.message.trim();

    if (submitted) {
        return (
            <main className="ticket-page" id="ticket-page">
                <div className="ticket-page__container">
                    <div className="ticket-page__success">
                        <div className="ticket-page__success-icon">✅</div>
                        <h2 className="ticket-page__success-title">Ticket Submitted!</h2>
                        <p className="ticket-page__success-desc">
                            Thank you for reaching out. Our team will review your ticket and
                            get back to you within 24–48 hours via Discord or email.
                        </p>
                        <div className="ticket-page__success-id">
                            <span className="ticket-page__success-label">Ticket ID</span>
                            <span className="ticket-page__success-value">
                                #NS-{Math.random().toString(36).substring(2, 8).toUpperCase()}
                            </span>
                        </div>
                        <div className="ticket-page__success-actions">
                            <button className="ticket-page__btn ticket-page__btn--primary" onClick={onBack}>
                                Back to Store
                            </button>
                            <button
                                className="ticket-page__btn ticket-page__btn--secondary"
                                onClick={() => {
                                    setSubmitted(false);
                                    setForm({ username: '', email: '', category: '', subject: '', message: '' });
                                }}
                            >
                                Submit Another
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="ticket-page" id="ticket-page">
            <div className="ticket-page__container">
                {/* Header */}
                <div className="ticket-page__header">
                    <button className="ticket-page__back" onClick={onBack} id="ticket-back-btn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5" />
                            <polyline points="12 19 5 12 12 5" />
                        </svg>
                        Back
                    </button>

                    <div className="ticket-page__title-wrap">
                        <div className="ticket-page__icon">🎫</div>
                        <h1 className="ticket-page__title">Ticket Support</h1>
                        <p className="ticket-page__subtitle">
                            Having an issue? Fill out the form below and our team will assist you as soon as possible.
                        </p>
                    </div>
                </div>

                {/* Form */}
                <form className="ticket-page__form" onSubmit={handleSubmit} id="ticket-form">
                    <div className="ticket-page__row">
                        <div className="ticket-page__field">
                            <label className="ticket-page__label" htmlFor="ticket-username">
                                Minecraft Username
                            </label>
                            <input
                                type="text"
                                id="ticket-username"
                                name="username"
                                className="ticket-page__input"
                                placeholder="e.g. Steve123"
                                value={form.username}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="ticket-page__field">
                            <label className="ticket-page__label" htmlFor="ticket-email">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="ticket-email"
                                name="email"
                                className="ticket-page__input"
                                placeholder="you@example.com"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="ticket-page__row">
                        <div className="ticket-page__field">
                            <label className="ticket-page__label" htmlFor="ticket-category">
                                Issue Category
                            </label>
                            <select
                                id="ticket-category"
                                name="category"
                                className="ticket-page__input ticket-page__select"
                                value={form.category}
                                onChange={handleChange}
                                required
                            >
                                {issueCategories.map((cat) => (
                                    <option key={cat.value} value={cat.value} disabled={!cat.value}>
                                        {cat.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="ticket-page__field">
                            <label className="ticket-page__label" htmlFor="ticket-subject">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="ticket-subject"
                                name="subject"
                                className="ticket-page__input"
                                placeholder="Brief summary of your issue"
                                value={form.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="ticket-page__field">
                        <label className="ticket-page__label" htmlFor="ticket-message">
                            Message
                        </label>
                        <textarea
                            id="ticket-message"
                            name="message"
                            className="ticket-page__input ticket-page__textarea"
                            placeholder="Describe your issue in detail. Include any relevant information like order IDs, dates, screenshots, etc."
                            rows="6"
                            value={form.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="ticket-page__form-footer">
                        <div className="ticket-page__form-note">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 16v-4" />
                                <path d="M12 8h.01" />
                            </svg>
                            <span>We usually respond within 24–48 hours. For urgent issues, join our Discord.</span>
                        </div>

                        <button
                            type="submit"
                            className={`ticket-page__submit ${!isValid ? 'ticket-page__submit--disabled' : ''}`}
                            disabled={!isValid || submitting}
                            id="ticket-submit-btn"
                        >
                            {submitting ? (
                                <>
                                    <span className="ticket-page__spinner" />
                                    Submitting...
                                </>
                            ) : (
                                <>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="22" y1="2" x2="11" y2="13" />
                                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                    </svg>
                                    Submit Ticket
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}
