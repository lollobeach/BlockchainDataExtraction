import React, {useMemo, useReducer} from 'react';

const initialState = {
    results: null,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_RESULTS':
            return {
                ...state,
                results: action.payload
            }
        default:
            return state
    }
}

export const DataContext = React.createContext(initialState);

function DataProvider(props) {

    const [state, dispatch] = useReducer(reducer, initialState)

    const memorizedValue = useMemo(() => {
        const setResults = function (results) {
            dispatch({type: 'SET_RESULTS', payload: results})
        }

        return {
            setResults,
            results: state.results,
        }
    }, [state.results]);

    return (
        <DataContext.Provider value={memorizedValue}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider;