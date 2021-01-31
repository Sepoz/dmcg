import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";

import CardInfo from "../cardInfo/CardInfo";
import "./Card.css";

const Card = (props) => {
    const { card, index, row } = props;

    const [showInfo, setShowInfo] = useState(false);

    // onDoubleClick show a popup with more info on the card
    const handleShowInfo = () => {
        setShowInfo(!showInfo);
    };

    // if the card is removed from your hand set isPlayed to true
    // the function returns true to disable isDragDisabled
    const handleIsPlayed = () => {
        if (row !== "rows1") {
            if (card.content.isPlayed === false) {
                card.content.isPlayed = true;
            }
            return true;
        } else {
            return false;
        }
    };

    // the card will be a single image

    return (
        <Draggable
            draggableId={card.id}
            index={index}
            isDragDisabled={handleIsPlayed()}
        >
            {(provided) => {
                return (
                    <div
                        className="card"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        onDoubleClick={handleShowInfo}
                    >
                        {showInfo && <CardInfo card={card.content} />}
                        <div className="card-image">
                            <img src="" alt="card" />
                        </div>
                    </div>
                );
            }}
        </Draggable>
    );
};

export default Card;
