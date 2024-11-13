import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, Rules, Play, Game, Error, Landing } from "./pages";

import { GameProvider } from "./context/GameContext";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Landing />,
            },
            {
                path: "/rules",
                element: <Rules />,
            },
            {
                path: "/play",
                element: <Play />,
            },
            {
                path: "/game/:difficulty",
                element: <Game />,
            },
        ],
    },
]);

function App() {
    return (
        <GameProvider>
            <RouterProvider router={router} />
        </GameProvider>
    );
}

export default App;
