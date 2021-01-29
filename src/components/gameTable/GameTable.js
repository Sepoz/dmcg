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

        const start = items.rows[source.droppableId];
        const finish = items.rows[destination.droppableId];

        if (start === finish) {
            const newCardIDs = Array.from(start.cardIDs);
            newCardIDs.splice(source.index, 1);
            newCardIDs.splice(destination.index, 0, draggableId);

            const newRow = {
                ...start,
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
            return;
        }

        const startCardIDs = Array.from(start.cardIDs);
        startCardIDs.splice(source.index, 1);
        const newStart = {
            ...start,
            cardIDs: startCardIDs,
        };

        const finishCardIDs = Array.from(finish.cardIDs);
        finishCardIDs.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            cardIDs: finishCardIDs,
        };

        const newItems = {
            ...items,
            rows: {
                ...items.rows,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
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
