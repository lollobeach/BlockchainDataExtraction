import {createTheme} from "@mui/material";

export const customTheme = createTheme({

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    padding: 0,
                    minWidth: 0
                }
            }
        }
    }

})