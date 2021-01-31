import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";

import CardInfo from "../cardInfo/CardInfo";
import "./Card.css";

const Card = (props) => {
    const [showInfo, setShowInfo] = useState(false);

    const handleShowInfo = () => {
        setShowInfo(!showInfo);
    };

    return (
        <Draggable
            draggableId={props.card.id}
            index={props.index}
            isDragDisabled={props.row !== "rows1" ? true : false}
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
                        {showInfo && <CardInfo card={props.card.content} />}
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
