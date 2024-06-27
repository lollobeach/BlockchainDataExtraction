import React, {useMemo, useReducer} from 'react';

import JsonLog from "../mock/jsonLog.json"

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

    const setResults = (results) => {
        dispatch({type: 'SET_RESULTS', payload: results})
    }

    const memorizedValue = useMemo(() => ({
        setResults,
        results: state.results,
    }), [state.results, setResults]);

    return (
        <DataContext.Provider value={memorizedValue}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider;