import React from "react";
import { render, screen } from "@testing-library/react";

import UserGuidesPage from "../UserGuidesPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders userGuides page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <UserGuidesPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("userGuides-datatable")).toBeInTheDocument();
    expect(screen.getByRole("userGuides-add-button")).toBeInTheDocument();
});
