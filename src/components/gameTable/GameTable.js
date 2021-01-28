import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import { initialData } from "../../mockData/initialData";
import Row from "../row/Row";

const GameTable = () => {
    const [items, setItems] = useState(initialData);

    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const row = items.rows[source.droppableId];
        const newCardIDs = Array.from(row.cardIDs);
        newCardIDs.splice(source.index, 1);
        newCardIDs.splice(destination.index, 0, draggableId);

        const newRow = {
            ...row,
            cardIDs: newCardIDs,
        };

        const newItems = {
            ...items,
            rows: {
                ...items.rows,
                [newRow.id]: newRow,
            },
        };

        setItems(newItems);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            {items.rowsOrder.map((rowsID) => {
                // get all the rows data
                const row = items.rows[rowsID];

                // get the cardIDs of every row, then get all the cards data
                const cards = row.cardIDs.map((cardID) => items.cards[cardID]);

                return <Row key={row.id} row={row} cards={cards} />;
            })}
        </DragDropContext>
    );
};

export default GameTable;
