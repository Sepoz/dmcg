import React from "react";
import { Droppable } from "react-beautiful-dnd";

import Card from "../card/Card";
import "../row/row.css";

const Row = (props) => {
    return (
        <>
            <h1>{props.row.title}</h1>
            <Droppable droppableId={props.row.id} direction="horizontal">
                {(provided) => (
                    <div
                        className="row"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {console.log(provided.innerRef)}
                        {props.cards.map((card, i) => (
                            <Card key={card.id} card={card} index={i} />
                        ))}

                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </>
    );
};

export default Row;
