import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Card from "./Card";

const stubCardData = {
    cardName: "Dario Moccia",
    cardDescription:
        "Adds 3 mana of any single color of your choice to your mana pool, then is discarded. Tapping this artifact can be played as an interrupt.",
    cardAttack: 2,
    cardDefence: 3,
    cardType: "artifact",
};

describe("<Card />", () => {
    test("renders without crashing", () => {
        render(<Card cardData={stubCardData} />);
    });

    test("props works", () => {
        const cardRender = render(<Card cardData={stubCardData} />);

        cardRender.getByText("Dario Moccia");
        cardRender.getByText(
            "Adds 3 mana of any single color of your choice to your mana pool, then is discarded. Tapping this artifact can be played as an interrupt."
        );
        cardRender.getByText("2");
        cardRender.getByText("3");
        cardRender.getByText("artifact");
    });
});
