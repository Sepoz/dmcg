import React from "react";
import { Droppable } from "react-beautiful-dnd";

import Card from "../card/Card";
import "./row.css";

const Row = (props) => {
    return (
        <>
            <Droppable droppableId={props.row.id} direction="horizontal">
                {(provided) => (
                    <div
                        className={`${props.row.id}`}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {props.cards.map((card, i) => (
                            <Card
                                key={card.id}
                                card={card}
                                row={props.row.id}
                                index={i}
                            />
                        ))}

                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </>
    );
};

export default Row;
