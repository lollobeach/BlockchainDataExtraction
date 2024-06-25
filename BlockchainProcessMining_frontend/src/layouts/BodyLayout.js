import React from 'react';
import {Box} from "@mui/material";
import {Outlet} from "react-router-dom";

function BodyLayout() {
    return (
        <Box position="relative" paddingX={2} paddingY={5}>
            <Outlet/>
        </Box>
    );
}

export default BodyLayout;