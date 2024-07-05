import React, {useState} from 'react';
import {Box, Typography, IconButton} from "@mui/material";
import NestedField from './NestedField';
import {Delete} from '@mui/icons-material';
import AddQueryButton from './AddQueryButton';

const StorageStateForm = ({storageState, setStorageState}) => {
    const [showStorageState, setShowStorageState] = useState(false);

    const handleAddInput = () => {
        setShowStorageState(true);
    }

    const handleStorageStateChange = (event) => {
        const {name, value} = event.target;
        setStorageState({...storageState, [name]: value});
    };

    const handleDeleteStorageState = () => {
        setStorageState({variableId: '', variableName: '', type: '', variableValue: '', variableRawValue: ''});
        setShowStorageState(false);
    };

    return (
        <Box>
            <Typography variant="h6">Storage State</Typography>
            {showStorageState ? (
                <Box mb={2} display="flex" alignItems="center">
                    <Box flexGrow={1}>
                        <NestedField label="Variable ID" name="variableId" value={storageState.variableId}
                                     onChange={handleStorageStateChange}/>
                        <NestedField label="Variable Name" name="variableName" value={storageState.variableName}
                                     onChange={handleStorageStateChange}/>
                        <NestedField label="Type" name="type" value={storageState.type}
                                     onChange={handleStorageStateChange}/>
                        <NestedField label="Variable Value" name="variableValue" value={storageState.variableValue}
                                     onChange={handleStorageStateChange}/>
                        <NestedField label="Variable Raw Value" name="variableRawValue"
                                     value={storageState.variableRawValue} onChange={handleStorageStateChange}/>
                    </Box>
                    <IconButton onClick={handleDeleteStorageState} color="error">
                        <Delete/>
                    </IconButton>
                </Box>
            ) : (
                <AddQueryButton label="Add Storage State" onClick={handleAddInput}/>
            )}
        </Box>
    );
};

export default StorageStateForm;
