export const initialData = {
    cards: {
        card1: {
            id: "card1",
            content: {
                name: "Dario Moccia",
                description:
                    "Adds 3 mana of any single color of your choiceto your mana pool, then is discarded. Tapping this artifact can be played as an interrupt.",
                atk: 2,
                def: 3,
                type: "artifact",
            },
        },
        card2: {
            id: "card2",
            content: {
                name: "Mario Doccia",
                description:
                    "Adds 3 mana of any single color of your choiceto your mana pool, then is discarded. Tapping this artifact can be played as an interrupt.",
                atk: 2,
                def: 3,
                type: "artifact",
            },
        },
        card3: {
            id: "card3",
            content: {
                name: "Piero Fasulli",
                description:
                    "Adds 3 mana of any single color of your choiceto your mana pool, then is discarded. Tapping this artifact can be played as an interrupt.",
                atk: 2,
                def: 3,
                type: "artifact",
            },
        },
    },
    rows: {
        rows1: {
            id: "rows1",
            title: "myHand",
            cardIDs: ["card1", "card2", "card3"],
        },
        rows2: {
            id: "rows2",
            title: "handToHand",
            cardIDs: [],
        },
        rows3: {
            id: "rows3",
            title: "longDistance",
            cardIDs: [],
        },
    },
    rowsOrder: ["rows1", "rows2", "rows3"],
};
