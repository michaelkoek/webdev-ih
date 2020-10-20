import React from 'react';

import './card.css';

const Card = ({ cardname, onHandler, ...props }) => {
    return (
        <article className="card-item" onClick={onHandler}>
            { cardname }
            <span>{ props.feateredArtist }</span>
            <span>{ props.title }</span>
            <span>{ props.album }</span>
        </article>
    );
}

export default Card;
