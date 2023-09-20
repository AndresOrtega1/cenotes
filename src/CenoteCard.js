import React from 'react';
import { Link } from 'react-router-dom';
import './CenoteCard.css';

const CenoteCard = ({ title, description, imageUrl }) => {
  return (
    <div className="cenote-card">
      <img src={imageUrl} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={`/cenotes/${title}`}>Conocer más</Link>
      </div>
    </div>
  );
};

export default CenoteCard;
