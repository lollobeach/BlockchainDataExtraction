import React from 'react';
import {Button} from "@mui/material";

const AddButton = ({onClick, label}) => {
    return (
        <Button variant="contained" onClick={onClick}
                sx={{
                    padding: "8px",
                    height: "auto"
                }}>
            {label}
        </Button>
    );
};

export default AddButton;
