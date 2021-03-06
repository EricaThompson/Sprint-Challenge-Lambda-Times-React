import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    
    <div className="card">
      <div className="headline">{props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={'story image', props.card.img} />
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  headline: PropTypes.string,
  img: PropTypes.img,
  author: PropTypes.string
}

export default Card;
