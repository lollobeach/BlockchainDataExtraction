import React, { useState } from 'react';
import { Box, Typography, IconButton } from "@mui/material";
import NestedField from './NestedField';
import { Delete } from '@mui/icons-material';
import AddQueryButton from "./AddQueryButton";

const InputsForm = ({ inputs, setInputs }) => {
    const [showInputs, setShowInputs] = useState(false);

    const handleAddInput = () => {
        setShowInputs(true);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputs({ ...inputs, [name]: value });
    };

    const handleDeleteInput = () => {
        setInputs({ inputId: '', inputName: '', type: '', inputValue: '' });
        setShowInputs(false);
    };

    return (
        <Box>
            <Typography variant="h6">Inputs</Typography>
            {showInputs ? (
                <Box mb={2} display="flex" alignItems="center">
                    <Box flexGrow={1}>
                        <NestedField label="Input ID" name="inputId" value={inputs.inputId} onChange={handleInputChange} />
                        <NestedField label="Input Name" name="inputName" value={inputs.inputName} onChange={handleInputChange} />
                        <NestedField label="Type" name="type" value={inputs.type} onChange={handleInputChange} />
                        <NestedField label="Input Value" name="inputValue" value={inputs.inputValue} onChange={handleInputChange} />
                    </Box>
                    <IconButton onClick={handleDeleteInput} color="error">
                        <Delete />
                    </IconButton>
                </Box>
            ) : (
                <AddQueryButton label="Add Input" onClick={handleAddInput} />
            )}
        </Box>
    );
};

export default InputsForm;
