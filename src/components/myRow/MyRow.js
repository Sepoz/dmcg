import React from "react";
import { Droppable } from "react-beautiful-dnd";

import MyCard from "../myCard/MyCard";
import "./row.css";

const MyRow = (props) => {
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
                            <MyCard
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

export default MyRow;
