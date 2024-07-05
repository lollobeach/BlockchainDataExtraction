import React from 'react';
import {
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";

import './App.css';
import HomePage from "./pages/HomePage";
import BodyLayout from "./layouts/BodyLayout";
import {ThemeProvider} from "@mui/material";
import {customTheme} from "./theme/customTheme";
import DataProvider from "./dataContext/DataContext";
import Query from "./pages/Query";

const router = createBrowserRouter([
    {
        path: "/", element: <BodyLayout/>,
        children: [
            {path: "/", element: <HomePage/>},
            {path: "/query", element: <Query/>}
        ]
    }
]);

function App() {
    return (
        <ThemeProvider theme={customTheme}>
            <DataProvider>
                <RouterProvider router={router}/>
            </DataProvider>
        </ThemeProvider>
    );
}

export default App;
