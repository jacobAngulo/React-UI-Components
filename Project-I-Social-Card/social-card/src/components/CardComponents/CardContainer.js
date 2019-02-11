import React from 'react';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
import './Card.css';

function CardContainer() {
    return (
        <div className="card">
            <CardBanner />
            <CardContent />
        </div>
    )
};

export default CardContainer;