import React from "react";

const CardInfo = (props) => {
    return (
        <div>
            <h2>{props.card.name}</h2>
            <p>{props.card.description}</p>
        </div>
    );
};

export default CardInfo;
