import React from "react";
import { Draggable } from "react-beautiful-dnd";

import "./Card.css";

const Card = (props) => {
    return (
        <Draggable draggableId={props.card.id} index={props.index}>
            {(provided) => {
                return (
                    <div
                        className="card"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        <div className="card-image"></div>
                        <div className="card-text">
                            <h2>{props.card.content.name}</h2>
                            <p>{props.card.content.description}</p>
                        </div>
                        <div className="card-stats">
                            <div className="stat">
                                <div className="value">
                                    {props.card.content.atk}
                                </div>
                                <div className="type">atk</div>
                            </div>
                            <div className="stat">
                                <div className="value">
                                    {props.card.content.def}
                                </div>
                                <div className="type">def</div>
                            </div>
                            <div className="stat">
                                <div className="value">
                                    {props.card.content.type}
                                </div>
                                <div className="type">type</div>
                            </div>
                        </div>
                    </div>
                );
            }}
        </Draggable>
    );
};

export default Card;
