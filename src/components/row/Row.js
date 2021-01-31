import React from "react";
import { Droppable } from "react-beautiful-dnd";

import Card from "../card/Card";
import "./row.css";

const Row = (props) => {
    const { row, cards } = props;

    return (
        <>
            <Droppable droppableId={row.id} direction="horizontal">
                {(provided) => (
                    <div
                        className={`${row.id}`}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {cards.map((card, i) => (
                            <Card
                                key={card.id}
                                card={card}
                                row={row.id}
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
