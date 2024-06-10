import { useState } from 'react';
// import './FlippingCard.css';

const FlippingCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="card-container">
            <div className={`card ${isFlipped ? 'flip' : ''}`} onClick={handleFlip}>
                <div className="card-front">
                    <h2>Front Side</h2>
                    <p>This is the front side of the card.</p>
                </div>
                <div className="card-back">
                    <h2>Back Side</h2>
                    <p>This is the back side of the card.</p>
                </div>
            </div>
        </div>
    );
};

export default FlippingCard;
