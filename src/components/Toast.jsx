import { useState, useEffect } from 'react';

export default function Toast({ message, visible, onClose }) {
    useEffect(() => {
        if (visible) {
            const timer = setTimeout(onClose, 3000);
            return () => clearTimeout(timer);
        }
    }, [visible, onClose]);

    if (!visible) return null;

    return (
        <div className="toast" id="toast-notification">
            <div className="toast__icon">✓</div>
            <div className="toast__content">
                <span className="toast__title">{message}</span>
            </div>
            <button className="toast__close" onClick={onClose}>✕</button>
        </div>
    );
}
